function dibujar() {
    dibujarCH();


}
/**
 * Descripción dibuja canvas de a pestaña home
 * @method dibujarCH
 * @return Void
 */
function cargar() {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#3498DB';
    ctx.strokeStyle = '#3498DB';
    function degToRoad(degree)
    {
        var factor = Math.PI / 180;
        return factor * degree;
    }
    function renderTime()
    {
        var now = new Date();
        var seconds = now.getSeconds();
        var milliseconds = now.getMilliseconds();
        var newSconds = seconds + (milliseconds / 1000);
        ctx.beginPath();
        ctx.arc(250,250,140,degToRoad(270),degToRoad((newSconds*6)-90));
        ctx.stroke();
    }
    setInterval(renderTime,50);


}
function dibujarCH() {
    var ctx = document.getElementById("canvas").getContext("2d");

// #path5350
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.moveTo(546.277410, 287.918320);
    ctx.bezierCurveTo(546.301010, 288.000820, 523.278020, 298.168440, 527.802880, 316.909110);
    ctx.bezierCurveTo(535.035100, 346.862900, 555.656780, 343.910330, 558.499020, 332.257170);
    ctx.bezierCurveTo(561.341260, 320.604010, 550.824980, 309.803520, 550.824980, 309.803520);
    ctx.stroke();

// #g5874
    ctx.save();
    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.230946, -50.569415);

// #path4148
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(244, 155, 121)';
    ctx.moveTo(138.047600, 63.535765);
    ctx.bezierCurveTo(133.645560, 139.674120, 248.478330, 129.643080, 258.168350, 81.543713);
    ctx.bezierCurveTo(257.415590, 78.099482, 260.305150, 78.403867, 262.587410, 79.127481);
    ctx.bezierCurveTo(261.132590, 110.733340, 289.103040, 189.481360, 250.685050, 233.631650);
    ctx.bezierCurveTo(231.374270, 212.010140, 248.466410, 195.676950, 154.617540, 179.629200);
    ctx.bezierCurveTo(141.027710, 169.567750, 92.678944, 171.326720, 52.297108, 231.357860);
    ctx.bezierCurveTo(31.452516, 191.062800, 97.448244, 55.564059, 138.047600, 63.535765);
    ctx.fill();
    ctx.stroke();

// #path4760
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(237, 111, 121)';
    ctx.moveTo(288.943900, 237.977740);
    ctx.bezierCurveTo(279.886530, 238.323480, 273.805770, 195.909090, 279.348770, 194.898920);
    ctx.bezierCurveTo(283.026570, 194.228670, 278.898460, 207.206770, 284.891120, 208.825860);
    ctx.bezierCurveTo(290.651030, 210.382070, 296.242320, 201.037660, 297.823290, 191.772460);
    ctx.bezierCurveTo(299.642490, 181.111120, 295.833720, 177.419180, 298.391730, 172.871610);
    ctx.bezierCurveTo(300.949740, 168.324030, 317.150480, 159.939440, 317.718930, 161.076330);
    ctx.bezierCurveTo(318.287370, 162.213220, 312.492760, 169.531240, 309.760670, 171.592600);
    ctx.bezierCurveTo(307.513460, 173.288130, 306.222250, 183.384280, 316.013590, 178.982410);
    ctx.bezierCurveTo(328.975160, 173.155300, 329.656310, 161.644780, 335.625000, 160.792110);
    ctx.bezierCurveTo(341.593690, 159.939440, 349.267720, 159.370990, 353.531080, 164.202790);
    ctx.bezierCurveTo(357.794430, 169.034590, 357.794430, 169.318810, 357.794430, 169.318810);
    ctx.bezierCurveTo(357.794430, 169.318810, 351.541510, 163.065890, 341.025250, 169.034590);
    ctx.bezierCurveTo(330.508980, 175.003280, 325.961410, 187.509110, 327.950970, 190.351340);
    ctx.bezierCurveTo(328.414850, 200.704620, 342.342350, 193.525570, 345.004370, 189.214450);
    ctx.bezierCurveTo(344.879650, 186.111790, 332.604520, 183.474590, 339.817300, 184.027370);
    ctx.bezierCurveTo(346.553460, 184.543630, 347.751940, 187.207910, 348.486110, 191.417180);
    ctx.bezierCurveTo(349.446840, 196.925490, 342.900970, 214.893880, 336.548720, 216.499890);
    ctx.bezierCurveTo(327.980400, 220.134310, 314.372430, 219.731420, 316.155690, 229.147830);
    ctx.bezierCurveTo(318.121160, 240.360010, 334.866700, 219.147750, 335.553940, 223.108090);
    ctx.bezierCurveTo(336.251930, 227.130400, 309.419910, 243.103310, 297.325900, 239.166720);
    ctx.bezierCurveTo(290.231730, 236.857580, 288.943900, 237.977740, 288.943900, 237.977740);
    ctx.fill();
    ctx.stroke();

