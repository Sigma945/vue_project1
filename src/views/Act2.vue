<template>
  <article class="gw pos-r">
    <section class="container px-xl-3 px-lg-4 px-sm-5 px-xs-4">
      <div class="gw pt-lg-5">
        <h2 class="title text-center">活動說明</h2>
        <div class="row justify-content-center mb-5 pb-4">
          <div class="col-xxl-10 col-xl-11 col-lg-12 col-xs-12 pt-4">
            <ul class="custom-list">
              <li v-for="item in act" :key="item.id">
                {{ item.title }}{{ item.content }}
              </li>
            </ul>
          </div>
          <!--col-->
        </div>
        <!--row-->
        <h2 class="title text-center mb-0 pt-lg-5">獎項介紹</h2>
        <div class="row justify-content-center mb-5 pb-4">
          <div class="col-xl-11 col-lg-12 col-xs-12 pt-4">
            <div
              class="row justify-content-lg-center justify-content-xs-center filter-shadow mx-0"
            >
              <div
                v-for="item in prize"
                :key="item.id"
                class="col-md-4 col-sm-6 col-xs-6 mb-4 img-wrap px-xl-4 px-xs-2"
              >
                <img
                  v-if="item.photo !== null"
                  :src="url + 'images/prize/' + item.photo"
                  alt=""
                />
              </div>
              <!--col-->
            </div>
            <!--row-->

            <div class="row justify-content-center mb-5 pb-4 mx-0">
              <div class="col-xxl-8 col-xl-9 col-md-10 col-xs-12 pt-4">
                <ul class="custom-list">
                  <li v-for="item in prize" :key="item.id">
                    {{ item.title }}:{{ item.content }}，共<small>{{
                      item.number
                    }}</small
                    >名
                  </li>
                </ul>
                <p class="content-text"></p>
              </div>
              <!--col-->
            </div>
            <!--row-->
          </div>
          <!--col-->
        </div>
        <!--row-->

        <h2 class="title text-center mb-0">活動方式2</h2>
        <div class="row justify-content-center mb-5 pb-4">
          <div class="col-xxl-10 col-xl-11 col-lg-12 col-xs-12 pt-4">
            <div
              class="row justify-content-lg-center justify-content-xs-center"
            >
              <div class="col-lg-12 d-lg-inline-block d-xs-none img-wrap">
                <img src="img/pogre.png" alt="" />
              </div>
              <div
                class="col-lg-0 col-md-9 col-sm-10 col-xs-12 d-lg-none d-xs-inline-block img-wrap"
              >
                <img src="img/pogre-mb.png" alt="" />
              </div>
            </div>
            <!--row-->

            <div class="row justify-content-center mb-5 pb-4 mx-0">
              <div
                class="col-xs-12 pt-5 px-xs-2"
                v-for="(item1, index) in layer1"
                :key="index"
              >
                <h2 class="sub-title mb-2">
                  <span class="text-danger fw-bold">Step{{ index + 1 }}</span>
                  {{ item1.title }}
                </h2>
                <ul class="custom-list">
                  <span v-for="(item2, index2) in layer2" :key="index2">
                    <li v-if="item2.id == item.id">
                      {{ item2.content }}
                    </li>
                  </span>
                </ul>
              </div>
              <!--col-->
            </div>
            <!--row-->
          </div>
          <!--col-->
        </div>
        <!--row-->
      </div>
    </section>
  </article>
</template>

<script>
import axios from "axios";
import Act from "@/service/Act";
import Prize from "@/service/Prize";

export default {
  name: "act",
  data() {
    return {
      //活動說明
      act: [],
      //活動方式第一層資料
      layer1: [],
      //活動方式第二層資料
      layer2: [],
      //獎項
      prize: [],
      //後端圖檔路徑
      url: this.$url,
    };
  },
  mounted() {
    //取得活動說明
    this.getAct();
    //取得活動獎項
    this.getPrize();
    //取得活動方式
    this.getLayer1();
    this.getLayer2();
  },
  methods: {
    //取得獎項
    async getPrize() {
      const res = await axios.get(this.$base + Prize.getList);
      if (res.status == 200) {
        this.prize = res.data;
      }
    },
    //取得說明
    async getAct() {
      const res = await axios.get(this.$base + Act.getList);
      if (res.status == 200) {
        this.act = res.data;
      }
    },
    //取得活動方式第一層
    async getLayer1() {
      const res = await axios.get(this.$base + Act.getLayer1);
      if (res.status == 200) {
        this.layer1 = res.data;
      }
    },
    //取得活動方式第二層
    async getLayer2() {
      const res = await axios.get(this.$base + Act.getLayer2);
      if (res.status == 200) {
        this.layer2 = res.data;
      }
    },
  },
};
</script>
