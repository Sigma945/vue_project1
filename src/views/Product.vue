<template>
  <article class="gw pos-r pb-5">
    <section class="container px-xl-3 px-lg-4 px-sm-4 px-xs-3">
      <div class="col-xxl-10 col-lg-11 col-sm-11 col-xs-12 mx-auto">
        <div class="gw mb-lg-5">
          <h2 class="text-center title mb-5 mt-lg-5">產品介紹</h2>
          <div class="css-dropdown">
            <input type="checkbox" id="drop" hidden />
            <label for="drop"></label>
            <div class="inner">
              <span v-for="item in dataList" :key="item.pid">
                <a
                  href="#"
                  :class="pid == pid.item ? 'active' : ''"
                  @click="getProduct(item.pid, item.pname, item.photo)"
                >
                  {{ item.pname }}
                </a>
              </span>
            </div>
            <!--inner-->
          </div>
          <!--css-dropdown-->
        </div>
        <!--w-100-->
        <div class="gw img-wrap pb-5"></div>
        <div class="gw img-wrap img-auto pb-5 text-center mt-3">
          <h3 class="sub-title">{{ pname }}</h3>
          <img :src="url + 'images/product/' + photo" alt="" />
        </div>
        <!--img-wrap-->
      </div>
      <!--col-->
    </section>
  </article>
</template>

<script>
import axios from "axios";
import Product from "@/service/Product";

export default {
  name: "Product",
  // 所有與網頁互動或要將資料呈現在網頁中,都要寫在data()中,data()名稱不可改
  data() {
    return {
      // 此變數可自行取名,取回的資料可能多筆,所以用陣列儲存
      dataList: [],
      pid: "",
      pname: "",
      photo: "",
      url: this.$url,
    };
  },
  // mounted(): 當網頁都載入時要啟動或執行的事項,可寫在這裡
  mounted() {
    // this: 這個物件,這裡指的是methods中的function名稱
    this.getList();
  },
  // methods: 所有執行的function都寫在這
  methods: {
    // async與await搭配,非同步到後端取資料
    async getList() {
      // 將從後端取回的資料暫存在res中(名稱可自訂)
      const res = await axios.get(this.$base + Product.getList);
      // 後端取回的資料會寫在data中,取回資料後,存回dataList
      // this.dataList為data()中的dataList
      if (res.status == 200) {
        this.dataList = res.data;
        this.pid = res.data[0].pid;
        this.pname = res.data[0].pname;
        this.photo = res.data[0].photo;
      }
    },
    getProduct(pid, pname, photo) {
      if (pid != "") {
        this.pid = pid;
        this.pname = pname;
        this.photo = photo;
      }
    },
  },
};
</script>
