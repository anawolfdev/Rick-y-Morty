(window["webpackJsonpm3-ev-final-anaamaro"]=window["webpackJsonpm3-ev-final-anaamaro"]||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/Rickandmortylogo.75509f2e.png"},24:function(e,a,t){e.exports=t(36)},29:function(e,a,t){},30:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(20),l=t.n(n),i=(t(29),t(5)),s=t(9),m=t(10),o=t(13),u=t(12),h=t(11),d=t(14),_=(t(30),function(){return fetch("./data.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,image:e.image,status:e.status,origin:e.origin.name,episode:e.episode.length}}))})).catch((function(e){console.log(e)}))}),f=t(21),p=t.n(f),E=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"characterfilter"},c.a.createElement("h3",{className:"characterfilter__title"},"Escoge tu personaje"),c.a.createElement("input",{type:"text",id:"name",name:"name",onChange:this.props.handleFilter,value:this.props.filter})))}}]),a}(c.a.Component),v=function(e){return c.a.createElement("li",{className:"characters",key:e.characters.id},c.a.createElement(i.b,{to:"/character__detail/".concat(e.characters.id),className:"character__link"},c.a.createElement("img",{src:e.characters.image,alt:e.characters.name}),c.a.createElement("div",{className:"characters__card"},c.a.createElement("h2",{className:"characters__name"},e.characters.name),c.a.createElement("p",{className:"characters__specie"},e.characters.species))))},g=function(e){return c.a.createElement("ul",{className:"character__list"},function(e){return e.characters.map((function(e,a){return c.a.createElement(v,{key:a,characters:e})}))}(e))},b=function(e){var a=e.filter,t=e.handleFilter,n=e.characters;return c.a.createElement(r.Fragment,null,c.a.createElement(E,{filter:a,handleFilter:t}),c.a.createElement(g,{characters:n}))},N=function(e){var a=e.routerProps,t=e.characters,r=parseInt(a.match.params.characterId),n=t.filter((function(e){return e.id===r}));if(n[0]){var l=n[0],s=l.image,m=l.name,o=l.status,u=l.species,h=l.origin,d=l.episode;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"character__detail"},c.a.createElement(i.b,{to:"/",className:"character__detail__link"},"Volver"),c.a.createElement("div",{className:"character__detail__wrap"},c.a.createElement("img",{src:s,alt:m}),c.a.createElement("ul",{className:"character__detail__descriptions"},c.a.createElement("li",{className:"character__detail__name"},m),c.a.createElement("li",{className:"character__detail__staus"},o),c.a.createElement("li",{className:"character__detail__species"},u),c.a.createElement("li",{className:"character__detail__origin"},h),c.a.createElement("li",{className:"character__detail__episodes"},d)))))}return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.b,{to:"/",className:"app__back"},"Volver al listado"))},k=t(6),j=[],y=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(u.a)(a).call(this))).state={rickandmorty:[],filter:""},e.handleFilter=e.handleFilter.bind(Object(h.a)(e)),e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;_().then((function(a){e.setState({rickandmorty:a})}))}},{key:"handleFilter",value:function(e){var a=e.target.value;this.setState({filter:a})}},{key:"render",value:function(){var e=this;return j=this.state.rickandmorty.filter((function(a){return a.name.includes(e.state.filter)})),c.a.createElement("div",{className:"app"},c.a.createElement("h1",{className:"title"},c.a.createElement("img",{src:p.a,alt:"rickandmorty"})),c.a.createElement(k.c,null,c.a.createElement(k.a,{exact:!0,path:"/",render:function(){return c.a.createElement(b,{filter:e.state.filter,handleFilter:e.handleFilter,characters:j})}}),c.a.createElement(k.a,{path:"/character__detail/:characterId",render:function(e){return c.a.createElement(N,{routerProps:e,characters:j})}})))}}]),a}(c.a.Component);l.a.render(c.a.createElement(i.a,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.36722950.chunk.js.map