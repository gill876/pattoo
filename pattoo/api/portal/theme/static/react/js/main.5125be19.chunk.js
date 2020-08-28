(this["webpackJsonppattoo-portal"]=this["webpackJsonppattoo-portal"]||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),s=a.n(r),o=a(11),c=a(6),i=a(1),m=a(2),d=a(5),u=a(4),p=a(3),h=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={selected:"",menu:"text-sm mt-6 hidden md:block"},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"handleClick",value:function(){"text-sm mt-6 hidden md:block"===this.state.menu?this.setState({menu:"text-sm mt-6 md:block"}):this.setState({menu:"text-sm mt-6 hidden md:block"})}},{key:"render",value:function(){var e="block px-4 flex justify-start border-r-4 border-white",t="block px-4 flex justify-start border-r-4 border-gray-700";return l.a.createElement("div",{className:"mt-4 md:col-span-1 md:flex md:justify-end"},l.a.createElement("nav",{className:"text-right"},l.a.createElement("div",{className:"flex justify-between items-center"},l.a.createElement("h1",{className:"font-bold uppercase p-4 border-b border-gray-100"},l.a.createElement(o.b,{className:"hover:text-gray-700 tracking-widest",to:"/admin"},"Pattoo Portal")),l.a.createElement("div",{className:"px-4 cursor-pointer md:hidden",onClick:this.handleClick},l.a.createElement("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"menu w-6 h-6"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})))),l.a.createElement("ul",{className:this.state.menu,id:"menu"},l.a.createElement("li",{className:"text-gray-700 font-bold py-1"},l.a.createElement(o.b,{className:"home"===this.props.current?t:e,to:"/admin"},l.a.createElement("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"home w-6 h-6"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})),l.a.createElement("span",{className:"pt-1 pl-3"},"Home"))),l.a.createElement("li",{className:"text-gray-700 font-bold py-1"},l.a.createElement(o.b,{className:"users"===this.props.current?t:e,to:"/admin/users"},l.a.createElement("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"user-group w-6 h-6"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})),l.a.createElement("span",{className:"pt-1 pl-3"},"Users"))),l.a.createElement("li",{className:"text-gray-700 font-bold py-1"},l.a.createElement(o.b,{className:"agents"===this.props.current?t:e,to:"/admin/agents"},l.a.createElement("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"presentation-chart-bar w-6 h-6"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"})),l.a.createElement("span",{className:"pt-1 pl-3"},"Agents"))),l.a.createElement("li",{className:"text-gray-700 font-bold py-1"},l.a.createElement(o.b,{className:"purge"===this.props.current?t:e,to:"/admin/purge"},l.a.createElement("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"trash w-6 h-6"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})),l.a.createElement("span",{className:"pt-1 pl-3"},"Purge Data"))),l.a.createElement("li",{className:"text-gray-700 font-bold py-1"},l.a.createElement(o.b,{className:"block px-4 flex justify-start border-r-4 border-white",to:"/admin"},l.a.createElement("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"logout w-6 h-6"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})),l.a.createElement("span",{className:"pt-1 pl-3"},"Logout"))))))}}]),a}(l.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"handleClick",value:function(e){this.props.modalClick(e)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:this.props.mStyle.vIew,className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"},l.a.createElement("div",{className:"relative w-auto my-6 mx-auto max-w-full md:max-w-3xl"},l.a.createElement("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},l.a.createElement("div",{className:"flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t"},l.a.createElement("h3",{className:"px-4 text-3xl font-semibold"},this.props.mElements.title),l.a.createElement("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"},l.a.createElement("span",{id:"close-icon",onClick:this.handleClick,className:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"},"\xd7"))),l.a.createElement("div",{className:"relative p-6 flex-auto overflow-auto"},this.props.mElements.content),l.a.createElement("div",{className:"flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b"},l.a.createElement("button",{id:"close-button",className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1",type:"button",style:{transition:"all .15s ease"},onClick:this.handleClick},"Close"),l.a.createElement("button",{id:"save-button",className:"hidden bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1",type:"button",style:{transition:"all .15s ease"},onClick:this.handleClick},"Save Changes"))))),l.a.createElement("div",{style:this.props.mStyle.bLur,className:"opacity-25 fixed inset-0 z-40 bg-black"}))}}]),a}(l.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={modalView:{display:"none"},modalBlur:{display:"none"}},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"handleClick",value:function(e){var t=e.target.id;"modal-button"===t?JSON.stringify(this.state.modalView)===JSON.stringify({display:"none"})&&this.setState({modalView:{},modalBlur:{}}):"close-button"===t||"close-icon"===t||"close-out"===t?JSON.stringify(this.state.modalView)===JSON.stringify({})&&this.setState({modalView:{display:"none"},modalBlur:{display:"none"}}):"save-button"===t&&(alert("Changes saved"),JSON.stringify(this.state.modalView)===JSON.stringify({})&&this.setState({modalView:{display:"none"},modalBlur:{display:"none"}}))}},{key:"render",value:function(){var e={bLur:this.state.modalBlur,vIew:this.state.modalView},t={title:"Modal Title",content:l.a.createElement("p",{className:"my-4 text-gray-600 text-lg leading-relaxed"},"I always felt like I could do anything. That\u2019s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can\u2019t do anything, you won\u2019t do anything. I was taught I could do everything.")};return l.a.createElement("div",{className:"grid md:grid-cols-7"},l.a.createElement(h,{current:"home"}),l.a.createElement("div",{className:"md:col-span-6 md:flex md:flex-col md:justify-center"},l.a.createElement("div",{className:"text-lg md:text-3xl text-center font-bold tracking-wider mt-3 pt-2"},"Home"),l.a.createElement("div",{className:""},l.a.createElement("button",{id:"modal-button",className:"bg-gray-800 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1",type:"button",style:{transition:"all .15s ease"},onClick:this.handleClick},"Open regular modal")),l.a.createElement(b,{mElements:t,mStyle:e,modalClick:this.handleClick})))}}]),a}(l.a.Component),g=a(14),x=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={username:"",password:""},n.handleInputChange=n.handleInputChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(g.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.getElementById("csrf-token").getAttribute("content"),a=document.getElementById("login-form"),n=new FormData(a);fetch("/api/login",{method:"POST",headers:{"X-CSRFToken":t},credentials:"same-origin",body:n}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container flex content-center items-center min-h-screen min-w-full"},l.a.createElement("div",{className:"flex flex-col items-center min-w-full"},l.a.createElement("div",{className:"items-center w-1/5 sm:w-1/6 flex flex-col items-center"},l.a.createElement("img",{className:"",src:"/static/react/img/pattoo.png",alt:"Pattoo Logo"}),l.a.createElement("span",{className:"mt-5 uppercase text-base md:text-2xl text-center"},"sign in")),l.a.createElement("div",null,l.a.createElement("form",{id:"login-form",className:"flex flex-col items-center",method:"POST",onSubmit:this.handleSubmit},l.a.createElement("input",{id:"user-input",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.handleInputChange,className:"border-b-2 border-gray-500 mt-3 text-center shadow-md rounded-full focus:outline-none focus:shadow-outline"}),l.a.createElement("input",{id:"password-input",name:"password",type:"password",value:this.state.password,placeholder:"Password",onChange:this.handleInputChange,className:"border-b-2 border-gray-500 mt-3 text-center shadow-md rounded-full focus:outline-none focus:shadow-outline"}),l.a.createElement("button",{id:"login-button",className:"btn mt-5 border-2 border-gray-500 shadow-md text-gray-800 hover:text-white hover:bg-gray-500 transition ease-out duration-500 focus:outline-none",type:"submit"},"Login")))))}}]),a}(l.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("thead",{className:"bg-gray-800 text-white"},l.a.createElement("tr",null,l.a.createElement("th",{className:"text-left py-3 px-4 uppercase font-semibold text-sm"},"User ID"),l.a.createElement("th",{className:"text-left py-3 px-4 uppercase font-semibold text-sm"},"First Name"),l.a.createElement("th",{className:"text-left py-3 px-4 uppercase font-semibold text-sm"},"Last Name"),l.a.createElement("th",{className:"text-left py-3 px-4 uppercase font-semibold text-sm"},"Username"),l.a.createElement("th",{className:"text-left py-3 px-4 uppercase font-semibold text-sm"},"Enabled"),l.a.createElement("th",{className:"text-left py-3 px-4 uppercase font-semibold text-sm"},"User Type"),l.a.createElement("th",{className:"text-left py-3 px-4 uppercase font-semibold text-sm"},"Delete User")))}}]),a}(l.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={enabled:!1,deleteButton:"cursor-pointer",deleteRow:"",deleteIconColor:"red"},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){var t=e.target;alert(this.state.enabled),"toggle"===t.name&&this.setState({enabled:!this.state.enabled})}},{key:"handleClick",value:function(e){"cursor-pointer"===e.target.className&&("OK"===prompt('Enter "OK" to permanently delete user',"OK")?this.setState({deleteButton:"cursor-pointer noclick-btn",deleteRow:"line-through noclick-btn",enabled:!1,deleteIconColor:"currentColor"}):alert("Operation cancelled"))}},{key:"render",value:function(){var e=this.props.user.idx_user,t=this.props.user.first_name,a=this.props.user.last_name,n=this.props.user.username,r=this.props.user.user_type;return l.a.createElement("tbody",{className:"text-gray-700"},l.a.createElement("tr",{className:this.state.deleteRow},l.a.createElement("td",{className:"text-left py-3 px-4"},e),l.a.createElement("td",{className:"text-left py-3 px-4"},t),l.a.createElement("td",{className:"text-left py-3 px-4"},a),l.a.createElement("td",{className:"text-left py-3 px-4"},n),l.a.createElement("td",{className:"text-left py-3 px-4"},l.a.createElement("div",{className:"relative inline-block w-10 mr-2 align-middle select-none"},l.a.createElement("label",{className:"switch"},l.a.createElement("input",{type:"checkbox",name:"toggle",id:"toggle",defaultChecked:this.state.enabled,onChange:this.handleChange}),l.a.createElement("span",{className:"slider round"})))),l.a.createElement("td",{className:"text-left py-3 px-4"},r),l.a.createElement("td",{className:"text-center py-3 px-4"},l.a.createElement("div",{className:this.state.deleteButton,onClick:this.handleClick},l.a.createElement("svg",{fill:"none",viewBox:"0 0 24 24",stroke:this.state.deleteIconColor,className:"user-remove w-6 h-6 noclick-btn"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"}))))))}}]),a}(l.a.Component),E=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=[{idx_user:1,first_name:"Cargill",last_name:"Seiveright",username:"sivrite",user_type:"admin"},{idx_user:2,first_name:"John",last_name:"Brown",username:"jbrown",user_type:"standard"},{idx_user:3,first_name:"Mary",last_name:"Jane",username:"mjane",user_type:"standard"},{idx_user:4,first_name:"Joy",last_name:"Campbell",username:"jcamp",user_type:"standard"}].map((function(e){return l.a.createElement(v,{key:e.idx_user,user:e})}));return l.a.createElement("div",{className:"flex flex-col md:grid md:grid-cols-7"},l.a.createElement(h,{current:"users"}),l.a.createElement("div",{className:"flex flex-col justify-center md:col-span-6"},l.a.createElement("div",{className:"text-lg md:text-3xl text-center font-bold tracking-wider mt-3 pt-2"},"Manage Users"),l.a.createElement("div",{className:"md:px-10 py-8 w-auto md:flex md:flex-col md:justify-center overflow-x-scroll"},l.a.createElement("table",{className:"w-auto bg-white overflow-y-scroll shadow rounded border-b border-gray-200 justify-center"},l.a.createElement(y,null),e))))}}]),a}(l.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("thead",{className:"bg-gray-800 text-white"},l.a.createElement("tr",null,l.a.createElement("th",{className:"text-left pb-3 px-4 uppercase font-semibold text-sm"},"Agent ID"),l.a.createElement("th",{className:"text-left pb-3 px-4 uppercase font-semibold text-sm"},"Polled Target"),l.a.createElement("th",{className:"text-left pb-3 px-4 uppercase font-semibold text-sm"},"Agent Program"),l.a.createElement("th",{className:"text-left pb-3 px-4 uppercase font-semibold text-sm"},"Enabled"),l.a.createElement("th",{className:"text-left pb-3 px-4 uppercase font-semibold text-sm"},"Date Created"),l.a.createElement("th",{className:"text-left pb-3 px-4 uppercase font-semibold text-sm"},"Remove Agent")))}}]),a}(l.a.Component),k=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("thead",{className:"bg-gray-600 text-white"},l.a.createElement("tr",null,l.a.createElement("th",{className:"text-left py-1 px-2 uppercase font-semibold text-sm"},"Datapoint Name"),l.a.createElement("th",{className:"text-left py-1 px-2 uppercase font-semibold text-sm"},"Polling Interval"),l.a.createElement("th",{className:"text-left py-1 px-2 uppercase font-semibold text-sm"},"Enabled"),l.a.createElement("th",{className:"text-left py-1 px-2 uppercase font-semibold text-sm"},"Created"),l.a.createElement("th",{className:"text-left py-1 px-2 uppercase font-semibold text-sm"},"Modified")))}}]),a}(l.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={enabled:!1},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){var t=e.target;alert(this.state.enabled),"toggle"===t.name&&this.setState({enabled:!this.state.enabled})}},{key:"render",value:function(){var e=this.props.datapoint.datapoint_name,t=this.props.datapoint.polling_interval,a=this.props.datapoint.ts_created,n=this.props.datapoint.ts_modified;return l.a.createElement("tbody",{className:"text-gray-700"},l.a.createElement("tr",null,l.a.createElement("td",{className:"text-left py-1 px-2"},e),l.a.createElement("td",{className:"text-left py-1 px-2"},t),l.a.createElement("td",{className:"text-left py-3 px-4"},l.a.createElement("div",{className:"relative inline-block w-10 mr-2 align-middle select-none"},l.a.createElement("label",{className:"switch"},l.a.createElement("input",{type:"checkbox",name:"toggle",id:"toggle",defaultChecked:this.state.enabled,onChange:this.handleChange}),l.a.createElement("span",{className:"slider round"})))),l.a.createElement("td",{className:"text-left py-1 px-2"},a),l.a.createElement("td",{className:"text-left py-1 px-2"},n)))}}]),a}(l.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.datapoints.map((function(e){return l.a.createElement(w,{key:e.datapoint_name,datapoint:e})}));return l.a.createElement("table",{className:"w-auto bg-white overflow-x-scroll"},l.a.createElement(k,null),e)}}]),a}(l.a.Component),j=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={enabled:!1,deleteButton:"cursor-pointer",deleteRow:"",deleteIconColor:"red",modalView:{display:"none"},modalBlur:{display:"none"}},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){var t=e.target;alert(this.state.enabled),"toggle"===t.name&&this.setState({enabled:!this.state.enabled})}},{key:"handleClick",value:function(e){var t=e.target,a=t.id;"cursor-pointer"===t.className&&("OK"===prompt('Enter "OK" to permanently delete user',"OK")?this.setState({deleteButton:"cursor-pointer noclick-btn",deleteRow:"line-through noclick-btn",enabled:!1,deleteIconColor:"currentColor"}):alert("Operation cancelled"));"modal-button"===a?JSON.stringify(this.state.modalView)===JSON.stringify({display:"none"})&&this.setState({modalView:{},modalBlur:{}}):"close-button"===a||"close-icon"===a||"close-out"===a?(alert("\u9589\u3081\u308b"),JSON.stringify(this.state.modalView)===JSON.stringify({})&&this.setState({modalView:{display:"none"},modalBlur:{display:"none"}})):"save-button"===a&&(alert("Changes saved"),JSON.stringify(this.state.modalView)===JSON.stringify({})&&this.setState({modalView:{display:"none"},modalBlur:{display:"none"}}))}},{key:"render",value:function(){var e=this.props.agent.agent_id,t=this.props.agent.agent_polled_target,a=this.props.agent.agent_program,n=this.props.agent.ts_created,r={bLur:this.state.modalBlur,vIew:this.state.modalView},s=l.a.createElement(C,{datapoints:[{datapoint_name:"User (Percent CPU Usage)",polling_interval:"5000",ts_created:"2020-07-25 16:26:56",ts_modified:"2020-08-24 17:10:13"},{datapoint_name:"System (Percent CPU Usage)",polling_interval:"10000",ts_created:"2020-07-25 16:26:56",ts_modified:"2020-08-24 17:10:13"},{datapoint_name:"Idle (Percent CPU Usage)",polling_interval:"100",ts_created:"2020-07-25 16:26:56",ts_modified:"2020-08-24 17:10:13"}]}),o={title:"Datapoints for "+e.substring(0,10)+"...",content:s};return l.a.createElement("tbody",{className:"text-gray-700"},l.a.createElement("tr",{className:this.state.deleteRow},l.a.createElement("td",{className:"text-left py-3 px-4 relative hover-trigger"},l.a.createElement("div",{class:"absolute bg-white border border-grey-100 p-1 z-10 hover-target"},e),e.substring(0,10)+"..."),l.a.createElement("td",{id:"modal-button",className:"text-left py-3 px-4 text-black hover:text-blue-500 cursor-pointer",onClick:this.handleClick,"data-value":e},t),l.a.createElement("td",{className:"text-left py-3 px-4"},a),l.a.createElement("td",{className:"text-left py-3 px-4"},l.a.createElement("div",{className:"relative inline-block w-10 mr-2 align-middle select-none"},l.a.createElement("label",{className:"switch"},l.a.createElement("input",{type:"checkbox",name:"toggle",id:"toggle",defaultChecked:this.state.enabled,onChange:this.handleChange}),l.a.createElement("span",{className:"slider round"})))),l.a.createElement("td",{className:"text-left py-3 px-4"},n),l.a.createElement("td",{className:"text-center py-3 px-4"},l.a.createElement("div",{className:this.state.deleteButton,onClick:this.handleClick},l.a.createElement("svg",{fill:"none",viewBox:"0 0 24 24",stroke:this.state.deleteIconColor,className:"x-circle w-6 h-6 noclick-btn"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"}))))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(b,{mElements:o,mStyle:r,modalClick:this.handleClick}))))}}]),a}(l.a.Component),O=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=[{agent_id:"7e6bad57159fc3320ce380d5b35f4a1282780db08262f86a2b0777ba09379caf",agent_polled_target:"cargill-K501UX",agent_program:"pattoo_agent_os_autonomousd",ts_created:"2020-07-25 16:26:56"},{agent_id:"a300087584e8bb14393414cedb781ad3710e4d8433d8c4b4243dbdd64ca44c7a",agent_polled_target:"cargill-K501UX",agent_program:"pattoo_agent_linux_autonomousd",ts_created:"2020-07-30 19:08:05"}].map((function(e){return l.a.createElement(j,{key:e.agent_id,agent:e})}));return l.a.createElement("div",{className:"flex flex-col md:grid md:grid-cols-7"},l.a.createElement(h,{current:"agents"}),l.a.createElement("div",{className:"flex flex-col justify-center md:col-span-6"},l.a.createElement("div",{className:"text-lg md:text-3xl text-center font-bold tracking-wider mt-3 pt-2"},"Manage Agents"),l.a.createElement("div",{className:"md:px-10 py-8 w-auto md:flex md:flex-col md:justify-center overflow-x-scroll"},l.a.createElement("table",{className:"w-auto bg-white shadow overflow-y-scroll rounded border-b border-gray-200 justify-center"},l.a.createElement("caption",{className:"pl-4 pt-4 text-left tracking-widest uppercase font-semibold bg-gray-800 text-white"},"All Available Agents"),l.a.createElement(N,null),e))))}}]),a}(l.a.Component),_=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={days:""},n.handleInputChange=n.handleInputChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(g.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),alert("Purging after "+this.state.days+" days")}},{key:"render",value:function(){return l.a.createElement("form",{id:"purge-form",className:"flex flex-col items-center",method:"POST",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"inline"},"Purge data after",l.a.createElement("input",{id:"purge-days",type:"text",name:"days",value:this.state.days,className:"inline shadow appearance-none border rounded mx-1 w-10 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",onChange:this.handleInputChange})," days"),l.a.createElement("button",{id:"purge-button",className:"btn mt-5 border-2 border-red-600 shadow-md text-red-600 hover:text-white hover:bg-red-600 transition ease-out duration-500 focus:outline-none",type:"submit"},"Purge"))}}]),a}(l.a.Component),S=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"flex flex-col md:grid md:grid-cols-7"},l.a.createElement(h,{current:"purge"}),l.a.createElement("div",{className:"md:col-span-6"},l.a.createElement("div",{className:"text-lg md:text-3xl text-center font-bold tracking-wider my-3 py-2"},"Purge Data"),l.a.createElement("div",{className:"md:px-10 flex justify-center text-center py-8 mx-5 bg-white shadow rounded border-b border-gray-200"},l.a.createElement("div",{className:"w-auto bg-white-300"},l.a.createElement(_,null)))))}}]),a}(l.a.Component);a(32);s.a.render(l.a.createElement(o.a,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/admin",component:f}),l.a.createElement(c.a,{path:"/admin/login",component:x}),l.a.createElement(c.a,{path:"/admin/users",component:E}),l.a.createElement(c.a,{path:"/admin/agents",component:O}),l.a.createElement(c.a,{path:"/admin/purge",component:S}))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.5125be19.chunk.js.map