// JavaScript source code
var todayPhoto = [
    { "url": "http://media.daum.net/photo/2841", "img": "http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg", "title": "&quot;�߸� ����&quot; �ְ� ������� ������ ����", "id": "20120516082207657" }
    , { "url": "http://media.daum.net/entertain/photo/gallery/?gid=100320", "img": "http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg", "title": "&#39;���ø�&#39; �ʸ��� ���� 5������ ���� ��ģ��", "id": "20120516091011626" }
    , { "url": "http://media.daum.net/photo/4010", "img": "http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg", "title": "[���� ��ȥ�� ǳ��] �Ŷ����ź� &quot;�ູ�մϴ�&quot;", "id": "20120516092605081" }
    , { "url": "http://sports.media.daum.net/general/gallery/gagsports/index.html", "img": "http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg", "title": "&#39;���� �� ����&#39; �ĺ�GK ��� ������ ����", "id": "20120516100608409" }
    , { "url": "http://sports.media.daum.net/general/gallery/0516ufc/index.html", "img": "http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg", "title": "�絿���� ����ű�� Ÿ�ٷ��� &#39;����&#39;", "id": "20120516093313331" }
    , { "url": "http://media.daum.net/entertain/photo/gallery/?gid=100539", "img": "http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg", "title": "�̽�ö �Ƴ��� �� ���� ���� &quot;���ֿ�. .&quot;", "id": "20120516093918544" }
    , { "url": "http://media.daum.net/photo/3899", "img": "http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg", "title": "���� 6������ �������� �Ծ�ƴ� ���̰�..", "id": "20120516030614331" }
    , { "url": "http://sports.media.daum.net/general/gallery/STARKIMYUNA/index.html", "img": "http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg", "title": "&#39;����&#39; �迬��, �����ǳ����� �α�����", "id": "20120516092003892" }
];


var wrap = document.getElementById('wrap');
var leftbt = document.getElementById('left');
var rightbt = document.getElementById('right');
var pagenum = document.querySelector('.page');
var str = '';
var count = 0;

for (var i = 0; i < 3; i++) {

    str += '<img src=' + todayPhoto[i].img + ' /> ';

}

wrap.innerHTML = str;



leftbt.addEventListener('click', function (event) {

    if (count >= 0) {

        count = count - 3;
        var index = '';
        var num = parseInt(count / 3);


        for (i = count; i < count + 3; i++) {
            index += '<img src=' + todayPhoto[i].img + ' /> ';
        }

        wrap.innerHTML = index;
        pagenum.innerHTML = ((num + 1) + '/3');
        }
    }
);

rightbt.addEventListener('click', function (event) {

    if ((count + 6) > todayPhoto.length) {

        count = count + 3;
        var index = '';
        var num = parseInt(count / 3);


        if (num + 1 < 4) {


            for (i = count; i < todayPhoto.length; i++) {
                index += '<img src=' + todayPhoto[i].img + ' /> ';
            }

            wrap.innerHTML = index;
            pagenum.innerHTML = ((num + 1) + '/3');
        }

        else {
            count = count - 3;
        }
    }

    else {
        count = count + 3;
        var index = '';
        var num = parseInt(count / 3);

        for (i = count; i < count + 3; i++) {
            index += '<img src=' + todayPhoto[i].img + ' /> ';
        }

        wrap.innerHTML = index;
        pagenum.innerHTML = ((num + 1) + '/3');
        }
    }
);
