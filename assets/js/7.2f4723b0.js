(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{280:function(t,e,a){"use strict";a.r(e);var r={props:{current:{type:Number,default:1},pageSize:{type:Number,default:24},total:{type:Number,default:0}},data(){return{sCurrent:this.current,sTotal:this.total,showTotal:t=>`${this.$l("total")} ${t} ${this.$l("posts")}`}},watch:{current(t){this.sCurrent=t,this.$page.current=t},total(t){this.sTotal=t}},created(){this.handleCurrent()},methods:{handleCurrent(){this.$page.current>1&&this.onChange(this.$page.current)},onChange(t){t=Number(t),this.$emit("change",t)}}},s=a(37),n=Object(s.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("a-pagination",{attrs:{current:this.sCurrent,total:this.sTotal,"show-total":this.showTotal,"page-size":this.pageSize,"show-quick-jumper":!0},on:{change:this.onChange}})}),[],!1,null,null,null);e.default=n.exports}}]);