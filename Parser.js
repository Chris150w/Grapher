twod=[date=[],
absTime=[],
time=[],
    set=[],
    jack=[],
    reac=[],
    pow=[],
    ]

art=`Date	Time	relative Time	Setpoint	T Jacket	T Reactor	Power %
19.03.2021	8:20:01 AM	00:00:00	35.000000	139.480000	69.210000	-100.000000
19.03.2021	8:20:04 AM	00:00:03	35.000000	139.230000	69.260000	-100.000000
19.03.2021	8:20:08 AM	00:00:07	35.000000	138.880000	69.330000	-100.000000
19.03.2021	8:20:13 AM	00:00:11	35.000000	138.550000	69.390000	-100.000000
19.03.2021	8:20:16 AM	00:00:15	35.000000	138.200000	69.460000	-100.000000
19.03.2021	8:20:21 AM	00:00:19	35.000000	137.850010	69.530000	-100.000000
19.03.2021	8:20:25 AM	00:00:23	35.000000	137.509990	69.600000	-100.000000
19.03.2021	8:20:28 AM	00:00:27	35.000000	137.179990	69.660000	-100.000000
19.03.2021	8:20:33 AM	00:00:31	35.000000	136.870000	69.730000	-100.000000
19.03.2021	8:20:37 AM	00:00:35	35.000000	136.539990	69.800000	-100.000000
19.03.2021	8:20:40 AM	00:00:39	35.000000	136.210010	69.880000	-100.000000
19.03.2021	8:20:44 AM	00:00:43	35.000000	135.870000	69.950000	-100.000000
19.03.2021	8:20:49 AM	00:00:47	35.000000	135.550000	70.020000	-100.000000
19.03.2021	8:20:52 AM	00:00:51	35.000000	135.230000	70.100000	-100.000000
19.03.2021	8:20:56 AM	00:00:55	35.000000	134.920000	70.170000	-100.000000
19.03.2021	8:21:00 AM	00:00:59	35.000000	134.620000	70.240000	-100.000000
19.03.2021	8:21:05 AM	00:01:03	35.000000	134.280000	70.310000	-100.000000
19.03.2021	8:21:09 AM	00:01:07	35.000000	133.950000	70.390000	-100.000000
19.03.2021	8:21:13 AM	00:01:11	35.000000	133.630000	70.460000	-100.000000
19.03.2021	8:21:17 AM	00:01:15	35.000000	133.330000	70.520000	-100.000000
19.03.2021	8:21:21 AM	00:01:19	35.000000	133.009990	70.590000	-100.000000
19.03.2021	8:21:24 AM	00:01:23	35.000000	132.710010	70.660000	-100.000000
19.03.2021	8:21:28 AM	00:01:27	35.000000	132.410000	70.730000	-100.000000
19.03.2021	8:21:32 AM	00:01:31	35.000000	132.100010	70.800000	-100.000000`

function decimate(time){
hours   =eval(time.substr(0,2))*3600
minutes =eval(time.substr(3,2))*60
seconds =eval(time.substr(6,2))
return hours+minutes+seconds;
}

function parse(input,columnSize,timeColumn){
input=input.replaceAll('\n','\t')
input=input.split('\t')

for (let q=0;q<input.length;q++){
				if(((q%columnSize)==timeColumn)&&q>4){twod[q%columnSize].push(decimate(input[q]))}
        else{twod[q%(columnSize)].push(input[q])}
		}
return input}


skipEvery=3



//parse(data,7,2)
