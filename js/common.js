// // コンソールにログを出す
// console.log("Hello World!!");
// // 足し算
// console.log(1+2);
// // 引き算
// console.log(1-2);
// // 掛け算
// console.log(1*2);
// // 割り算
// console.log(1/2);
// // 余り
// console.log(1%2);

// // 文字の足し算
// console.log("fukuoka"+"3rd")

// // 変数
// // 変数の宣言1 varでの宣言　今は推奨されていない
// var kodama_name_1 = "ああああ"
// // 変数の宣言2 letでの宣言
// let kodama_name_2 = "いいいい"
// // 変数の宣言3 constでの宣言
// const kodama_name_3 = "うううう"


// // 関数
// // 関数の宣言
// function call(kodama_name_1){
//     var name = "私の名前は"+kodama_name_1+"です"
//     return name
// }


// console.log(call("aaaa"))

// // 遊園地の料金
// // 大人1000円、子供500円

// var otona_maney=1000;
// var kodomo_maney=500;

// function price(otona_n,kodomo_n){
//     var total_price=otona_n*otona_maney+kodomo_n*kodomo_maney;
//     return total_price
// }

// var siharai = 10000;

// console.log("おつりは"+(siharai-price(2,1)))


// // 繰り返し index++はindex = index +1 と同じ意味
// // for(変数宣言=初期値; 実行条件; 処理が終わるごとにどうするか){
// //     処理を書く
// // }

// // for(let index=0; index < 100; index++){
// //     console.log(index);
// // }

// // 繰り返し分と条件分を組み合わせて
// // fiz buzzをやってみよう

// // コンソールに0~100まで出力する
// // ただし3の倍数はfizz,5の倍数はbuzz
// // 3と5の両方の倍数の時はfizzbuzzと出力してください。

// for(let index=0; index < 101; index++){
//     if(index == 0){
//         console.log(0);
//     }else if((index % 3 == 0) && (index % 5 != 0)){
//         console.log("fizz");
//     }else if((index % 3 != 0) && (index % 5 == 0)){
//         console.log("buzz");
//     }else if((index % 3 == 0) && (index % 5 == 0)){
//         console.log("fizzbuzz");
//     }else{
//         console.log(index);        
//     }
// }

// // じゃんけんを作ってみよう
// // コンピュータの手を宣言

// // ランダムな手を出す
// const com_hands =["グー","チョキ","パー"];
// // array[Math.floor(Math.random() * com_hands.length)];
// // .length：配列の長さを出力
// // math.floor：整数を返す
// // math.random：小数点以下の数字をランダムに生成
// let com_hand =com_hands[Math.floor(Math.random() * com_hands.length)];

// // プレイヤーの手を宣言

// let player_hand="グー"

// console.log("コンピュータ："+com_hand)
// console.log("プレイヤーの手："+player_hand)

// function judge(hand_c,hand_p){
//     if(hand_c==hand_p){
//         return "引き分け"
//     }else if((hand_c=="チョキ" && hand_p=="グー")||(hand_c=="グー" && hand_p=="パー")||(hand_c=="パー" && hand_p=="チョキ")){
//         return "勝ち"
//     }else{
//         return "負け"
//     }
// }

// console.log(judge(com_hand,player_hand))

// let city = "福岡市佐賀市長崎市"

// city=city.split("市");
// console.log(city);

// var city_l=["福岡","佐賀","長崎"];
// console.log(city_l[0]);

// city_l[4]="宮崎"
// console.log(city_l);


// // 連想配列

// let city_d={fukuoka:"福岡",saga:"佐賀"}
// console.log(city_d["fukuoka"])


// let city_f={name:"福岡",capital:"福岡市",food:"ラーメン"}

// function intro(a,b,c){
//     console.log(a+"は"+b+"が"+c+"おいしい")
// }

// console.log(intro(city_f["name"],city_f["capital"],city_f["food"]))

// let town=[
//     {name:"福岡",capital:"福岡市",food:"ラーメン"},
//     {name:"長崎",capital:"長崎市",food:"ちゃんぽん"}
// ]

// for(var i=0; i<2; i++){
//     console.log(intro(town[i]["name"],town[i]["capital"],town[i]["food"]))
// }

// // 
// let text_node = document.getElementById("text")
// console.log(text_node);

// text_node = text_node.textContent
// console.log(text_node);


// // jQuery

// $(function(){
//     $("#text").text("tesssssst");

// $("#osuna").on('click',function(){
//     $("#text").css("display","none")
// })

// });

// let url="https://zipcloud.ibsnet.co.jp/api/search?zipcode=8240001"

// fetch(url)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(zip){
//         console.log(zip);
//     })


let url = "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/400000.json"

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (weather) {
        console.log(weather);

        // 表示
        document.getElementById("reportDatetime").lastElementChild.textContent = weather.reportDatetime;
    })

