<template>
  <article class="gw pos-r pb-5">
    <section class="container px-xl-3 px-lg-4 px-sm-5 px-xs-3">
      <h2 class="text-center title mb-5 mt-lg-5">中獎專區</h2>
      <div class="col-xxl-10 col-lg-11 col-sm-11 col-xs-12 mx-auto">
        <div class="gw mb-lg-5">
          <div class="css-dropdown">
            <input type="checkbox" id="drop" hidden />
            <label for="drop"></label>
            <div class="inner">
              <span v-for="item in dataList" :key="item.id">
                <a
                  href="#"
                  :class="id == id.item ? 'active' : ''"
                  @click="
                    getPrize(item.id, item.number, item.content, item.photo)
                  "
                >
                  {{ item.title }}</a
                >
              </span>
              <!--inner-->
            </div>
          </div>
          <!--css-dropdown-->
        </div>
        <!--w-100-->
        <div class="gw img-wrap img-auto pb-5 text-center mt-3">
          <h3 class="sub-title">{{ content }}，共{{ number }}名</h3>
          <img :src="url + 'images/prize/' + photo" alt="" />
          <!--w-100-->

          <!-- 文字編輯器 start-->
          <div class="editor_box">
            <div class="table-responsive">
              <div id="showMsg"></div>
            </div>
          </div>
          <!-- 文字編輯器 end-->
        </div>
        <!--img-wrap-->
      </div>
      <!--col-->
    </section>
  </article>
</template>

<script>
import axios from "axios";
import Prize from "@/service/Prize";

export default {
  name: "Prize",
  // 所有與網頁互動或要將資料呈現在網頁中,都要寫在data()中,data()名稱不可改
  data() {
    return {
      // 此變數可自行取名,取回的資料可能多筆,所以用陣列儲存
      dataList: [],
      id: "",
      content: "",
      photo: "",
      number: "",
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
      const res = await axios.get(this.$base + Prize.getList);
      // 後端取回的資料會寫在data中,取回資料後,存回dataList
      // this.dataList為data()中的dataList
      if (res.status == 200) {
        this.dataList = res.data;
        this.id = res.data[0].id;
        this.content = res.data[0].content;
        this.number = res.data[0].number;
        this.photo = res.data[0].photo;
      }
    },
    getPrize(id, number, content, photo) {
      if (id != "") {
        this.id = id;
        this.number = number;
        this.content = content;
        this.photo = photo;

        /*
        從dataList中尋找所選取的資料(用id來尋找)
        ids: 所選取的id(也就是選取哪個獎項)
        如果dataList中發現id與所選取的id相同,將獎項資料存在prize變數中
        箭頭函數(式): 例如 function test() => test() => ()

        const prize = this.dataList.find(({ id }) => id == ids);
        this.id = prize.id;
        this.number = prize.number;
        this.content = prize.content;
        this.photo = prize.photo;
        */
      }
    },
  },
};
</script>
