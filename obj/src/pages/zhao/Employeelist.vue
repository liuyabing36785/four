<template>
<div>
<div style="height:55px">
          <h1 style="float:left">Elpmloyee List</h1><el-button plain style="float:right" @click="add()">Create new elpmloyee</el-button>
      </div>
      <hr/>
  <el-row>
  <el-col class="cards" :span="8" v-for="(o, index) in number" :key="o" :offset="index > 0 ? number : 0">
    <el-card class="card" :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>John Smith</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button deletebutton" @click="delect(index,o)">delect</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</div>
</template>

<script>
export default {
data() {
    return {
      currentDate: new Date(),
      number:4,
    };
  },
  methods:{
    add(){
      this.number++;
      console.log(this.number)
    },
    delect(index,o){
        console.log(index);
        console.log(o);
    }
}
}
</script>

<style>
.el-row{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
}
.cards{
  width:20% !important;
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
    
  }
  .deletebutton span{
  border:1px solid red !important;
  color:red;
  }

  .image {
    width: 50px;
    display: block;
    border-radius: 50%;
    float: left;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .el-col-offset-4{
      margin-left: 5% !important;
  }
</style>