(this["webpackJsonpsecret-notes"]=this["webpackJsonpsecret-notes"]||[]).push([[1],{15:function(e,t,a){e.exports={HOSTNAME:"https://secretnotes.herokuapp.com"}},18:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"h",(function(){return m})),a.d(t,"a",(function(){return h})),a.d(t,"i",(function(){return d})),a.d(t,"g",(function(){return f})),a.d(t,"f",(function(){return p})),a.d(t,"d",(function(){return g})),a.d(t,"e",(function(){return E})),a.d(t,"o",(function(){return N})),a.d(t,"j",(function(){return b})),a.d(t,"l",(function(){return v})),a.d(t,"c",(function(){return k})),a.d(t,"k",(function(){return y})),a.d(t,"m",(function(){return w})),a.d(t,"n",(function(){return S}));var n=a(8),r=a.n(n),o=a(17),s=a.n(o),c=a(211),l=a.n(c),i=a(15),u=function(e){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s.a.post("".concat(i.HOSTNAME,"/users"),{newUser:e}).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return t.stop()}}))},m=function(e,t){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",s.a.post("".concat(i.HOSTNAME,"/users/login"),{email:e,password:t}).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return a.stop()}}))},h=function(e,t,a){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s.a.post(i.HOSTNAME+"/noteBooks",{name:e,owner:t},{headers:{Authorization:"Bearer "+a}}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return n.stop()}}))},d=function(e){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:s.a.get(i.HOSTNAME+"/users/me",{headers:{Authorization:"Bearer "+e}}).then((function(e){return e})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}))},f=function(e){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s.a.get(i.HOSTNAME+"/users/me",{headers:{Authorization:"Bearer "+e}}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return t.stop()}}))},p=function(e){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s.a.get(i.HOSTNAME+"/users/me/avatar",{headers:{Authorization:"Bearer "+e}}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return t.stop()}}))},g=function(e,t){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",s.a.get("".concat(i.HOSTNAME,"/noteBooks/").concat(e),{headers:{Authorization:"Bearer "+t}}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return a.stop()}}))},E=function(e,t){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",s.a.get("".concat(i.HOSTNAME,"/noteBook/").concat(e),{headers:{Authorization:"Bearer "+t}}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return a.stop()}}))},N=function(e,t,a){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s.a.post("".concat(i.HOSTNAME,"/noteBooks/").concat(t),{note:e},{headers:{Authorization:"Bearer "+a}}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return n.stop()}}))},b=function(e,t,a){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s.a.delete("".concat(i.HOSTNAME,"/noteBook/").concat(e,"/").concat(t),{headers:{Authorization:"Bearer "+a}}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return n.stop()}}))},v=function(e,t){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",s.a.patch("".concat(i.HOSTNAME,"/noteBook/").concat(e._id),{name:e.name},{headers:{Authorization:"Bearer "+t}}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return a.stop()}}))},k=function(e,t){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",s.a.delete("".concat(i.HOSTNAME,"/noteBook/").concat(e),{headers:{Authorization:"Bearer "+t}}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return a.stop()}}))},y=function(e,t,a,n){return r.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",s.a.patch("".concat(i.HOSTNAME,"/noteBook/").concat(e,"/").concat(t),{note:a},{headers:{Authorization:"Bearer "+n}}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return r.stop()}}))},w=function(e,t){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",s.a.patch("".concat(i.HOSTNAME,"/users/me"),{newUserData:e},{headers:{Authorization:"Bearer "+t}}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return a.stop()}}))},S=function(e,t){var a;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=new l.a).append("avatar",e,e.filename),n.abrupt("return",s.a.post("".concat(i.HOSTNAME,"/users/me/avatar"),a,{headers:{Authorization:"Bearer "+t,"Content-Type":"multipart/form-data"}}).then((function(e){return e})).catch((function(e){return e})));case 3:case"end":return n.stop()}}))}},225:function(e,t,a){e.exports=a(357)},355:function(e,t,a){},356:function(e,t,a){},357:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),s=a.n(o),c=a(49),l=a(28),i=a(56),u=a(32),m=a(33),h=a(35),d=a(34),f=a(36),p=a(18),g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",errors:[],loading:""},a.displayErrors=function(e){return e.map((function(e,t){return e.message}))},a.handleChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.handleInputError=function(){return a.state.errors.length>0?"form-control is-invalid":"form-control"},a.handleSubmit=function(e){e.preventDefault(),a.loginUser(a.state)},a.loginUser=function(e){var t=e.email,n=e.password;Object(p.h)(t,n).then((function(e){a.props.history.push({pathname:"/secretNotes",userToken:e.data.token})})).catch((function(){a.setState({errors:[].concat({message:"Unable To Login"})})}))},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.errors;return r.a.createElement("div",{className:"div-center form-responsive-login"},r.a.createElement("div",{className:"card card-small mb-4"},r.a.createElement("div",{className:"card-header border-bottom"},r.a.createElement("h4",{className:"text-center"},"Login")),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item p-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"flex-column-center"},r.a.createElement("div",{className:"form-group col-md-6  "},r.a.createElement("label",{htmlFor:"feEmailAddress",onChange:this.handleChange},"Email"),r.a.createElement("input",{name:"email",type:"email",className:this.handleInputError(n),id:"feEmailAddress",placeholder:"Email",value:t,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group col-md-6",style:{marginTop:10}},r.a.createElement("label",{htmlFor:"fePassword"},"Password"),r.a.createElement("input",{name:"password",type:"password",className:this.handleInputError(n),id:"fePassword",onChange:this.handleChange,value:a,placeholder:"Password"})," ")),r.a.createElement("h6",{className:"text-center",style:{color:"red"}},this.displayErrors(n)),r.a.createElement("div",{className:"flex-center"},r.a.createElement("button",{type:"submit",className:"btn btn-accent",style:{marginTop:10}},"Sign In")))))))),r.a.createElement(l.b,{to:"/register",className:"bottom-nav-text "}," ",r.a.createElement("h6",null," ","Register ",r.a.createElement("i",{className:"arrow right bottom-nav-text-i"})," ")))}}]),t}(n.Component),E=Object(c.g)(g),N=a(71),b=a(8),v=a.n(b),k=a(7),y=a(220),w=a(3),S=a.n(w),x=function(e){var t=e.title,a=e.subtitle,n=e.className,o=Object(y.a)(e,["title","subtitle","className"]),s=S()(n,"text-center","text-md-left","mb-sm-0");return r.a.createElement(k.d,Object.assign({xs:"12",sm:"4",className:s},o),r.a.createElement("span",{className:"text-uppercase page-subtitle"},a),r.a.createElement("h3",{className:"page-title"},t))},O=a(15),C=a(209),j=a(218),A=a.n(j),T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).getFile=function(e){var t=e.target.files[0];t&&a.setState({imageToUpload:t},(function(){a.uploadImage(),a.setState({loading:!0})}))},a.handleChangeFile=function(){a.refs.fileUploader.click()},a.uploadImage=function(){Object(p.n)(a.state.imageToUpload,a.state.token).then((function(e){e.data&&a.setState({error:!1},(function(){return a.props.changeAvatar(e.data)}))})).catch((function(e){a.setState({error:!0})}))},a.renderProfileImage=function(e){return e?r.a.createElement("div",{className:"flex-center"},r.a.createElement("div",{onError:null,style:{backgroundImage:"url(".concat(O.HOSTNAME,"/").concat(e,")")},className:"profile-avatar-main"})):r.a.createElement("div",{className:"flex-center"},r.a.createElement(C.a,{name:a.state.firstName,round:!0,size:"10vw",className:"rounded-circle mr-2"}))},a.state={firstName:a.props.userData&&a.props.userData.firstName,lastName:a.props.userData&&a.props.userData.lastName,email:a.props.userData&&a.props.userData.email,currentSecret:a.props.userData&&a.props.userData.currentSecret,token:a.props.token,imageToUpload:null,error:!1},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(k.b,{small:!0,className:"mb-4 pt-3"},r.a.createElement(k.c,{className:"border-bottom text-center"},r.a.createElement("div",{className:"mb-3 mx-auto"},this.renderProfileImage(this.props.profileImage),r.a.createElement("input",{onChange:this.getFile,style:{display:"none"},type:"file",ref:"fileUploader"})),r.a.createElement("h4",{className:"mb-0"},this.state.firstName),r.a.createElement("span",{className:"text-muted d-block mb-2"},this.state.jobTitle),r.a.createElement(k.a,{pill:!0,outline:!0,size:"sm",className:"mb-2",onClick:this.handleChangeFile,style:{paddingLeft:50,paddingRight:50}},r.a.createElement(A.a,{className:"material-icons mr-1"},"Change Image"))),this.state.error&&r.a.createElement("h8",{style:{color:"red",textAlign:"center",marginTop:10}},"We Encountered An Error"),r.a.createElement(k.q,{flush:!0},r.a.createElement(k.r,{className:"px-4"},r.a.createElement("div",{className:"text-center",style:{padding:20}},r.a.createElement("h6",{className:"mb-0 text-center"},"Personalize Your Profile with a better photo of Yourself"," ")))))}}]),t}(r.a.Component),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.onSaveChanges=function(){if(a.areChangesAllowed(a.state)){var e={firstName:a.state.firstName,lastName:a.state.lastName,email:a.state.email,secret:a.state.secret};a.updateChanges(e)}},a.updateChanges=function(e){Object(p.m)(e,a.state.token).then((function(e){a.props.updateChanges(e.data)}))},a.areChangesAllowed=function(e){var t=e.firstName,a=e.lastName,n=e.email;return t.length>0&&a.length>0&&n.length>0},a.state={firstName:a.props.userData&&a.props.userData.firstName,lastName:a.props.userData&&a.props.userData.lastName,email:a.props.userData&&a.props.userData.email,secret:a.props.userData&&a.props.userData.secret,token:a.props.token},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.secret,o=e.email;return r.a.createElement(k.b,{small:!0,className:"mb-4"},r.a.createElement(k.c,{className:"border-bottom"},r.a.createElement("h6",{className:"m-0"},"Your Profile")),r.a.createElement(k.q,{flush:!0},r.a.createElement(k.r,{className:"p-3"},r.a.createElement(k.x,null,r.a.createElement(k.d,null,r.a.createElement(k.k,null,r.a.createElement(k.x,{form:!0},r.a.createElement(k.d,{md:"6",className:"form-group"},r.a.createElement("label",{htmlFor:"feFirstName"},"First Name"),r.a.createElement(k.l,{id:"feFirstName",name:"firstName",placeholder:"First Name",value:t||"",onChange:this.handleChange})),r.a.createElement(k.d,{md:"6",className:"form-group"},r.a.createElement("label",{htmlFor:"feLastName"},"Last Name"),r.a.createElement(k.l,{name:"lastName",id:"feLastName",placeholder:"Last Name",value:a||"",onChange:this.handleChange}))),r.a.createElement(k.x,{form:!0},r.a.createElement(k.d,{className:"form-group"},r.a.createElement("label",{htmlFor:"feEmail"},"Email"),r.a.createElement(k.l,{name:"email",type:"email",id:"feEmail",placeholder:"Email Address",value:o||"",onChange:this.handleChange,autoComplete:"email"}))),r.a.createElement(k.x,{form:!0},r.a.createElement(k.d,{md:"12",className:"form-group"},r.a.createElement("label",{htmlFor:"feDescription"},"Current Secret"),r.a.createElement(k.m,{name:"secret",id:"feDescription",rows:"5",onChange:this.handleChange,value:n||""}))),r.a.createElement("div",{className:"flex-center"},r.a.createElement(k.a,{theme:"primary",className:"mb-2 mr-1",onClick:this.onSaveChanges},"Save Changes"))))))))}}]),t}(r.a.Component),I=function(e){return r.a.createElement(k.f,{fluid:!0,className:"main-content-container px-4"},r.a.createElement(k.x,{noGutters:!0,className:"page-header py-4"},r.a.createElement(x,{title:"User Profile",subtitle:"Overview",md:"12",className:"ml-sm-auto mr-sm-auto"})),r.a.createElement(k.x,null,r.a.createElement(k.d,{lg:"4"},r.a.createElement(T,{userData:e.userData,token:e.token,profileImage:e.profileImage,changeAvatar:e.changeAvatar})),r.a.createElement(k.d,{lg:"8"},r.a.createElement(D,{userData:e.userData,token:e.token,updateChanges:e.updateChanges}))))},F=r.a.lazy((function(){return Promise.all([a.e(0),a.e(4),a.e(5)]).then(a.bind(null,421))})),B=r.a.lazy((function(){return a.e(7).then(a.bind(null,422))})),z=r.a.lazy((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,420))})),M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r))))._isMounted=!1,a.state={loading:!0,userData:null,profileImage:null,error:!1,token:null,notebooks:[],currentNotes:[],currentNotebook:{},currentNotebookIndex:0,showedNotes:[],isEditable:!1,searchTerm:""},a.getAvatar=function(e){var t;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.awrap(Object(p.f)(e));case 2:(t=n.sent)&&a.setState({profileImage:t.data});case 4:case"end":return n.stop()}}))},a.loadNotebooks=function(e,t){var n,r;return v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,v.a.awrap(Object(p.d)(e._id,t));case 2:n=o.sent,r=n.data,a.setState({notebooks:Object(N.a)(r)},(function(){return r.length>0&&a.loadNotes(0)}));case 5:case"end":return o.stop()}}))},a.createDefaultNotebook=function(){a.setState({startTip:!0})},a.loadNotes=function(e){var t,n;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=a.state.notebooks[e],a.setState({currentNotebookIndex:-1}),r.next=4,v.a.awrap(Object(p.e)(t._id,a.state.token));case 4:n=r.sent,a.setState({currentNotes:Object(N.a)(a.sortNotes(n.data)),showedNotes:Object(N.a)(a.sortNotes(n.data)),currentNotebook:t,currentNotebookIndex:e,isEditable:!1,loading:!1});case 6:case"end":return r.stop()}}))},a.sortNotes=function(e){return e.notes},a.toggleEditNotebook=function(){a.state.isEditable?a.saveEditNotebook():a.setState({isEditable:!a.state.isEditable})},a.refreshNotes=function(e){a.setState({currentNotes:e,showedNotes:e})},a.saveEditNotebook=function(){a.setState({isEditable:!1}),Object(p.l)(a.state.currentNotebook,a.state.token)},a.onChangeNotebookName=function(e){var t=a.state.currentNotebook;t.name=e.target.value,a.setState({currentNotebook:t})},a.handleSearchNotes=function(e){return a.setState({searchTerm:e.target.value,searchLoading:!0},(function(){return a.handleSearchTerm(a.state.searchTerm)}))},a.handleSearchTerm=function(e){var t=Object(N.a)(a.state.currentNotes),n=new RegExp(e,"gi"),r=t.reduce((function(e,t){return(t.note.title.match(n)||t.note.description.match(n))&&e.push(t),e}),[]);a.setState({showedNotes:r})},a.updateUser=function(e){a.setState({userData:e})},a.changeAvatar=function(e){a.setState({profileImage:e})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var t=this.props.location.userToken;t||this.props.history.push("/login"),Object(p.g)(t).then((function(a){e._isMounted&&(e.getAvatar(t),e.loadNotebooks(a.data,t),e.setState({token:t}),e.setState({userData:a.data}),e.setState({loading:!1}))})).catch((function(t){e.setState({error:!0}),e.setState({loading:!1})}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.props.match,a=this.state,o=a.userData,s=a.token,l=a.notebooks,i=a.currentNotebook,u=a.loading,m=a.currentNotebookIndex,h=a.showedNotes,d=a.isEditable,f=a.profileImage,p=a.searchTerm;return console.log("new stat",this.state),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(k.f,{fluid:!0},r.a.createElement(k.x,null,r.a.createElement(z,{userData:o,token:s,key:o&&l[0]&&l[0]._id&&m,notebooks:l,loadNotes:this.loadNotes,currentNotebookIndex:m,refreshNotebooks:this.loadNotebooks,toggleEditNotebook:this.toggleEditNotebook,isEditable:d}),r.a.createElement(k.d,{className:"main-content p-0",lg:{size:10,offset:2},md:{size:9,offset:3},sm:"12",tag:"main"},r.a.createElement(B,{userData:o,token:s,handleSearchChange:this.handleSearchNotes,searchValue:p,profileImage:f,key:o&&o.firstName}),r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:t.path,render:function(){return r.a.createElement(F,{userData:o&&o,loading:u,firstNotebook:l&&l.length>0,token:s,notes:h,NotebookId:i._id,refreshNotes:e.refreshNotes,notebookHeader:i.name,isEditable:d,onChangeNoteBookName:e.onChangeNotebookName})}}),r.a.createElement(c.b,{exact:!0,path:"".concat(t.path,"/profile"),render:function(){return r.a.createElement(I,{component:I,updateChanges:e.updateUser,profileImage:f,userData:o,token:s,key:o&&o._id,changeAvatar:e.changeAvatar})}}))))))}}]),t}(n.Component),P=Object(c.g)(M),H=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",email:"",password:"",secret:"",errors:[]},a.displayErrors=function(e){return e.map((function(e,t){return e.message}))},a.handleChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.handleSecretChange=function(e){a.setState({secret:e.target.value})},a.handleInputError=function(e,t){return e.some((function(e){return e.form&&e.form.includes(t)}))?"form-control is-invalid":"form-control"},a.handleSubmit=function(e){e.preventDefault(),a.isFormValid()&&(a.setState({errors:[]}),a.saveUser(a.state))},a.getEmptyFields=function(e){var t=[];return Object.keys(e).forEach((function(a){""===e[a]&&t.push(a)})),t.toString()},a.isFormValid=function(){var e,t=[];return a.isFormEmpty(a.state)?(e={message:"Fill in all fields",form:a.getEmptyFields(a.state)},a.setState({errors:t.concat(e)}),!1):!!a.isPasswordValid(a.state)||(e={message:"The Password must be Stronger"},a.setState({errors:t.concat(e)}),!1)},a.isFormEmpty=function(e){var t=e.firstName,a=e.lastName,n=e.password,r=e.email,o=e.secret;return!t.length||!a.length||!o.length||!r.length||!n.length},a.saveUser=function(e){var t=e.firstName,n=e.lastName,r=e.email,o=e.password,s=e.secret;Object(p.b)({firstName:t,lastName:n,email:r,password:o,secret:s}).then((function(){a.props.history.push("/login")})).catch((function(e){e={message:"Server Error"},a.setState({errors:[].concat(e)})}))},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"isPasswordValid",value:function(e){var t=e.password,a=/[A-Z]/,n=/[a-z]/,r=/[0-9]/,o=/[!|@|#|$|%|^|&|*|(|)|-|_]/;if(t.length<8)return!1;for(var s=0,c=0,l=0,i=0,u=0;u<t.length;u++)a.test(t[u])?s++:n.test(t[u])?c++:r.test(t[u])?l++:o.test(t[u])&&i++;return!(s<1||c<1||l<1||i<1)}},{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,o=e.password,s=e.secret,c=e.errors;return r.a.createElement("div",{className:"div-center form-responsive",style:{marginBottom:100}},r.a.createElement("div",{className:"card card-small mb-4"},r.a.createElement("div",{className:"card-header border-bottom"},r.a.createElement("h4",{className:"text-center"},"Registration")),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item p-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"feFirstName"},"First Name"),r.a.createElement("input",{name:"firstName",type:"text",className:this.handleInputError(c,"firstName"),id:"feFirstName",placeholder:"First Name",value:t,onChange:this.handleChange})," "),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"feLastName"},"Last Name"),r.a.createElement("input",{name:"lastName",type:"text",className:this.handleInputError(c,"lastName"),id:"feLastName",placeholder:"Last Name",value:a,onChange:this.handleChange})," ")),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"feEmailAddress",onChange:this.handleChange},"Email"),r.a.createElement("input",{name:"email",type:"email",className:this.handleInputError(c,"email"),id:"feEmailAddress",placeholder:"Email",value:n,onChange:this.handleChange})," "),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"fePassword"},"Password"),r.a.createElement("input",{name:"password",type:"password",className:this.handleInputError(c,"password"),id:"fePassword",onChange:this.handleChange,value:o,placeholder:"Password"})," ")),r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement("h6",{className:"text-center",onChange:this.handleChange,value:s},"Greatest Secret"),r.a.createElement("textarea",{name:"secret",className:this.handleInputError(c,"secret"),rows:5,placeholder:"I love putin",onChange:this.handleSecretChange,value:s})),c.length>0&&r.a.createElement("h6",{className:"text-center",style:{color:"red"}},this.displayErrors(c)),r.a.createElement("div",{className:"flex-center"},r.a.createElement("button",{type:"submit",className:"btn btn-accent"},"Sign up")))))))),r.a.createElement(l.b,{to:"/login",className:"bottom-nav-text"}," ",r.a.createElement("h6",null," ","Login ",r.a.createElement("i",{className:"arrow right bottom-nav-text-i"})," ")))}}]),t}(n.Component),U=Object(c.g)(H),L=Object(c.g)((function(e){return r.a.createElement("div",{className:"error"},r.a.createElement("div",{className:"error__content"},r.a.createElement("h2",null,"404"),r.a.createElement("h3",null,"This page is not available"),r.a.createElement("p",null,"Please go back to Login"),r.a.createElement("button",{type:"button",className:"btn btn-accent btn-pill",onClick:function(){e.history.push("/login")}},"\u2190 Go Back")))})),_=(a(354),a(355),a(356),Object(c.g)((function(){return r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",render:function(){return r.a.createElement(c.a,{to:"/login"})}}),r.a.createElement(c.b,{exact:!0,path:"/register",render:function(){return r.a.createElement(U,{component:U})}}),r.a.createElement(c.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(E,{component:E})}}),r.a.createElement(c.b,{path:"/secretNotes",render:function(){return r.a.createElement(P,{component:P})}}),r.a.createElement(c.b,{path:"",component:L}))})));s.a.render(r.a.createElement(l.a,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[225,2,3]]]);
//# sourceMappingURL=main.9f4f1767.chunk.js.map