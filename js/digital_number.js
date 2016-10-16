var nums_1_9 = "ноль один два три четыре пять шесть семь восемь девять".split(" ");
var nums_10_19 = "десять одиннадцать двенадцать тринадцать четырнадцать пятнадцать шестнадцать семнадцать восемнадцать девятнадцать".split(" ");
var nums_20_90 = "ноль десять двадцать тридцать сорок пятьдесят шестьдесят семьдесят восемьдесят девяносто".split(" ");
var nums_100_900 = "ноль сто двести триста четыреста пятьсот шестьсот семьсот восемьсот девятьсот".split(" ");
var category = " тысяч миллион миллиард триллион квадриллион квинтиллион секстиллион септиллион октиллион нониллион дециллион андециллион дуодециллион тредециллион кваттордециллион квиндециллион сексдециллион септемдециллион октодециллион новемдециллион вигинтиллион анвигинтиллион дуовигинтиллион тревигинтиллион кватторвигинтиллион квинвигинтиллион сексвигинтиллион септемвигинтиллион октовигинтиллион новемвигинтиллион тригинтиллион антригинтиллион".split(" ");

var DigitalNumber = function(strNumber) {
    this.strNumber=strNumber;

    this.splitIntoCategories = function() {
        var arrCategory=[],
        strTemp = this.strNumber,
        temp = this.strNumber.length + 3 - this.strNumber.length % 3 - this.strNumber.length,
        i;

        for (i=0; i<temp; i++) {
            strTemp="0"+strTemp;
        }

        for (i=strTemp.length; i>0; i-=3) {
            arrCategory.splice(0, 0, strTemp.slice(i-3,i));
        }
        return arrCategory;
    };

    function getE1(p1, p2) {
        if (p1 != '0') {
            if (p1 == '1')
                return nums_10_19[+p2] + " ";
            return nums_20_90[+p1] + " ";
        }
        return "";
    }

    function getE2(p1, p2, cd) {
        if (p1 != '1') {
            if (p2 == '0') return "";
            if (p2 == '1' && cd == 1) return "одна";
            return (p2 == '2' && cd == 1) ? "две" : nums_1_9[+p2];
        }
        return "";
    }

    function contains(a, obj) {
        var i = a.length;
        while (i--) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    }

    function getRankName(s, ii) {
        if (ii == 0) return "";
        var r = category[ii];
        if (contains(['2', '3', '4'], s[2]) && s[1] != '1') {
            return " " + r + (ii == 1 ? "и" : "а") + " ";
        }
        else
            if (contains(['1', '2', '3', '4', '5', '6', '7', '8', '9'], s[1]))
                return " " + r + (ii == 1 ? "" : "ов") + " ";
            if (contains(['1', '2', '3', '4', '5', '6', '7', '8', '9'], s[0]))
                return " " + r + (ii == 1 ? "" : "ов") + " ";

        else
            if (s[2] == '1') return " " + r + (ii == 1 ? "a" : "") + " ";
            else return " " + r + " ";
    }

    this.solve = function(arrCategory) {
        var entireStr="";
        var len = arrCategory.length;
        arrCategory.forEach(function(item, i) {
            var str;
            var countdown = len-i-1;

            str = item[0] == '0' ? "" : nums_100_900[+item[0]] + " ";
            str += getE1(item[1], item[2]);
            str += getE2(item[1], item[2], countdown);

            var strTemp = (item == "000") ? "" : getRankName(item, countdown);
            str += strTemp;
            entireStr+=str;
        });
        entireStr = entireStr.replace(/(^\s*)|(\s*)$/g, '');
        return entireStr;
    };
};
