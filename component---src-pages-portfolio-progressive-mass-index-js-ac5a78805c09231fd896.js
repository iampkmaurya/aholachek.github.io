webpackJsonp([0x5bbcdb1e4a3f],{18:function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var l in r)a.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(r=[],o=function(){return n}.apply(t,r),!(void 0!==o&&(e.exports=o)))}()},128:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}t.__esModule=!0,t.default=void 0;var i=(o(n(2)),r(n(1))),u=o(n(18)),c="react-tabs__tab",d=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.componentDidMount=function(){this.checkFocus()},n.componentDidUpdate=function(){this.checkFocus()},n.checkFocus=function(){this.props.selected&&this.props.focus&&this.node.focus()},n.render=function(){var e,t=this,n=this.props,r=n.children,o=n.className,s=n.disabled,c=n.disabledClassName,d=(n.focus,n.id),f=n.panelId,p=n.selected,b=n.selectedClassName,h=n.tabIndex,y=n.tabRef,m=l(n,["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"]);return i.default.createElement("li",a({},m,{className:(0,u.default)(o,(e={},e[b]=p,e[c]=s,e)),ref:function(e){t.node=e,y&&y(e)},role:"tab",id:d,"aria-selected":p?"true":"false","aria-disabled":s?"true":"false","aria-controls":f,tabIndex:h||(p?"0":null)}),r)},t}(i.Component);t.default=d,d.defaultProps={className:c,disabledClassName:c+"--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:c+"--selected"},d.propTypes={},d.tabsRole="Tab"},129:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}t.__esModule=!0,t.default=void 0;var i=(o(n(2)),r(n(1))),u=o(n(18)),c=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.children,n=e.className,r=l(e,["children","className"]);return i.default.createElement("ul",a({},r,{className:(0,u.default)(n),role:"tablist"}),t)},t}(i.Component);t.default=c,c.defaultProps={className:"react-tabs__tab-list"},c.propTypes={},c.tabsRole="TabList"},130:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}t.__esModule=!0,t.default=void 0;var i=(o(n(2)),r(n(1))),u=o(n(18)),c="react-tabs__tab-panel",d=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.render=function(){var e,t=this.props,n=t.children,r=t.className,o=t.forceRender,s=t.id,c=t.selected,d=t.selectedClassName,f=t.tabId,p=l(t,["children","className","forceRender","id","selected","selectedClassName","tabId"]);return i.default.createElement("div",a({},p,{className:(0,u.default)(r,(e={},e[d]=c,e)),role:"tabpanel",id:s,"aria-labelledby":f}),o||c?n:null)},t}(i.Component);t.default=d,d.defaultProps={className:c,forceRender:!1,selectedClassName:c+"--selected"},d.propTypes={},d.tabsRole="TabPanel"},131:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}t.__esModule=!0,t.default=void 0;var s=(o(n(2)),r(n(1))),i=(n(63),o(n(132))),u=n(62),c=function(e){function t(n){var r;return r=e.call(this,n)||this,r.handleSelected=function(e,n,o){if("function"!=typeof r.props.onSelect||r.props.onSelect(e,n,o)!==!1){var a={focus:"keydown"===o.type};t.inUncontrolledMode(r.props)&&(a.selectedIndex=e),r.setState(a)}},r.state=t.copyPropsToState(r.props,{},r.props.defaultFocus),r}l(t,e);var n=t.prototype;return n.componentWillReceiveProps=function(e){this.setState(function(n){return t.copyPropsToState(e,n)})},t.inUncontrolledMode=function(e){return null===e.selectedIndex},t.copyPropsToState=function(e,n,r){void 0===r&&(r=!1);var o={focus:r};if(t.inUncontrolledMode(e)){var a=(0,u.getTabsCount)(e.children)-1,l=null;l=null!=n.selectedIndex?Math.min(n.selectedIndex,a):e.defaultIndex||0,o.selectedIndex=l}return o},n.render=function(){var e=this.props,t=e.children,n=(e.defaultIndex,e.defaultFocus,a(e,["children","defaultIndex","defaultFocus"]));return n.focus=this.state.focus,n.onSelect=this.handleSelected,null!=this.state.selectedIndex&&(n.selectedIndex=this.state.selectedIndex),s.default.createElement(i.default,n,t)},t}(s.Component);t.default=c,c.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null},c.propTypes={},c.tabsRole="Tabs"},132:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function i(e){return"getAttribute"in e&&"tab"===e.getAttribute("role")}function u(e){return"true"===e.getAttribute("aria-disabled")}t.__esModule=!0,t.default=void 0;var c,d=(o(n(2)),r(n(1))),f=o(n(18)),p=o(n(64)),b=(n(63),n(62)),h=n(35),y=n(21);try{c=!("undefined"==typeof window||!window.document||!window.document.activeElement)}catch(e){c=!1}var m=function(e){function t(){for(var t,n,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=e.call.apply(e,[this].concat(o))||this,n.tabNodes=[],n.handleKeyDown=function(e){if(n.isTabFromContainer(e.target)){var t=n.props.selectedIndex,r=!1,o=!1;32!==e.keyCode&&13!==e.keyCode||(r=!0,o=!1,n.handleClick(e)),37===e.keyCode||38===e.keyCode?(t=n.getPrevTab(t),r=!0,o=!0):39!==e.keyCode&&40!==e.keyCode||(t=n.getNextTab(t),r=!0,o=!0),r&&e.preventDefault(),o&&n.setSelected(t,e)}},n.handleClick=function(e){var t=e.target;do if(n.isTabFromContainer(t)){if(u(t))return;var r=[].slice.call(t.parentNode.children).filter(i).indexOf(t);return void n.setSelected(r,e)}while(null!==(t=t.parentNode))},t||n}s(t,e);var n=t.prototype;return n.setSelected=function(e,t){e<0||e>=this.getTabsCount()||this.props.onSelect(e,this.props.selectedIndex,t)},n.getNextTab=function(e){for(var t=this.getTabsCount(),n=e+1;n<t;n++)if(!u(this.getTab(n)))return n;for(var r=0;r<e;r++)if(!u(this.getTab(r)))return r;return e},n.getPrevTab=function(e){for(var t=e;t--;)if(!u(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!u(this.getTab(t)))return t;return e},n.getTabsCount=function(){return(0,b.getTabsCount)(this.props.children)},n.getPanelsCount=function(){return(0,b.getPanelsCount)(this.props.children)},n.getTab=function(e){return this.tabNodes["tabs-"+e]},n.getChildren=function(){var e=this,t=0,n=this.props,r=n.children,o=n.disabledTabClassName,a=n.focus,l=n.forceRenderTabPanel,s=n.selectedIndex,i=n.selectedTabClassName,u=n.selectedTabPanelClassName;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var f=this.tabIds.length-this.getTabsCount();f++<0;)this.tabIds.push((0,p.default)()),this.panelIds.push((0,p.default)());return(0,h.deepMap)(r,function(n){var r=n;if((0,y.isTabList)(n)){var f=0,p=!1;c&&(p=d.default.Children.toArray(n.props.children).filter(y.isTab).some(function(t,n){return document.activeElement===e.getTab(n)})),r=(0,d.cloneElement)(n,{children:(0,h.deepMap)(n.props.children,function(t){var n="tabs-"+f,r=s===f,l={tabRef:function(t){e.tabNodes[n]=t},id:e.tabIds[f],panelId:e.panelIds[f],selected:r,focus:r&&(a||p)};return i&&(l.selectedClassName=i),o&&(l.disabledClassName=o),f++,(0,d.cloneElement)(t,l)})})}else if((0,y.isTabPanel)(n)){var b={id:e.panelIds[t],tabId:e.tabIds[t],selected:s===t};l&&(b.forceRender=l),u&&(b.selectedClassName=u),t++,r=(0,d.cloneElement)(n,b)}return r})},n.isTabFromContainer=function(e){if(!i(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-tabs"))break;t=t.parentElement}while(t);return!1},n.render=function(){var e=this,t=this.props,n=(t.children,t.className),r=(t.disabledTabClassName,t.domRef),o=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,l(t,["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName"]));return d.default.createElement("div",a({},o,{className:(0,f.default)(n),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,r&&r(t)},"data-tabs":!0}),this.getChildren())},t}(d.Component);t.default=m,m.defaultProps={className:"react-tabs",focus:!1},m.propTypes={}},35:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(0,u.isTab)(e)||(0,u.isTabList)(e)||(0,u.isTabPanel)(e)}function l(e,t){return i.Children.map(e,function(e){return null===e?null:a(e)?t(e):e.props&&e.props.children&&"object"===o(e.props.children)?(0,i.cloneElement)(e,r({},e.props,{children:l(e.props.children,t)})):e})}function s(e,t){return i.Children.forEach(e,function(e){null!==e&&((0,u.isTab)(e)||(0,u.isTabPanel)(e)?t(e):e.props&&e.props.children&&"object"===o(e.props.children)&&((0,u.isTabList)(e)&&t(e),s(e.props.children,t)))})}t.__esModule=!0,t.deepMap=l,t.deepForEach=s;var i=n(1),u=n(21)},62:function(e,t,n){"use strict";function r(e){var t=0;return(0,a.deepForEach)(e,function(e){(0,l.isTab)(e)&&t++}),t}function o(e){var t=0;return(0,a.deepForEach)(e,function(e){(0,l.isTabPanel)(e)&&t++}),t}t.__esModule=!0,t.getTabsCount=r,t.getPanelsCount=o;var a=n(35),l=n(21)},21:function(e,t){"use strict";function n(e){return e.type&&"Tab"===e.type.tabsRole}function r(e){return e.type&&"TabPanel"===e.type.tabsRole}function o(e){return e.type&&"TabList"===e.type.tabsRole}t.__esModule=!0,t.isTab=n,t.isTabPanel=r,t.isTabList=o},63:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,n){var o,a=0,l=0,u=!1,c=[],d=e[t];return(0,s.deepForEach)(d,function(e){(0,i.isTabList)(e)&&(e.props&&e.props.children&&"object"===r(e.props.children)&&(0,s.deepForEach)(e.props.children,function(e){return c.push(e)}),u&&(o=new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.")),u=!0),(0,i.isTab)(e)?(u&&c.indexOf(e)!==-1||(o=new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.")),a++):(0,i.isTabPanel)(e)&&l++}),o||a===l||(o=new Error("There should be an equal number of 'Tab' and 'TabPanel' in `"+n+"`."+("Received "+a+" 'Tab' and "+l+" 'TabPanel'."))),o}function a(e,t,n,o,a){var l=e[t],s=a||t,i=null;return l&&"function"!=typeof l?i=new Error("Invalid "+o+" `"+s+"` of type `"+r(l)+"` supplied to `"+n+"`, expected `function`."):null!=e.selectedIndex&&null==l&&(i=new Error("The "+o+" `"+s+"` is marked as required in `"+n+"`, but its value is `undefined` or `null`.\n`onSelect` is required when `selectedIndex` is also set. Not doing so will make the tabs not do anything, as `selectedIndex` indicates that you want to handle the selected tab yourself.\nIf you only want to set the inital tab replace `selectedIndex` with `defaultIndex`.")),i}function l(e,t,n,o,a){var l=e[t],s=a||t,i=null;if(null!=l&&"number"!=typeof l)i=new Error("Invalid "+o+" `"+s+"` of type `"+r(l)+"` supplied to `"+n+"`, expected `number`.");else if(null!=e.defaultIndex&&null!=l)return new Error("The "+o+" `"+s+"` cannot be used together with `defaultIndex` in `"+n+"`.\nEither remove `"+s+"` to let `"+n+"` handle the selected tab internally or remove `defaultIndex` to handle it yourself.");return i}t.__esModule=!0,t.childrenPropType=o,t.onSelectPropType=a,t.selectedIndexPropType=l;var s=n(35),i=n(21)},64:function(e,t){"use strict";function n(){return"react-tabs-"+o++}function r(){o=0}t.__esModule=!0,t.default=n,t.reset=r;var o=0},133:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,Object.defineProperty(t,"Tabs",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"TabList",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Tab",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"TabPanel",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"resetIdCounter",{enumerable:!0,get:function(){return i.reset}});var o=r(n(131)),a=r(n(129)),l=r(n(128)),s=r(n(130)),i=n(64)},463:function(e,t,n){e.exports=n.p+"static/prog-mass-3.a2708d29.png"},464:function(e,t,n){e.exports=n.p+"static/prog-mass-csv.81a0bd53.png"},465:function(e,t,n){e.exports=n.p+"static/prog-mass-landing.0b6a826d.png"},467:function(e,t,n){e.exports=n.p+"static/progressive-mass-redesign.90da78ec.png"},219:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),i=r(s),u=n(2),c=(r(u),n(133)),d=n(465),f=r(d),p=n(467),b=r(p),h=n(463),y=r(h),m=n(464),v=r(m),g=n(67),T=r(g),O=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return i.default.createElement(T.default,{title:"Creating a Scorecard for Massachussetts Legislators"},i.default.createElement("p",{className:"lead"},"As a volunteer project, I designed and built"," ",i.default.createElement("a",{href:"https://scorecard.progressivemass.com/",target:"_blank",rel:"noopener noreferrer"},"a new interface to help people explore state legislator voting information")," ","collected by a grassroots organization called Progressive Massachusetts. The app uses a small node API to deliver information previously scattered in various spreadsheets to"," ",i.default.createElement("a",{href:"https://github.com/aholachek/legislator-scorecard"},"an accessible, mobile-friendly front end written in React"),"."),i.default.createElement("p",null,"The initial version made use of a small node backend I wrote that served legistator voting information parsed from a CSV. The backend has since been enhanced other volunteers into a proper database."),i.default.createElement(c.Tabs,null,i.default.createElement(c.TabList,null,i.default.createElement(c.Tab,null,"Original Interface"),i.default.createElement(c.Tab,null,"New Interface")),i.default.createElement(c.TabPanel,null,i.default.createElement("p",null,"Before I built the new site, the legislator voting and scoring information was only accessible in embedded Google Sheets on Progressive Massachusetts' website. This required users to 1) already know who their legislators were, 2) navigate the unwieldy embedded spreadsheet, and 3) to look at a different spreadsheet for information regarding the content of the bills in question."),i.default.createElement("figure",null,i.default.createElement("img",{src:v.default,alt:"the old view of the scorecard -- a busy csv sheet"}),i.default.createElement("figcaption",null,i.default.createElement("b",null,"Older interface:")," In order to understand the spreadsheet, you had to already know who your representative was, and in order to understand the context of any particular vote you had to follow the tiny link at the top to load the full text of the bill. As someone new to state politics, I personally found it difficult to parse."," "))),i.default.createElement(c.TabPanel,null,i.default.createElement("p",null,"The landing page prompts you to enter your address in order to find your Massachusetts House Rep and Senator."),i.default.createElement("figure",null,i.default.createElement("img",{src:f.default,alt:"the progressive mass landing page"}),i.default.createElement("figcaption",null,"I tried to make the landing page as simple and inviting as possible. It has one call to action: enter in your address to find your representatives. (For those who don't want to enter in their address or already know their representatives, there's a link at top right to view all legislators.)")),i.default.createElement("p",null,"Each legislator has a page beginning with a summary of their information and their progressive rating based on votes and bill cosponsorships."),i.default.createElement("figure",null,i.default.createElement("img",{src:y.default,alt:"a scorecard for an individual massachussetts representative"}),i.default.createElement("figcaption",null,"The scorecard rates a rep's votes and bill cosponsorships against Progressive Massachusetts' legislative priorities.")),i.default.createElement("p",null,"Further down the legislator's page, the site juxtaposes an individual legislator's votes with descriptions of the bills that went to a vote, hopefully contextualizing voting information in a way that makes it more accessible for newcomers:"),i.default.createElement("figure",null,i.default.createElement("img",{src:b.default,alt:"the redesigned data view for the progressive mass scorecard"}),i.default.createElement("figcaption",null,"This interface hopefully invites the user to filter and explore the data based on his or her particular interests.")))))},t}(s.Component);t.default=O,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-portfolio-progressive-mass-index-js-ac5a78805c09231fd896.js.map