// #path4150
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(168, 227, 238)';
    ctx.moveTo(133.036750, 66.662941);
    ctx.bezierCurveTo(80.983424, 109.798730, 52.530883, 167.512550, 52.865555, 222.262710);
    ctx.bezierCurveTo(127.009050, 113.429980, 246.424710, 198.700680, 250.337780, 231.960790);
    ctx.bezierCurveTo(262.058580, 195.657830, 272.031700, 187.570290, 259.183190, 90.781537);
    ctx.bezierCurveTo(252.483050, 110.546880, 234.585900, 112.102160, 210.475090, 126.992180);
    ctx.bezierCurveTo(210.475090, 126.992180, 172.756140, 131.090040, 166.196830, 124.472110);
    ctx.bezierCurveTo(156.917980, 115.110330, 118.767690, 79.166328, 133.036750, 66.662941);
    ctx.fill();
    ctx.stroke();

// #path4152
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(244, 155, 121)';
    ctx.moveTo(204.072410, 145.522390);
    ctx.bezierCurveTo(201.711460, 138.620810, 198.310930, 131.892500, 198.956390, 124.489860);
    ctx.bezierCurveTo(214.268910, 117.885890, 230.993460, 111.991230, 239.031890, 100.899310);
    ctx.bezierCurveTo(238.920080, 93.443003, 251.247220, 74.265557, 230.151500, 77.291528);
    ctx.bezierCurveTo(229.281460, 80.479649, 194.309220, 48.195672, 169.374000, 68.299824);
    ctx.bezierCurveTo(167.166820, 70.079368, 125.732450, 81.791615, 124.215730, 92.941056);
    ctx.bezierCurveTo(123.333790, 99.424210, 142.205500, 93.421753, 149.785740, 91.804162);
    ctx.bezierCurveTo(182.892330, 84.739359, 125.910930, 104.854610, 127.533070, 112.753450);
    ctx.bezierCurveTo(129.368350, 121.690180, 160.594660, 106.911620, 165.702250, 104.594220);
    ctx.lineTo(165.823450, 104.117380);
    ctx.bezierCurveTo(171.648600, 116.817230, 158.271190, 127.715920, 153.974220, 137.219310);
    ctx.fill();
    ctx.stroke();

// #path4160
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.miterLimit = 4;
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(191, 238, 255)';
    ctx.moveTo(176.457190, 85.924793);
    ctx.bezierCurveTo(175.069520, 93.208439, 180.712200, 94.491349, 183.591850, 95.069215);
    ctx.bezierCurveTo(186.471500, 95.647081, 195.829770, 93.096716, 193.238720, 84.517959);
    ctx.bezierCurveTo(190.647670, 75.939202, 177.844860, 78.641147, 176.457190, 85.924793);
    ctx.fill();
    ctx.stroke();

