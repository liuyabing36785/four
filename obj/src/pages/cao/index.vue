<template>
  <div id="app">
<div class="header-box">
	<div class="header-left">
		<div class="header-left-title">
			Staff Panel
		</div>
		<div class="header-left-content" >
							<el-menu
					class="el-menu-vertical-demo"
					@open="handleOpen"
					@close="handleClose"
					background-color="#f8f9fb"
					text-color="#0062cd"
					active-text-color="">
				<router-link to="/table">
					<el-menu-item index="1">
						
   					 <span slot="title" style="font-size:10px">Dashboard</span>

  					</el-menu-item></router-link>
					<el-menu-item index="2">
   					 <span slot="title" style="font-size:10px">My Events</span>
  					</el-menu-item>	

					<el-submenu index="3">
						<template slot="title">
						<span style="font-size:10px">Event MANAGEMENT</span>
						</template>
						<el-menu-item-group>
				<router-link to="/EventList">			
						<el-menu-item index="3-1">Event List</el-menu-item></router-link>
			<router-link to="/Meborde">	
						<el-menu-item index="3-2">Create Event</el-menu-item></router-link>

						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title">
						<span style="font-size:10px">EMPLOYEE MANAGEMENT</span>
						</template>
						<el-menu-item-group>
						<el-menu-item index="4-1">Employee List</el-menu-item>
						<el-menu-item index="4-2">create Employee</el-menu-item>
						</el-menu-item-group>
					</el-submenu>

					<el-submenu index="5">
						<template slot="title">
						<span style="font-size:10px">ClIENT MANAGEMENT</span>
						</template>
						<el-menu-item-group>
						<el-menu-item index="5-1">Client List</el-menu-item>
						<el-menu-item index="5-2">Create Client</el-menu-item>
						</el-menu-item-group>
					</el-submenu>	
					</el-menu>
		</div>
	</div>	 
		<div class="header-right">
			<div class="header-right-title">
				<span>时间</span>
				<span class="emali">邮箱</span>
			</div>

			<div class="header-right-content">
				<!--首页引入组件的地方  -->
			<!-- <Index/>	 -->
			<router-view/>
			
			</div>
		</div>



	</div> 	

  </div>
</template>

<script>
// import Index from "../../components/Index"

export default {
     components: {
    //    Index 
  }
}
</script>

<style scoped>
#app{
	height:100%;
}
.header-box{
		height:100%;
		width:100%;
}
   .header-left{
	   width:15%;
		height:100%;
	   background-color:#f8f9fb;
	   float: left;
   }
   .header-left-title{
	   height:40px;
	   background-color:#0062cd;
	   line-height:40px;
	   text-align: left;
	   text-indent: 30px;
	   color:#fff;
   }
   .header-left-content{
	   text-align:left;
	   font-size: 10px;
   }
.header-right{
	float:right;
	width:85%;
}
.header-right-title{
	height:40px;
	background-color:#007aff;
	text-align:left;
	text-indent:30px;
	line-height: 40px;
	display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.emali{
	margin-right:30px;
}
</style>