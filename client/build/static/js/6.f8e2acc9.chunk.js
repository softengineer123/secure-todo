(this["webpackJsonpsecret-notes"]=this["webpackJsonpsecret-notes"]||[]).push([[6],{372:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(419),r=a(415),s=a(424),i=a(423),c=o.a.forwardRef((function(e,t){return o.a.createElement(i.a,Object.assign({direction:"down",ref:t},e))}));t.a=function(e){return o.a.createElement("div",null,o.a.createElement(l.a,{open:!0,TransitionComponent:c,keepMounted:!0,onClose:e.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},o.a.createElement("div",{style:{padding:10}},o.a.createElement(s.a,{id:"alert-dialog-slide-title"},"Are You Sure To Delete This ".concat(e.text,"?")),o.a.createElement(r.a,null,o.a.createElement("div",{className:"div-center"},o.a.createElement("button",{type:"submit",className:"btn btn-accent red-button",onClick:e.onConfirm},"Confirm"))))))}},399:function(e,t,a){"use strict";var n=a(101);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=(0,n(a(221)).default)(o.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=l},400:function(e,t,a){"use strict";var n=a(101);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=(0,n(a(221)).default)(o.default.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");t.default=l},401:function(e,t,a){"use strict";var n=a(101);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=(0,n(a(221)).default)(o.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");t.default=l},402:function(e,t,a){"use strict";var n=a(101);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=(0,n(a(221)).default)(o.default.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=l},420:function(e,t,a){"use strict";a.r(t);var n=a(32),o=a(33),l=a(35),r=a(34),s=a(36),i=a(0),c=a.n(i),d=a(3),u=a.n(d),p=a(7),m=function(e){return c.a.createElement("div",{className:"main-navbar"},c.a.createElement(p.v,{className:"align-items-stretch bg-white flex-md-nowrap border-bottom p-0",type:"light"},c.a.createElement(p.w,{className:"w-100 ml-0",href:"#",style:{lineHeight:"25px",position:"relative"}},c.a.createElement("div",{className:"d-table m-auto"},c.a.createElement("span",{className:"d-none d-md-inline ml-1",style:{position:"absolute",left:"10%"}},"Secret Notes"))),c.a.createElement("a",{className:"toggle-sidebar d-sm-inline d-md-none d-lg-none",onClick:e.toggleOpen},c.a.createElement("i",{className:"material-icons"},"\ue5c4"))))},b=a(8),f=a.n(b),v=a(419),h=a(415),E=a(5),k=a(12),N=(a(6),a(145)),g=a(146),O=c.a.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.dividers,l=void 0!==o&&o,r=Object(k.a)(e,["classes","className","dividers"]);return c.a.createElement("div",Object(E.a)({className:Object(N.a)(a.root,n,l&&a.dividers),ref:t},r))})),C=Object(g.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(O),y=a(424),M=a(423),j=c.a.forwardRef((function(e,t){return c.a.createElement(M.a,Object.assign({direction:"up",ref:t},e))})),w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(s)))).state={open:!0,name:"",error:!1,userData:a.props.userData,token:a.props.token},a.onCreate=function(){a.state.name.length>15||a.state.name.length<1?a.setState({error:!0}):(a.setState({error:!1}),a.props.onCreate(a.state.name,a.state.userData._id,a.state.token),a.props.handleClose())},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(v.a,{open:!0,TransitionComponent:j,keepMounted:!0,onClose:this.props.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},c.a.createElement("div",{style:{padding:10}},c.a.createElement(y.a,{id:"alert-dialog-slide-title"},"Create A new Secret Notebook"),c.a.createElement(C,null,c.a.createElement(p.l,{placeholder:"Notebook Name",value:this.state.name,invalid:this.state.error,onChange:function(t){return e.setState({name:t.target.value})}})),c.a.createElement(h.a,null,c.a.createElement("div",{className:"div-center"},c.a.createElement("button",{type:"button",className:"mb-2 btn btn-md btn-primary mr-1 ",onClick:this.onCreate},"Create"))))))}}]),t}(c.a.Component),x=a(372),D=a(399),S=a.n(D),z=a(401),_=a.n(z),H=a(400),I=a.n(H),L=function(e){return c.a.createElement("div",null,c.a.createElement(p.t,{onClick:function(){return e.onClick(e.index)},active:e.selected},c.a.createElement(p.u,null,c.a.createElement("div",{className:"flex-center",style:{float:"left"}},e.name&&c.a.createElement("span",{style:{marginRight:10}},e.name),e.icon&&c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.icon}})),c.a.createElement("div",{style:{float:"right"}},c.a.createElement("div",{className:"flex-spaced"},e.default&&e.selected&&!e.isEditable&&c.a.createElement("div",null,c.a.createElement(S.a,{fontSize:"small",className:"icon-material-ui",onClick:function(t){t.stopPropagation(),e.toggleEditNotebook()}})),e.default&&e.selected&&e.isEditable&&c.a.createElement("div",{style:{marginLeft:10}},c.a.createElement(I.a,{onClick:function(t){t.stopPropagation(),e.toggleEditNotebook()},style:{color:"#35fc03"},fontSize:"small",className:"icon-material-ui"})),e.default&&e.selected&&c.a.createElement("div",{style:{marginLeft:10}},c.a.createElement(_.a,{onClick:function(t){t.stopPropagation(),e.onDeleteNotebook()},fontSize:"small",className:"icon-material-ui"})))))))},P=a(18),T=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e))).onDeleteNotebook=function(){Object(P.c)(a.state.notebooks[a.state.currentNotebookIndex]._id,a.state.token).then((function(){return a.props.refreshNotebooks(a.state.userData,a.state.token)}))},a.renderNotebooks=function(e,t){return e&&e.map((function(e,n){return c.a.createElement(L,{key:n,name:e.name,isEditable:a.props.isEditable,onClick:a.props.loadNotes,index:n,selected:n===t,onDeleteNotebook:a.openDeleteModal,toggleEditNotebook:a.props.toggleEditNotebook,default:!0})}))},a.openNewNotepadModal=function(){a.setState({newNotepadModal:!0})},a.closeNewNotepadModal=function(){a.setState({newNotepadModal:!1})},a.openDeleteModal=function(){a.setState({deleteModal:!0})},a.closeDeleteModal=function(){a.setState({deleteModal:!1})},a.onCreate=function(e,t,n){return f.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:Object(P.a)(e,t,n).then((function(){a.props.refreshNotebooks(a.state.userData,n)}));case 1:case"end":return o.stop()}}))},a.state={userData:a.props.userData,token:a.props.token,notebooks:a.props.notebooks,newNotepadModal:!1,deleteModal:!1,currentNotebookIndex:a.props.currentNotebookIndex,isEditable:a.props.isEditable},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.notebooks,a=e.newNotepadModal,n=e.userData,o=e.token,l=e.currentNotebookIndex,r=e.deleteModal;return c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(p.s,{className:"nav--no-borders flex-column"},c.a.createElement("div",{style:{cursor:"pointer"}},c.a.createElement(L,{icon:'<i class="material-icons">edit</i>',name:"New Notebook",onClick:this.openNewNotepadModal,default:!1})),this.renderNotebooks(t,l)),a&&c.a.createElement(w,{handleClose:this.closeNewNotepadModal,userData:n,token:o,onCreate:this.onCreate}),r&&c.a.createElement(x.a,{handleClose:this.closeDeleteModal,token:o,onConfirm:this.onDeleteNotebook,text:"Notebook"}))}}]),t}(c.a.Component),V=a(402),R=a.n(V),A=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e))).toggleOpen=function(){return a.setState({isOpen:!a.state.isOpen})},a.state={userData:a.props.userData,token:a.props.token,notebooks:a.props.notebooks,isOpen:!1},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.userData,a=e.token,n=e.notebooks,o=u()("main-sidebar","px-0","col-12",this.state.isOpen?"open":"");return c.a.createElement("div",null,c.a.createElement(p.d,{tag:"aside",className:o,lg:{size:2},md:{size:3}},c.a.createElement(m,{toggleOpen:this.toggleOpen}),c.a.createElement(T,{userData:t,token:a,notebooks:n,loadNotes:this.props.loadNotes,key:t&&a&&n[0]&&n[0]._id&&this.props.currentNotebookIndex&&this.props.isEditable,currentNotebookIndex:this.props.currentNotebookIndex,onSubmit:this.onCreate,refreshNotebooks:this.props.refreshNotebooks,toggleEditNotebook:this.props.toggleEditNotebook,isEditable:this.props.isEditable})),c.a.createElement(R.a,{className:"menu-icon",onClick:this.toggleOpen}))}}]),t}(c.a.Component);t.default=A}}]);
//# sourceMappingURL=6.f8e2acc9.chunk.js.map