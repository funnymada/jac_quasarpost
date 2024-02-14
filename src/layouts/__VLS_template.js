import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, toggleLeftDrawer, leftDrawerOpen } from './MainLayout.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'menu-list'?: boolean; } &
{ 'q-item'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'QLayout', typeof __VLS_localComponents, "QLayout", "qLayout", "q-layout"> &
__VLS_WithComponent<'QHeader', typeof __VLS_localComponents, "QHeader", "qHeader", "q-header"> &
__VLS_WithComponent<'QToolbar', typeof __VLS_localComponents, "QToolbar", "qToolbar", "q-toolbar"> &
__VLS_WithComponent<'QBtn', typeof __VLS_localComponents, "QBtn", "qBtn", "q-btn"> &
__VLS_WithComponent<'QToolbarTitle', typeof __VLS_localComponents, "QToolbarTitle", "qToolbarTitle", "q-toolbar-title"> &
__VLS_WithComponent<'QAvatar', typeof __VLS_localComponents, "QAvatar", "qAvatar", "q-avatar"> &
__VLS_WithComponent<'QDrawer', typeof __VLS_localComponents, "QDrawer", "qDrawer", "q-drawer"> &
__VLS_WithComponent<'QList', typeof __VLS_localComponents, "QList", "qList", "q-list"> &
__VLS_WithComponent<'QItem', typeof __VLS_localComponents, "QItem", "qItem", "q-item"> &
__VLS_WithComponent<'QItemSection', typeof __VLS_localComponents, "QItemSection", "qItemSection", "q-item-section"> &
__VLS_WithComponent<'QIcon', typeof __VLS_localComponents, "QIcon", "qIcon", "q-icon"> &
__VLS_WithComponent<'QPageContainer', typeof __VLS_localComponents, "QPageContainer", "qPageContainer", "q-page-container"> &
__VLS_WithComponent<'RouterView', typeof __VLS_localComponents, "RouterView", "routerView", "router-view">;
__VLS_components.QLayout; __VLS_components.QLayout; __VLS_components.qLayout; __VLS_components.qLayout; __VLS_components["q-layout"]; __VLS_components["q-layout"];
// @ts-ignore
[QLayout, QLayout,];
__VLS_components.QHeader; __VLS_components.QHeader; __VLS_components.qHeader; __VLS_components.qHeader; __VLS_components["q-header"]; __VLS_components["q-header"];
// @ts-ignore
[QHeader, QHeader,];
__VLS_components.QToolbar; __VLS_components.QToolbar; __VLS_components.qToolbar; __VLS_components.qToolbar; __VLS_components["q-toolbar"]; __VLS_components["q-toolbar"];
// @ts-ignore
[QToolbar, QToolbar,];
__VLS_components.QBtn; __VLS_components.qBtn; __VLS_components["q-btn"];
// @ts-ignore
[QBtn,];
__VLS_components.QToolbarTitle; __VLS_components.QToolbarTitle; __VLS_components.qToolbarTitle; __VLS_components.qToolbarTitle; __VLS_components["q-toolbar-title"]; __VLS_components["q-toolbar-title"];
// @ts-ignore
[QToolbarTitle, QToolbarTitle,];
__VLS_components.QAvatar; __VLS_components.QAvatar; __VLS_components.qAvatar; __VLS_components.qAvatar; __VLS_components["q-avatar"]; __VLS_components["q-avatar"];
// @ts-ignore
[QAvatar, QAvatar,];
__VLS_intrinsicElements.img;
__VLS_components.QDrawer; __VLS_components.QDrawer; __VLS_components.qDrawer; __VLS_components.qDrawer; __VLS_components["q-drawer"]; __VLS_components["q-drawer"];
// @ts-ignore
[QDrawer, QDrawer,];
__VLS_components.QList; __VLS_components.qList; __VLS_components["q-list"];
// @ts-ignore
[QList,];
__VLS_components.QItem; __VLS_components.QItem; __VLS_components.qItem; __VLS_components.qItem; __VLS_components["q-item"]; __VLS_components["q-item"];
// @ts-ignore
[QItem, QItem,];
__VLS_components.QItemSection; __VLS_components.QItemSection; __VLS_components.QItemSection; __VLS_components.QItemSection; __VLS_components.qItemSection; __VLS_components.qItemSection; __VLS_components.qItemSection; __VLS_components.qItemSection; __VLS_components["q-item-section"]; __VLS_components["q-item-section"]; __VLS_components["q-item-section"]; __VLS_components["q-item-section"];
// @ts-ignore
[QItemSection, QItemSection, QItemSection, QItemSection,];
__VLS_components.QIcon; __VLS_components.qIcon; __VLS_components["q-icon"];
// @ts-ignore
[QIcon,];
__VLS_components.QPageContainer; __VLS_components.QPageContainer; __VLS_components.qPageContainer; __VLS_components.qPageContainer; __VLS_components["q-page-container"]; __VLS_components["q-page-container"];
// @ts-ignore
[QPageContainer, QPageContainer,];
__VLS_components.RouterView; __VLS_components.routerView; __VLS_components["router-view"];
// @ts-ignore
[RouterView,];
{
const __VLS_0 = ({} as 'QLayout' extends keyof typeof __VLS_ctx ? { 'QLayout': typeof __VLS_ctx.QLayout; } : 'qLayout' extends keyof typeof __VLS_ctx ? { 'QLayout': typeof __VLS_ctx.qLayout; } : 'q-layout' extends keyof typeof __VLS_ctx ? { 'QLayout': (typeof __VLS_ctx)["q-layout"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QLayout;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, view: ("hHh lpR lFf"), }));
({} as { QLayout: typeof __VLS_0; }).QLayout;
({} as { QLayout: typeof __VLS_0; }).QLayout;
const __VLS_2 = __VLS_1({ ...{}, view: ("hHh lpR lFf"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, view: ("hHh lpR lFf"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'QHeader' extends keyof typeof __VLS_ctx ? { 'QHeader': typeof __VLS_ctx.QHeader; } : 'qHeader' extends keyof typeof __VLS_ctx ? { 'QHeader': typeof __VLS_ctx.qHeader; } : 'q-header' extends keyof typeof __VLS_ctx ? { 'QHeader': (typeof __VLS_ctx)["q-header"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QHeader;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, elevated: (true), class: ("bg-primary text-white"), }));
({} as { QHeader: typeof __VLS_5; }).QHeader;
({} as { QHeader: typeof __VLS_5; }).QHeader;
const __VLS_7 = __VLS_6({ ...{}, elevated: (true), class: ("bg-primary text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, elevated: (true), class: ("bg-primary text-white"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as 'QToolbar' extends keyof typeof __VLS_ctx ? { 'QToolbar': typeof __VLS_ctx.QToolbar; } : 'qToolbar' extends keyof typeof __VLS_ctx ? { 'QToolbar': typeof __VLS_ctx.qToolbar; } : 'q-toolbar' extends keyof typeof __VLS_ctx ? { 'QToolbar': (typeof __VLS_ctx)["q-toolbar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QToolbar;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, }));
({} as { QToolbar: typeof __VLS_10; }).QToolbar;
({} as { QToolbar: typeof __VLS_10; }).QToolbar;
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as 'QBtn' extends keyof typeof __VLS_ctx ? { 'QBtn': typeof __VLS_ctx.QBtn; } : 'qBtn' extends keyof typeof __VLS_ctx ? { 'QBtn': typeof __VLS_ctx.qBtn; } : 'q-btn' extends keyof typeof __VLS_ctx ? { 'QBtn': (typeof __VLS_ctx)["q-btn"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QBtn;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{ onClick: {} as any, }, dense: (true), flat: (true), round: (true), icon: ("menu"), }));
({} as { QBtn: typeof __VLS_15; }).QBtn;
const __VLS_17 = __VLS_16({ ...{ onClick: {} as any, }, dense: (true), flat: (true), round: (true), icon: ("menu"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, dense: (true), flat: (true), round: (true), icon: ("menu"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
let __VLS_20 = { 'click': __VLS_pickEvent(__VLS_19['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_17>).onClick) };
__VLS_20 = { click: (__VLS_ctx.toggleLeftDrawer) };
}
{
const __VLS_21 = ({} as 'QToolbarTitle' extends keyof typeof __VLS_ctx ? { 'QToolbarTitle': typeof __VLS_ctx.QToolbarTitle; } : 'qToolbarTitle' extends keyof typeof __VLS_ctx ? { 'QToolbarTitle': typeof __VLS_ctx.qToolbarTitle; } : 'q-toolbar-title' extends keyof typeof __VLS_ctx ? { 'QToolbarTitle': (typeof __VLS_ctx)["q-toolbar-title"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QToolbarTitle;
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{}, }));
({} as { QToolbarTitle: typeof __VLS_21; }).QToolbarTitle;
({} as { QToolbarTitle: typeof __VLS_21; }).QToolbarTitle;
const __VLS_23 = __VLS_22({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_22));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_23> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23)!;
let __VLS_25!: __VLS_NormalizeEmits<typeof __VLS_24.emit>;
{
const __VLS_26 = ({} as 'QAvatar' extends keyof typeof __VLS_ctx ? { 'QAvatar': typeof __VLS_ctx.QAvatar; } : 'qAvatar' extends keyof typeof __VLS_ctx ? { 'QAvatar': typeof __VLS_ctx.qAvatar; } : 'q-avatar' extends keyof typeof __VLS_ctx ? { 'QAvatar': (typeof __VLS_ctx)["q-avatar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QAvatar;
const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{}, }));
({} as { QAvatar: typeof __VLS_26; }).QAvatar;
({} as { QAvatar: typeof __VLS_26; }).QAvatar;
const __VLS_28 = __VLS_27({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
{
const __VLS_31 = __VLS_intrinsicElements["img"];
const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
const __VLS_33 = __VLS_32({ ...{}, src: ("https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, src: ("https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
}
(__VLS_29.slots!).default;
}
(__VLS_24.slots!).default;
}
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
{
const __VLS_36 = ({} as 'QDrawer' extends keyof typeof __VLS_ctx ? { 'QDrawer': typeof __VLS_ctx.QDrawer; } : 'qDrawer' extends keyof typeof __VLS_ctx ? { 'QDrawer': typeof __VLS_ctx.qDrawer; } : 'q-drawer' extends keyof typeof __VLS_ctx ? { 'QDrawer': (typeof __VLS_ctx)["q-drawer"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QDrawer;
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{}, showIfAbove: (true), modelValue: ((__VLS_ctx.leftDrawerOpen)), side: ("left"), bordered: (true), }));
({} as { QDrawer: typeof __VLS_36; }).QDrawer;
({} as { QDrawer: typeof __VLS_36; }).QDrawer;
const __VLS_38 = __VLS_37({ ...{}, showIfAbove: (true), modelValue: ((__VLS_ctx.leftDrawerOpen)), side: ("left"), bordered: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, showIfAbove: (true), modelValue: ((__VLS_ctx.leftDrawerOpen)), side: ("left"), bordered: (true), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
{
const __VLS_41 = ({} as 'QList' extends keyof typeof __VLS_ctx ? { 'QList': typeof __VLS_ctx.QList; } : 'qList' extends keyof typeof __VLS_ctx ? { 'QList': typeof __VLS_ctx.qList; } : 'q-list' extends keyof typeof __VLS_ctx ? { 'QList': (typeof __VLS_ctx)["q-list"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QList;
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{}, }));
({} as { QList: typeof __VLS_41; }).QList;
const __VLS_43 = __VLS_42({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
{
const __VLS_46 = ({} as 'QItem' extends keyof typeof __VLS_ctx ? { 'QItem': typeof __VLS_ctx.QItem; } : 'qItem' extends keyof typeof __VLS_ctx ? { 'QItem': typeof __VLS_ctx.qItem; } : 'q-item' extends keyof typeof __VLS_ctx ? { 'QItem': (typeof __VLS_ctx)["q-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QItem;
const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, clickable: (true), }));
({} as { QItem: typeof __VLS_46; }).QItem;
({} as { QItem: typeof __VLS_46; }).QItem;
const __VLS_48 = __VLS_47({ ...{}, clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, clickable: (true), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
__VLS_directiveFunction(__VLS_ctx.vRipple)(undefined);
{
const __VLS_51 = ({} as 'QItemSection' extends keyof typeof __VLS_ctx ? { 'QItemSection': typeof __VLS_ctx.QItemSection; } : 'qItemSection' extends keyof typeof __VLS_ctx ? { 'QItemSection': typeof __VLS_ctx.qItemSection; } : 'q-item-section' extends keyof typeof __VLS_ctx ? { 'QItemSection': (typeof __VLS_ctx)["q-item-section"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QItemSection;
const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, avatar: (true), }));
({} as { QItemSection: typeof __VLS_51; }).QItemSection;
({} as { QItemSection: typeof __VLS_51; }).QItemSection;
const __VLS_53 = __VLS_52({ ...{}, avatar: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, avatar: (true), });
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
{
const __VLS_56 = ({} as 'QIcon' extends keyof typeof __VLS_ctx ? { 'QIcon': typeof __VLS_ctx.QIcon; } : 'qIcon' extends keyof typeof __VLS_ctx ? { 'QIcon': typeof __VLS_ctx.qIcon; } : 'q-icon' extends keyof typeof __VLS_ctx ? { 'QIcon': (typeof __VLS_ctx)["q-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QIcon;
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{}, name: ("inbox"), }));
({} as { QIcon: typeof __VLS_56; }).QIcon;
const __VLS_58 = __VLS_57({ ...{}, name: ("inbox"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, name: ("inbox"), });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
}
(__VLS_54.slots!).default;
}
{
const __VLS_61 = ({} as 'QItemSection' extends keyof typeof __VLS_ctx ? { 'QItemSection': typeof __VLS_ctx.QItemSection; } : 'qItemSection' extends keyof typeof __VLS_ctx ? { 'QItemSection': typeof __VLS_ctx.qItemSection; } : 'q-item-section' extends keyof typeof __VLS_ctx ? { 'QItemSection': (typeof __VLS_ctx)["q-item-section"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QItemSection;
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{}, }));
({} as { QItemSection: typeof __VLS_61; }).QItemSection;
({} as { QItemSection: typeof __VLS_61; }).QItemSection;
const __VLS_63 = __VLS_62({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_62));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
(__VLS_64.slots!).default;
}
(__VLS_49.slots!).default;
}
(__VLS_44.slots!).default;
}
(__VLS_39.slots!).default;
}
{
const __VLS_66 = ({} as 'QPageContainer' extends keyof typeof __VLS_ctx ? { 'QPageContainer': typeof __VLS_ctx.QPageContainer; } : 'qPageContainer' extends keyof typeof __VLS_ctx ? { 'QPageContainer': typeof __VLS_ctx.qPageContainer; } : 'q-page-container' extends keyof typeof __VLS_ctx ? { 'QPageContainer': (typeof __VLS_ctx)["q-page-container"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QPageContainer;
const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{}, }));
({} as { QPageContainer: typeof __VLS_66; }).QPageContainer;
({} as { QPageContainer: typeof __VLS_66; }).QPageContainer;
const __VLS_68 = __VLS_67({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
{
const __VLS_71 = ({} as 'RouterView' extends keyof typeof __VLS_ctx ? { 'RouterView': typeof __VLS_ctx.RouterView; } : 'routerView' extends keyof typeof __VLS_ctx ? { 'RouterView': typeof __VLS_ctx.routerView; } : 'router-view' extends keyof typeof __VLS_ctx ? { 'RouterView': (typeof __VLS_ctx)["router-view"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).RouterView;
const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ ...{}, }));
({} as { RouterView: typeof __VLS_71; }).RouterView;
const __VLS_73 = __VLS_72({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_72));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_71, typeof __VLS_73> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73)!;
let __VLS_75!: __VLS_NormalizeEmits<typeof __VLS_74.emit>;
}
(__VLS_69.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["bg-primary"];
__VLS_styleScopedClasses["text-white"];
}
var __VLS_slots!: {};
// @ts-ignore
[toggleLeftDrawer, leftDrawerOpen, leftDrawerOpen, leftDrawerOpen,];
return __VLS_slots;
}
