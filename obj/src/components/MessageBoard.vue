<template>
  <div class="app">
    <span >Message Board</span>
    <button class="button1">Back</button>
     <el-divider></el-divider>
     <div class="box">
       <div  v-for="msg in msgs" :key="msg.id" style="marginBottom:15px" :style="msg.a==1?'textAlign:right':'textAlign:left'">
         <span class="font">{{msg.time}}</span><br/>
         <button :style="msg.a==1?'backgroundColor:#ccc':''" style="padding:5px 15px 5px 15px" >{{msg.value}}</button>
       </div>
        <el-divider></el-divider>
          <el-input
            type="textarea"
            autosize
            style="width:92%"
            placeholder="请输入内容"
            v-model="textarea1">
          </el-input>
          <el-button type="success"  @click="add()">Send</el-button>
     </div>
     
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
data:function(){
  return {
    textarea1:"",
    msgs:[

    ]
}},
methods:{
sortByArr(arr, rev) {
 if (rev == undefined) {
 rev = 1;
 } else {
 rev = (rev) ? 1 : -1;
 }
 return function(a, b) {
 for (var i = 0; i < arr.length; i++) {
 let attr = arr[i]
 if (a[attr] != b[attr]) {
 if (a[attr] > b[attr]) {
 return rev * 1;
 } else {
 return rev * -1;
 }
 }
 }
}
},
  add(){
    let that=this
    var myDate = new Date();
    let a=myDate.getMonth();
    let b=myDate.getDate()>10?myDate.getDate():"0"+myDate.getDate()
    let time=myDate.getFullYear()+"-"+( Number(a)+1)+"-"+b+" "+myDate.getHours()+"-"+myDate.getMinutes();
    axios({
      url:"messageboard.php",
      method:"get",
      params:{
        "value":this.textarea1,
        "time":time,
        "is_admin":1
      }
    }).then(res=>{
      console.log(res)
      that.textarea1=''
       axios({
      url:"messageboardSea.php",
      method:"get",
    }).then(res=>{
       that.msgs=[]
      for(let i=0;i<res.data.length;i++){
        that.msgs.push(res.data[i].data)
      }
      that.msgs.sort(that.sortByArr(['time'],true))

    })
    })
  }
},
created(){
  let that=this
      axios({
      url:"messageboardSea.php",
      method:"get",
    }).then(res=>{
      console.log(res)
      for(let i=0;i<res.data.length;i++){
        that.msgs.push(res.data[i].data)
      }
       that.msgs.sort(that.sortByArr(['time'],true))
    })
    
},
components:{},
}
</script>
<style scoped>
.app{
  padding: 1%;
}
span{
  font-weight: bold;
}
.button1{
  background-color:#666;
  float: right;
  color: aliceblue;
}
.box{
  padding: 1%;

  border: 1px solid  rgba(0, 0, 0, .12);
}
.font{
  font-size: 10px;
  color: #ccc;
}
</style>