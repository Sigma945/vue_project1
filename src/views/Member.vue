<template>
  <!--可寫成"(item,index) in dataList" :key="index"-->
  <div v-for="item in dataList" :key="item.id">
    {{ item.userId }} {{ item.userName }}
  </div>
</template>

<script>
import axios from "axios";
import Member from "@/service/Member.js";

//每個vue網頁若要取用資料,都要用export default
export default {
  //每個vue網頁可以有個name,用來做連結或網頁間傳遞資料
  name: "Product",
  //所有與網頁互動或將後端取回的資料顯示在網頁上,都要寫在data()中
  data() {
    return {
      //dataList: 變數名稱,可自行命名
      //因為後端取回的資料可能很多筆,所以要用陣列儲存
      dataList: [],
    };
  },
  //mounted: 網頁載入時
  mounted() {
    //當網頁載入時,呼叫這個網頁的getList()方法
    //this: 這個網頁,或這個物件,或這個程式
    this.getList();
  },
  methods: {
    // async: 與await搭配,非同步到後端取資料
    async getList() {
      // axios到後端要資料的方式有get,post等
      // get():到後端要資料的網址及路徑
      // res: 後端回傳資料的結果,可自行命名
      // res(response的縮寫),回傳為response,要求為request
      const res = await axios.get("http://localhost/" + Member.search);
      // res.data: 後端傳回來的資料,存在data中
      // this.dataList: 此處dataList為data()中的dataList,即要後端回傳的資料存在data()中的dataList
      console.log(res.data);
      this.dataList = res.data;
    },
  },
};
</script>
