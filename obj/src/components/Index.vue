<template>
  <div class="box">
	  <div class="big-box">
	  <div class="box-left"> 
		  <div class="box-left-top">

			<h4 class="box-left-top-title">Unhandled Events</h4>
  <el-table
  class="table"
    :data="tableData"
    stripe
	size="medium"
		:row-style="{height: '15px'}"
	 :cell-style="{padding: '0'}"
    style="width:100%">
    <el-table-column
      prop="date"
      label="日期"
      width="70">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="60">
    </el-table-column>
    <el-table-column
      prop="address"
	  width="60"
      label="地址">
    </el-table-column>
	 <el-table-column
      prop="name"
      label="姓名"
      width="60">
    </el-table-column>
	 <el-table-column
      prop="name"
      label="姓名"
      width="60">
    </el-table-column>
	 <el-table-column
      prop="name"
      label="姓名"
      width="60">
    </el-table-column>
	<el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 下面为分页效果 -->
  		<div class="pagination">
		<el-pagination
  		background
 		 layout="prev, pager, next"
  		:total="20">
		</el-pagination>
		</div>
	</div>
  </div>
  <!-- 下面为右侧的表格 -->
	<div class="box-right">
		<h4 class="box-left-top-title">Handled Events</h4>
<el-table
  class="table"
    :data="tableData"
    stripe
	:row-style="{height: '15px'}"
	 :cell-style="{padding: '0'}"
	size="medium"
    style="width:100%">
    <el-table-column
      prop="date"
      label="日期"
      width="70">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="address"
	  width="60"
      label="地址">
    </el-table-column>
	 <el-table-column
      prop="name"
      label="姓名"
      width="60">
    </el-table-column>
	 <el-table-column
      prop="name"
      label="姓名"
      width="60">
    </el-table-column>
	 <el-table-column
      prop="name"
      label="姓名"
      width="60">
    </el-table-column>
	<el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 下面为右侧表格的分页 -->
  	<div class="pagination">
		<el-pagination
  		background
 		 layout="prev, pager, next"
  		:total="20">
		</el-pagination>
		</div>
	</div>


 </div>
	<!-- 底部未完成事件列表 -->
	<div class="bottom"> 
		<h3 class="bottom-h3"> Unreplied Messages</h3>
		<el-table
		class="table"
    :data="tableData1"
    stripe=true
    style="width:100%">
    <el-table-column
      prop="date"
      label="日期"
      width="250">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="250">
    </el-table-column>
    <el-table-column
      prop="address"
	  width="250"
      label="地址">
    </el-table-column>

	<el-table-column label="Replay">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleDelete(scope.$index, scope.row)">Replay</el-button>
      </template>
    </el-table-column>
  </el-table>
	</div>



  </div>
</template>
<script>
  export default {
    name: "Index",
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海'
		},
		{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海'
		},
		{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海'
		},
		
		
		],

		tableData1: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市'
        }]
      }
    }
  }
</script>

<style scoped>

	.big-box{
		padding:0 20px;
		height:310px;
	}
	.bottom{
		height:200px;
		margin-top:30px;
	}
	.bottom-h3{
		height:40px;
		width:100%;	
		line-height:40px;
		text-align:left;
		text-indent: 30px;
		border-top:1px solid #f8f9fb;
		border-bottom:1px solid #f8f9fb;
	}
	.table{
		border: 1px solid  black;
		font-size: 10px;
		line-height:15px;
		/* box-sizing: border-box;	 */
	}
	.box-left{
		width:47%;
		float: left;
	}
	.box-left-top{
		width:100%;
	}
	.box-right{
		margin-left:30px;
		float: left;
		width:47%;
	}
	.cell{
		line-height:15px;
		padding:0;
	}
	.el-table__row .cell{
		line-height:15px;
	}
	.box-left-top-title{
		text-align: left;
	}
</style>
