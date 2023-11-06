"use strict";
exports.__esModule = true;
var UserHoverCard_1 = require("@/components/features/user/UserHoverCard");
var BrandingPlaceholders_1 = require("@/components/icons/BrandingPlaceholders");
var card_1 = require("@/components/ui/card");
var skeleton_1 = require("@/components/ui/skeleton");
/**
 * Projects status card for the dashboard
 */
var ProjectsStatusCard = function (_a) {
    var _b;
    var data = _a.data;
    var projectData = data.items;
    return (React.createElement(card_1.Card, { className: "h-[440px] overflow-hidden" },
        React.createElement(card_1.CardHeader, { className: "mb-1" },
            React.createElement("h3", { className: "font-semibold leading-none tracking-tight" }, "Projects Status"),
            (data === null || data === void 0 ? void 0 : data.amountProjects) && (data === null || data === void 0 ? void 0 : data.delayedProjects) ? (React.createElement("p", { className: "text-sm text-muted-foreground" },
                "Currently, there are ",
                data.amountProjects,
                " projects in total, with",
                ' ',
                data.delayedProjects,
                " delayed projects.")) : (React.createElement(skeleton_1.Skeleton, { className: "h-3.5 w-1/2" }))),
        ((_b = projectData === null || projectData === void 0 ? void 0 : projectData.items) !== null && _b !== void 0 ? _b : Array.from({ length: 5 })).map(function (project, i) {
            var _a, _b;
            if (!project || data.state === 'loading') {
                return React.createElement(ProjectSkeleton, { key: i });
            }
            return (React.createElement(card_1.CardContent, { key: i },
                React.createElement("div", { className: "space-y-8" },
                    React.createElement("div", { className: "flex items-center justify-between" },
                        React.createElement("div", { className: "flex items-center" },
                            ((_a = project.details) === null || _a === void 0 ? void 0 : _a.avatarUrl) ? (React.createElement(project.details.avatarUrl, { className: "w-5 h-5" })) : (React.createElement(BrandingPlaceholders_1.Branding1, { className: "w-5 h-5" })),
                            React.createElement("div", { className: "flex flex-col ml-3" },
                                React.createElement("p", { className: "font-semibold" }, project.title),
                                React.createElement(HoverCard, null,
                                    React.createElement("p", { className: "text-sm text-muted-foreground" },
                                        "Project Manager:\u00A0",
                                        React.createElement(UserHoverCard_1["default"], { user: project.manager, triggerContent: React.createElement("span", { className: "hover:underline underline-offset-4 cursor-pointer" }, getDisplayName(project.manager)) }))))),
                        ((_b = project.details) === null || _b === void 0 ? void 0 : _b.progress) && (React.createElement("p", { className: "font-semibold" },
                            "+",
                            project.details.progress.toFixed(2),
                            React.createElement("span", { className: "text-xs text-muted-foreground" }, " %")))))));
        })));
};
exports["default"] = ProjectsStatusCard;
