import ChevronUpDown from '@/components/icons/ChevronUpDown';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronsUpDown } from 'lucide-react';
import { FC, useMemo, useState } from 'react';

const businesses: Array<{ id: string; label: string; avatarUrl?: string }> = [
  {
    id: 'bfbfad40-46cf-400f-8a6d-bfa665b06881',
    label: 'Finvo',
    avatarUrl: '/finvo_logo.png'
  },
  {
    id: '3bab0975-a1f5-40d9-8150-f75b2ce99d65',
    label: 'Ontax',
    avatarUrl: '/ontax_branding_rectangle.svg'
  }
];

/**
 * Select component for switching between businesses in the top navigation bar
 */
const BusinessSelect: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState(businesses[0]);

  const handleBusinessSelect = (id: (typeof businesses)[0]['id']) => {
    const business = businesses.find(business => business.id === id);
    if (!business) return;
    setSelectedBusiness(business);
    setIsOpen(false);
  };

  const businessItems = useMemo(() => {
    return businesses.map(business => (
      <CommandItem key={business.id} onSelect={() => handleBusinessSelect(business.id)}>
        <div className="flex items-center space-x-2">
          <Avatar className="h-5 w-5">
            <AvatarImage src={business.avatarUrl} />
            <AvatarFallback>{business.label.slice(0, 1)}</AvatarFallback>
          </Avatar>
          <span>{business.label}</span>
        </div>
      </CommandItem>
    ));
  }, []);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          aria-label="Select a business"
          className="w-[150px] lg:w-[200px] justify-between"
        >
          <div className="grid grid-flow-col gap-0 lg:gap-2">
            {selectedBusiness.avatarUrl && (
              <Avatar className="h-5 w-5">
                <AvatarImage src={selectedBusiness.avatarUrl} />
                <AvatarFallback>F</AvatarFallback>
              </Avatar>
            )}
            <span className="hidden lg:block">{selectedBusiness.label}</span>
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList className="text-sm">
            <CommandInput placeholder="Search business..." />
            <CommandEmpty>No business found.</CommandEmpty>
            <CommandGroup>{businessItems}</CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default BusinessSelect;
