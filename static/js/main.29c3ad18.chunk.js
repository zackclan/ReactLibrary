(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(21)},17:function(e,a,t){},19:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),i=(t(17),t(2)),c=t(10),s=t(1),d=t(3),m=t(4),u=t(6),h=t(5),b=t(7),p=(t(19),function(e){function a(){return Object(d.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return this.props.books.map(function(a,t){return r.a.createElement("div",{class:"example-book"},r.a.createElement("p",null,a.title),r.a.createElement("p",null,a.author),r.a.createElement("p",null,a.pages),r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{class:"form-check-input",type:"checkbox",value:"",id:"defaultCheck1",checked:a.isRead,onChange:function(){return e.props.onChange(t)}}),r.a.createElement("label",{class:"form-check-label",for:"defaultCheck1"},"Read")),r.a.createElement("button",{type:"button",class:"btn btn-danger deletebutton",onClick:function(){return e.props.onClick(t)}},"x"))})}}]),a}(n.Component)),v=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={myLibrary:[{title:"A Game of Thrones",author:"George R.R. Martin",pages:"756",isRead:!0},{title:"The Fellowship of the Rings",author:"J.R.R. Tolkien",pages:"621",isRead:!1},{title:"Foundation",author:"Isaac Asimov",pages:"421",isRead:!0}],value:{pages:"",title:"",author:"",isRead:!1}},t.loadName=r.a.createRef(),t.name=r.a.createRef(),t.handleChange=t.handleChange.bind(Object(s.a)(Object(s.a)(t))),t.addBook=t.addBook.bind(Object(s.a)(Object(s.a)(t))),t.saveLibrary=t.saveLibrary.bind(Object(s.a)(Object(s.a)(t))),t.loadLibrary=t.loadLibrary.bind(Object(s.a)(Object(s.a)(t))),t}return Object(b.a)(a,e),Object(m.a)(a,[{key:"handleChange",value:function(e){var a=e.target,t=a.name,n="checkbox"===a.type?a.checked:a.value,r=Object(c.a)({},this.state.value);r[t]=n,this.setState({value:r})}},{key:"handleIsRead",value:function(e){var a=Object(i.a)(this.state.myLibrary);a[e].isRead=!a[e].isRead,this.setState({myLibrary:a})}},{key:"loadLibrary",value:function(e){var a=this;e.preventDefault(),fetch("https://fast-ridge-91555.herokuapp.com/library/".concat(this.loadName.current.value),{method:"GET"}).then(function(e){return e.json()}).then(function(e){a.setState({myLibrary:e.library})}).catch(function(e){console.log(e)})}},{key:"saveLibrary",value:function(e){var a=this;e.preventDefault(),fetch("https://fast-ridge-91555.herokuapp.com/library/".concat(this.name.current.value),{method:"DELETE"}).then(function(){a.state.myLibrary.map(function(e){fetch("https://fast-ridge-91555.herokuapp.com/library",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e.title,author:e.author,pages:e.pages,isRead:e.isRead,_creator:a.name.current.value})}).then(function(e){return e.json()}).then(function(e){return console.log("success:",JSON.stringify(e))}).catch(function(e){return console.log(e)})})})}},{key:"handleFormSubmit",value:function(e){e.preventDefault()}},{key:"deleteEntry",value:function(e){var a=Object(i.a)(this.state.myLibrary);a.splice(e,1),this.setState({myLibrary:a})}},{key:"addBook",value:function(e){this.setState({myLibrary:[].concat(Object(i.a)(this.state.myLibrary),[this.state.value])}),this.setState({value:{pages:"",title:"",author:"",isRead:!1}}),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{class:"header"},r.a.createElement("p",null,"Library")),r.a.createElement("div",{class:"alert alert-success hidden",role:"alert"},"Your book has been added successfully!"),r.a.createElement("div",{class:"library"},r.a.createElement("div",{class:"top"},r.a.createElement("button",{class:"save-library btn btn-primary","data-toggle":"modal","data-target":"#save-modal"},"Save Library"),r.a.createElement("div",{class:"modal fade",id:"save-modal",tabindex:"-1",role:"dialog","aria-labelledby":"saveModalLabel","aria-hidden":"true"},r.a.createElement("div",{class:"modal-dialog",role:"document"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("h5",{class:"modal-title"},"Enter name you'd like to save library as")),r.a.createElement("div",{class:"modal-body"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{type:"text",class:"form-control",id:"save-name",ref:this.name})),r.a.createElement("div",{onClick:this.saveLibrary,class:"btn btn-primary",type:"submit","data-dismiss":"modal",id:"hidePopUpBtn"},"Save")))))),r.a.createElement("button",{class:"load-library btn btn-primary","data-toggle":"modal","data-target":"#load-modal"},"Load Library"),r.a.createElement("div",{class:"modal fade",id:"load-modal",tabindex:"-1",role:"dialog","aria-labelledby":"loadModalLabel","aria-hidden":"true"},r.a.createElement("div",{class:"modal-dialog",role:"document"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("h5",{class:"modal-title"},"Enter name of saved library")),r.a.createElement("div",{class:"modal-body"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{type:"text",class:"form-control",id:"save-name",ref:this.loadName})),r.a.createElement("div",{onClick:this.loadLibrary,class:"btn btn-primary",type:"submit","data-dismiss":"modal",id:"hidePopUpBtn"},"Load")))))),r.a.createElement("button",{class:"btn btn-primary dropdown-toggle",type:"button",id:"bookform","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Add a book"),r.a.createElement("form",{onSubmit:this.addBook,class:"dropdown-menu addform","aria-labelledby":"bookform"},r.a.createElement("div",{class:"form-row"},r.a.createElement("div",{class:"col"},r.a.createElement("input",{name:"title",type:"text",class:"form-control title",placeholder:"Title",value:this.state.value.title,onChange:this.handleChange}))),r.a.createElement("div",{class:"form-row"},r.a.createElement("div",{class:"form-group col-md-9"},r.a.createElement("input",{name:"author",type:"text",class:"form-control author",placeholder:"Author",value:this.state.value.author,onChange:this.handleChange})),r.a.createElement("div",{class:"form-group col-md-3"},r.a.createElement("input",{name:"pages",type:"text",class:"form-control pages",placeholder:"Pages",value:this.state.value.pages,onChange:this.handleChange}))),r.a.createElement("div",{class:"form-group checkbox"},r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{name:"isRead",class:"form-check-input checkread",type:"checkbox",id:"gridCheck",checked:this.state.isRead,onChange:this.handleChange}),r.a.createElement("label",{class:"form-check-label",for:"gridCheck"},"Read"))),r.a.createElement("button",{type:"submit",class:"btn btn-primary addbook"},"Add Book"))),r.a.createElement(p,{onChange:function(a){return e.handleIsRead(a)},books:this.state.myLibrary,onClick:function(a){return e.deleteEntry(a)}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.29c3ad18.chunk.js.map