// #path4162
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(1, 1, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 0.784760;
    ctx.fillStyle = 'rgb(1, 1, 0)';
    ctx.moveTo(179.215490, 84.866463);
    ctx.bezierCurveTo(178.146720, 90.690472, 182.492680, 91.716288, 184.710570, 92.178350);
    ctx.bezierCurveTo(186.928460, 92.640412, 194.136150, 90.601138, 192.140540, 83.741557);
    ctx.bezierCurveTo(190.144930, 76.881976, 180.284270, 79.042453, 179.215490, 84.866463);
    ctx.fill();
    ctx.stroke();

// #path4164
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 0.324149;
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.moveTo(184.826380, 83.036501);
    ctx.bezierCurveTo(184.384920, 85.442134, 186.180040, 85.865853, 187.096150, 86.056709);
    ctx.bezierCurveTo(188.012260, 86.247566, 190.989430, 85.405235, 190.165130, 82.571854);
    ctx.bezierCurveTo(189.340840, 79.738473, 185.267850, 80.630868, 184.826380, 83.036501);
    ctx.fill();
    ctx.stroke();

// #path4754
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.moveTo(229.615430, 84.015519);
    ctx.bezierCurveTo(229.615430, 84.015519, 229.665130, 84.513038, 229.665130, 84.513038);
    ctx.bezierCurveTo(230.067080, 84.472838, 231.223190, 83.854737, 231.625140, 83.814542);
    ctx.bezierCurveTo(231.223190, 83.854732, 229.967580, 83.477805, 229.565630, 83.518000);
    ctx.bezierCurveTo(229.565630, 83.518000, 229.615430, 84.015519, 229.615430, 84.015519);
    ctx.fill();

// #path5356
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 0.515020;
    ctx.fillStyle = 'rgb(254, 254, 213)';
    ctx.moveTo(291.543640, 237.844060);
    ctx.bezierCurveTo(287.207090, 238.035600, 287.074650, 208.890170, 289.728570, 208.330540);
    ctx.bezierCurveTo(291.489440, 207.959230, 289.512960, 215.149040, 292.382160, 216.046000);
    ctx.bezierCurveTo(295.139930, 216.908140, 297.816960, 211.731380, 298.573910, 206.598510);
    ctx.bezierCurveTo(299.444910, 200.692170, 297.621330, 198.646860, 298.846070, 196.127520);
    ctx.bezierCurveTo(300.070810, 193.608190, 307.827500, 188.963170, 308.099670, 189.593000);
    ctx.bezierCurveTo(308.371830, 190.222830, 305.597450, 194.276970, 304.289370, 195.418960);
    ctx.bezierCurveTo(303.213430, 196.358270, 302.595220, 201.951490, 307.283180, 199.512870);
    ctx.bezierCurveTo(313.489000, 196.284690, 313.815130, 189.907910, 316.672850, 189.435540);
    ctx.bezierCurveTo(319.530580, 188.963170, 323.204800, 188.648250, 325.246040, 191.325040);
    ctx.bezierCurveTo(327.287270, 194.001830, 327.287270, 194.159290, 327.287270, 194.159290);
    ctx.bezierCurveTo(327.287270, 194.159290, 324.293460, 190.695200, 319.258420, 194.001830);
    ctx.bezierCurveTo(314.223370, 197.308460, 312.046050, 204.236630, 312.998630, 205.811210);
    ctx.bezierCurveTo(313.220730, 211.546870, 319.889020, 207.569720, 321.163560, 205.181380);
    ctx.bezierCurveTo(321.103760, 203.462520, 315.226690, 202.001520, 318.680070, 202.307770);
    ctx.bezierCurveTo(321.905250, 202.593770, 322.479060, 204.069760, 322.830580, 206.401670);
    ctx.bezierCurveTo(323.290560, 209.453260, 320.156480, 219.407660, 317.115120, 220.297380);
    ctx.bezierCurveTo(313.012720, 222.310830, 306.497410, 222.087630, 307.351210, 227.304280);
    ctx.bezierCurveTo(308.292250, 233.515770, 316.309790, 221.764280, 316.638830, 223.958290);
    ctx.bezierCurveTo(316.973020, 226.186630, 299.136020, 239.145130, 298.335770, 232.854690);
    ctx.bezierCurveTo(297.877730, 229.254200, 291.543640, 237.844060, 291.543640, 237.844060);
    ctx.fill();
    ctx.stroke();

// #path4758
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(244, 155, 121)';
    ctx.moveTo(160.017780, 128.468980);
    ctx.bezierCurveTo(140.160080, 137.073690, 135.278440, 149.509490, 138.416800, 163.996910);
    ctx.bezierCurveTo(128.200060, 171.309120, 113.973270, 167.440430, 114.684150, 190.003350);
    ctx.bezierCurveTo(114.759750, 192.402100, 117.527280, 197.306340, 119.658060, 205.493530);
    ctx.bezierCurveTo(117.339310, 191.017360, 105.023410, 185.629310, 99.053953, 186.052790);
    ctx.bezierCurveTo(99.088703, 184.891330, 100.556460, 195.254930, 91.120945, 194.641320);
    ctx.bezierCurveTo(89.283710, 197.744030, 87.087808, 200.302550, 84.982801, 201.798620);
    ctx.bezierCurveTo(84.655700, 204.115580, 84.899891, 208.395510, 82.875507, 209.742590);
    ctx.bezierCurveTo(85.527418, 210.538080, 86.233950, 212.123540, 88.322426, 211.604340);
    ctx.bezierCurveTo(93.478819, 223.515350, 98.197812, 227.288130, 106.015330, 231.215760);
    ctx.bezierCurveTo(110.056490, 234.103020, 117.872620, 233.866000, 121.647620, 232.494760);
    ctx.bezierCurveTo(136.394990, 281.043690, 171.155390, 282.377450, 184.176770, 287.634100);
    ctx.bezierCurveTo(224.502590, 303.913390, 265.941820, 287.870310, 288.770990, 260.917100);
    ctx.bezierCurveTo(299.459900, 248.297260, 304.119050, 213.736010, 304.119050, 213.736010);
    ctx.bezierCurveTo(299.822490, 213.522520, 252.998450, 305.884610, 189.577020, 256.653750);
    ctx.bezierCurveTo(184.042830, 248.067350, 184.997440, 238.987080, 189.292790, 229.652530);
    ctx.lineTo(192.419250, 235.337000);
    ctx.bezierCurveTo(204.744740, 257.746970, 238.809510, 225.013340, 243.259280, 219.957410);
    ctx.bezierCurveTo(241.336720, 221.175620, 237.335200, 220.985090, 237.610770, 215.441360);
    ctx.bezierCurveTo(236.047470, 213.574230, 232.339550, 213.673010, 233.631650, 209.188440);
    ctx.bezierCurveTo(229.907260, 210.873820, 225.348520, 203.916130, 227.261000, 200.027290);
    ctx.bezierCurveTo(222.908810, 198.834050, 215.829890, 206.729920, 210.041100, 210.325340);
    ctx.lineTo(219.704700, 202.651300);
    ctx.bezierCurveTo(232.538750, 189.965770, 217.513720, 167.714720, 208.904210, 169.681380);
    ctx.bezierCurveTo(230.991810, 138.401950, 212.052290, 134.915080, 202.935520, 124.774090);
    ctx.fill();
    ctx.stroke();

// #path4762
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(250, 252, 148)';
    ctx.moveTo(175.650070, 129.605880);
    ctx.bezierCurveTo(181.725790, 132.513730, 186.516840, 130.539870, 191.282360, 128.468980);
    ctx.bezierCurveTo(191.282360, 128.468980, 211.178000, 177.639630, 209.188430, 189.008570);
    ctx.bezierCurveTo(207.198870, 200.377510, 193.271920, 224.252270, 187.303230, 233.063200);
    ctx.bezierCurveTo(181.334540, 241.874130, 176.502740, 254.664180, 183.892550, 260.917090);
    ctx.bezierCurveTo(191.282360, 267.170010, 205.822520, 276.519520, 231.073640, 276.549380);
    ctx.bezierCurveTo(266.977760, 276.591880, 298.150360, 227.662960, 298.150360, 227.662960);
    ctx.bezierCurveTo(289.180050, 275.775580, 227.358680, 310.827100, 157.459770, 270.012240);
    ctx.bezierCurveTo(141.325660, 260.591330, 136.307810, 233.421650, 136.143020, 213.736000);
    ctx.bezierCurveTo(136.015120, 198.457050, 131.115060, 202.202940, 152.343750, 170.818270);
    ctx.bezierCurveTo(171.509120, 142.484030, 175.650070, 129.605880, 175.650070, 129.605880);
    ctx.fill();
    ctx.stroke();

// #path4764
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(230, 230, 230)';
    ctx.moveTo(96.422793, 185.455770);
    ctx.bezierCurveTo(90.073616, 184.387480, 89.183971, 185.637440, 88.535593, 186.166330);
    ctx.bezierCurveTo(87.887215, 186.695220, 88.932709, 189.405930, 91.278078, 193.701820);
    ctx.bezierCurveTo(93.623447, 197.997710, 102.771970, 186.524060, 96.422793, 185.455770);
    ctx.fill();
    ctx.stroke();

// #path4766
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(250, 252, 148)';
    ctx.moveTo(100.472970, 205.067190);
    ctx.bezierCurveTo(106.310620, 202.382890, 121.273570, 216.898640, 116.247380, 223.115380);
    ctx.bezierCurveTo(111.873500, 228.525300, 100.633100, 219.345700, 98.057078, 212.883340);
    ctx.bezierCurveTo(97.047311, 210.350180, 97.316160, 206.518770, 100.472970, 205.067190);
    ctx.fill();
    ctx.stroke();

// #path4768
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.194368;
    ctx.fillStyle = 'rgb(250, 252, 148)';
    ctx.moveTo(225.886990, 216.887190);
    ctx.bezierCurveTo(219.499060, 212.468420, 197.592370, 225.207350, 202.082320, 233.404640);
    ctx.bezierCurveTo(205.989550, 240.538070, 222.000130, 232.908410, 226.796540, 226.257550);
    ctx.bezierCurveTo(228.676680, 223.650510, 229.341370, 219.276710, 225.886990, 216.887190);
    ctx.fill();
    ctx.stroke();

// #path4772
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(230, 230, 230)';
    ctx.moveTo(88.677705, 194.053530);
    ctx.bezierCurveTo(82.328528, 192.985240, 81.225715, 192.529860, 80.577337, 193.058750);
    ctx.bezierCurveTo(79.928959, 193.587640, 81.926873, 196.436890, 84.272242, 200.732780);
    ctx.bezierCurveTo(86.617611, 205.028670, 95.026882, 195.121820, 88.677705, 194.053530);
    ctx.fill();
    ctx.stroke();

// #path4774
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(230, 230, 230)';
    ctx.moveTo(83.454893, 201.504950);
    ctx.bezierCurveTo(76.748556, 201.365440, 76.446202, 201.977060, 76.034027, 202.705230);
    ctx.bezierCurveTo(75.621852, 203.433400, 77.403349, 206.026000, 81.148104, 209.177540);
    ctx.bezierCurveTo(84.892859, 212.329080, 90.161230, 201.644450, 83.454893, 201.504950);
    ctx.fill();
    ctx.stroke();

// #path4784
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(230, 230, 230)';
    ctx.moveTo(229.397620, 199.976920);
    ctx.bezierCurveTo(235.746800, 198.908630, 236.637980, 198.413890, 237.355880, 198.768970);
    ctx.bezierCurveTo(238.073780, 199.124050, 236.464660, 202.739150, 233.837570, 207.739250);
    ctx.bezierCurveTo(231.210480, 212.739350, 223.048440, 201.045210, 229.397620, 199.976920);
    ctx.fill();
    ctx.stroke();

// #path4786
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(230, 230, 230)';
    ctx.moveTo(234.016250, 208.361510);
    ctx.bezierCurveTo(237.922170, 205.257170, 243.244630, 204.990390, 243.893010, 205.519280);
    ctx.bezierCurveTo(244.541390, 206.048170, 242.401360, 209.323760, 240.055990, 213.619650);
    ctx.bezierCurveTo(237.710620, 217.915540, 230.110330, 211.465850, 234.016250, 208.361510);
    ctx.fill();
    ctx.stroke();

// #path4788
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(230, 230, 230)';
    ctx.moveTo(237.365870, 214.696100);
    ctx.bezierCurveTo(238.586200, 213.950510, 246.031790, 213.436110, 246.446760, 214.170980);
    ctx.bezierCurveTo(246.861720, 214.905850, 245.385600, 217.818130, 241.901120, 220.501180);
    ctx.bezierCurveTo(238.416640, 223.184230, 236.145540, 215.441700, 237.365870, 214.696100);
    ctx.fill();
    ctx.stroke();

// #path4811
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.moveTo(230.720800, 96.275073);
    ctx.bezierCurveTo(230.720800, 96.275073, 230.901000, 96.741472, 230.901000, 96.741472);
    ctx.bezierCurveTo(232.669590, 96.058153, 237.795160, 93.541795, 239.563750, 92.858476);
    ctx.bezierCurveTo(237.795160, 93.541795, 232.309190, 95.125355, 230.540600, 95.808674);
    ctx.bezierCurveTo(230.540600, 95.808674, 230.720800, 96.275073, 230.720800, 96.275073);
    ctx.fill();

// #path5352
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(244, 155, 121)';
    ctx.moveTo(158.596660, 129.321650);
    ctx.bezierCurveTo(158.620260, 129.404150, 135.597270, 139.571770, 140.122130, 158.312440);
    ctx.bezierCurveTo(147.354350, 188.266230, 167.976030, 185.313660, 170.818270, 173.660500);
    ctx.bezierCurveTo(173.660510, 162.007340, 160.431050, 148.091720, 160.431050, 148.091720);
    ctx.fill();
    ctx.stroke();

// #path5354
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(244, 155, 121)';
    ctx.moveTo(202.492420, 124.900170);
    ctx.bezierCurveTo(202.468820, 124.982670, 225.491810, 135.150290, 220.966950, 153.890960);
    ctx.bezierCurveTo(213.734730, 183.844750, 193.113050, 180.892180, 190.270810, 169.239020);
    ctx.bezierCurveTo(187.428570, 157.585860, 197.944850, 146.785370, 197.944850, 146.785370);
    ctx.fill();
    ctx.stroke();

// #path4186
    ctx.beginPath();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.miterLimit = 4;
    ctx.lineWidth = 1.200000;
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.moveTo(194.119210, 85.300273);
    ctx.bezierCurveTo(194.119210, 85.300273, 194.792860, 85.098500, 194.792860, 85.098500);
    ctx.bezierCurveTo(194.391320, 83.757892, 193.748950, 82.209568, 192.716250, 80.832385);
    ctx.bezierCurveTo(191.927150, 79.780069, 190.949560, 78.880034, 189.755300, 78.224608);
    ctx.bezierCurveTo(188.693160, 77.641688, 187.511200, 77.280692, 186.224020, 77.144339);
    ctx.bezierCurveTo(184.999600, 77.014635, 183.713090, 77.091669, 182.392210, 77.344586);
    ctx.bezierCurveTo(179.669170, 77.865993, 176.932740, 79.107764, 174.490910, 80.599122);
    ctx.bezierCurveTo(171.239530, 82.584926, 168.779630, 84.834640, 167.314250, 86.275022);
    ctx.bezierCurveTo(168.779600, 84.834669, 171.321860, 82.666690, 174.630460, 80.839184);
    ctx.bezierCurveTo(177.125060, 79.461293, 179.861370, 78.392077, 182.505400, 78.038634);
    ctx.bezierCurveTo(183.783140, 77.867831, 184.988660, 77.871389, 186.100660, 78.057394);
    ctx.bezierCurveTo(187.266380, 78.252381, 188.292770, 78.641496, 189.186480, 79.199567);
    ctx.bezierCurveTo(190.189230, 79.825732, 190.999010, 80.648073, 191.655760, 81.598088);
    ctx.bezierCurveTo(192.521170, 82.849930, 193.071090, 84.251810, 193.445560, 85.502050);
    ctx.bezierCurveTo(193.445560, 85.502050, 194.119210, 85.300277, 194.119210, 85.300277);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}