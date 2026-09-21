import json, os, datetime
T = datetime.date(2026,9,21)
def d(n): return (T + datetime.timedelta(days=n)).isoformat()

cars = {
 "c1": dict(make="Mercedes-Benz", model="G 63 AMG", trim="", year=2021, color="أسود مطفي", km=38000, engine="4.0 V8 Biturbo", fuel="بنزين", gearbox="أوتوماتيك", origin="ألمانيا", vin="…GA48211", status="available", arrivedAt=d(-93), buyPrice=118000, shipCost=3200, customsCost=21000, prepCost=1800, askPrice=165000, features="جلد Nappa, سقف بانوراما, كاميرا 360, نظام صوت Burmester", notes="طلاء أصلي، صيانة وكالة حتى 35 ألف كم", photosDone=True, reportDone=True),
 "c2": dict(make="Range Rover", model="Autobiography", trim="LWB", year=2022, color="أبيض", km=27000, engine="3.0 هجين", fuel="هجين", gearbox="أوتوماتيك", origin="بريطانيا", vin="…RR20455", status="reserved", arrivedAt=d(-21), buyPrice=92000, shipCost=3000, customsCost=15500, prepCost=1500, askPrice=128000, features="مقاعد خلفية تنفيذية, ثلاجة, سقف بانوراما", notes="عربون مدفوع، بانتظار الاستكمال", photosDone=True, reportDone=True),
 "c3": dict(make="Porsche", model="Cayenne S", trim="", year=2020, color="رمادي", km=52000, engine="2.9 V6 Biturbo", fuel="بنزين", gearbox="أوتوماتيك", origin="ألمانيا", vin="…PC77120", status="available", arrivedAt=d(-34), buyPrice=52000, shipCost=2800, customsCost=9500, prepCost=1200, askPrice=72000, features="حزمة Sport Chrono, عادم رياضي", notes="خدش بسيط في الصدام الخلفي", photosDone=False, reportDone=False),
 "c4": dict(make="BMW", model="X7", trim="xDrive40i", year=2021, color="أزرق", km=44000, engine="3.0 Turbo", fuel="بنزين", gearbox="أوتوماتيك", origin="ألمانيا", vin="…X7B3391", status="available", arrivedAt=d(-12), buyPrice=56000, shipCost=2800, customsCost=10500, prepCost=1400, askPrice=78000, features="ثلاثة صفوف, شاشة خلفية, Head-up", notes="", photosDone=True, reportDone=False),
 "c5": dict(make="Toyota", model="Land Cruiser", trim="VX", year=2023, color="أبيض لؤلؤي", km=12000, engine="3.5 V6 Twin Turbo", fuel="بنزين", gearbox="أوتوماتيك", origin="دبي", vin="", status="shipping", etaDate=d(9), buyPrice=88000, shipCost=2400, customsCost=0, prepCost=0, askPrice=112000, features="", notes="", photosDone=False, reportDone=False),
 "c6": dict(make="Lexus", model="LX 600", trim="", year=2023, color="رمادي داكن", km=9000, engine="3.5 V6 Twin Turbo", fuel="بنزين", gearbox="أوتوماتيك", origin="دبي", vin="", status="customs", etaDate=d(-3), buyPrice=104000, shipCost=2600, customsCost=18000, prepCost=0, askPrice=138000, features="", notes="بانتظار تخليص الجمارك", photosDone=False, reportDone=False),
 "c7": dict(make="Audi", model="RS6 Avant", trim="", year=2022, color="رمادي ناردو", km=21000, engine="4.0 V8 TFSI", fuel="بنزين", gearbox="أوتوماتيك", origin="ألمانيا", vin="…RS6A778", status="sold", arrivedAt=d(-70), soldDate=d(-6), soldPrice=118000, buyer="م. الفيتوري", seller="سالم", payMethod="تحويل مصرفي", buyPrice=82000, shipCost=3000, customsCost=14500, prepCost=1600, askPrice=122000, features="", notes="", photosDone=True, reportDone=True),
 "c8": dict(make="Mercedes-Benz", model="S 500", trim="", year=2019, color="أسود", km=61000, engine="3.0 Turbo", fuel="بنزين", gearbox="أوتوماتيك", origin="ألمانيا", vin="", status="ordered", etaDate=d(25), buyPrice=58000, shipCost=0, customsCost=0, prepCost=0, askPrice=84000, features="", notes="", photosDone=False, reportDone=False),
 "c9": dict(make="Bentley", model="Continental GT", trim="", year=2021, color="أخضر بريطاني", km=16000, engine="6.0 W12", fuel="بنزين", gearbox="أوتوماتيك", origin="بريطانيا", vin="…BC91002", status="sold", arrivedAt=d(-95), soldDate=d(-40), soldPrice=210000, buyer="ع. الزروق", seller="سالم", payMethod="تحويل مصرفي", buyPrice=165000, shipCost=3500, customsCost=30000, prepCost=2500, askPrice=215000, features="", notes="", photosDone=True, reportDone=True),
}
for c in cars.values(): c["sample"]=True

leads = {
 "l1": dict(name="خالد المصراتي", phone="091 000 0001", source="انستغرام", carId="c1", budget=160000, seller="سالم", stage="nego", nextAction="عرض سعر نهائي", nextDate=d(-2), notes=""),
 "l2": dict(name="أحمد بن ناصر", phone="092 000 0002", source="واتساب", carId="c4", budget=75000, seller="سالم", stage="test", nextAction="تجربة قيادة الخميس", nextDate=d(2), notes=""),
 "l3": dict(name="مها الورفلي", phone="091 000 0003", source="تيك توك", carId="c3", budget=68000, seller="نورا", stage="contacted", nextAction="إرسال تقرير الفحص", nextDate=d(0), notes=""),
 "l4": dict(name="يوسف القذافي", phone="094 000 0004", source="زيارة للمعرض", carId="c2", budget=125000, seller="سالم", stage="nego", nextAction="استكمال الدفعة", nextDate=d(3), notes="دفع عربونًا"),
 "l5": dict(name="سلمى البدري", phone="091 000 0005", source="إحالة", carId="", budget=100000, seller="نورا", stage="new", nextAction="أول اتصال", nextDate=d(1), notes="تبحث عن SUV عائلية"),
 "l6": dict(name="طارق العماري", phone="092 000 0006", source="انستغرام", carId="c1", budget=150000, seller="سالم", stage="contacted", nextAction="إرسال فيديو للسيارة", nextDate=d(-1), notes=""),
 "l7": dict(name="م. الفيتوري", phone="091 000 0007", source="واتساب", carId="c7", budget=120000, seller="سالم", stage="won", nextAction="", nextDate="", notes=""),
 "l8": dict(name="ريم الشريف", phone="094 000 0008", source="فيسبوك", carId="c3", budget=55000, seller="نورا", stage="lost", nextAction="", nextDate="", notes="الميزانية أقل من السعر"),
 "l9": dict(name="فتحي الككلي", phone="091 000 0009", source="انستغرام", carId="c4", budget=80000, seller="نورا", stage="new", nextAction="الرد على الرسالة", nextDate=d(0), notes=""),
 "l10": dict(name="عبد الله الغرياني", phone="092 000 0010", source="زيارة للمعرض", carId="", budget=180000, seller="سالم", stage="contacted", nextAction="عرض السيارات القادمة", nextDate=d(4), notes=""),
}
for l in leads.values(): l.update(sample=True, createdAt=d(-10))

def tx(dt,typ,cat,amt,car="",note=""): return dict(date=dt,type=typ,category=cat,amount=amt,carId=car,note=note,sample=True)
txs = {
 "t1": tx(d(-40),"income","عربون",100000,"c9","عربون بنتلي"),
 "t2": tx(d(-36),"income","دفعة بيع",110000,"c9","باقي بنتلي"),
 "t3": tx(d(-6),"income","دفعة بيع",90000,"c7","دفعة أولى — م. الفيتوري"),
 "t4": tx(d(-14),"income","عربون",10000,"c2","عربون رينج روفر"),
 "t5": tx(d(-3),"expense","إعلان وتسويق",1800,"","إعلانات إنستغرام"),
 "t6": tx(d(-15),"expense","رواتب",6000,"","رواتب الفريق"),
 "t7": tx(d(-18),"expense","إيجار",4500,"","إيجار المعرض"),
 "t8": tx(d(-8),"expense","تجهيز وصيانة",1200,"c3","تلميع وفحص"),
 "t9": tx(d(-30),"expense","شحن",2600,"c6","شحن لكزس"),
 "t10": tx(d(-33),"expense","إيجار",4500,"","إيجار المعرض"),
 "t11": tx(d(-45),"expense","رواتب",6000,"","رواتب الفريق"),
 "t12": tx(d(-2),"expense","جمارك",18000,"c6","رسوم جمارك لكزس"),
}

ideas_raw = [
 ("p1","الهدية قبل الكلام","pitch",1,2,"منخفضة","لا ترسل عرضًا. أرسل ريلًا جاهزًا لسيارة من مخزونهم.",["الكشّاف يختار السيارة الأضعف صورًا في صفحة المعرض","المخرج يجهّز ريلًا من صورهم الموجودة كعيّنة خاصة غير منشورة","الكاتب يكتب رسالة من سطرين","ترسلها لصاحب المعرض: هذه عيّنة، إن أعجبتك نكمل"],"العيّنة خاصة وغير منشورة. لا نستخدم صورهم علنًا دون إذن."),
 ("p2","تشريح خاص في 3 دقائق","pitch",1,1.5,"منخفضة","فيديو شاشة خاص يريه أين تخسر صفحته عملاء، وماذا يتغير في أسبوع.",["الكشّاف يجهّز ثلاث أخطاء وثلاث فرص","تسجل الشاشة وتشرحها بهدوء","ترسل الفيديو له وحده"],"خاص لا علني. النقد العلني لمعرض آخر يحرقنا قبل أن نبدأ."),
 ("p3","حصرية المدينة","pitch",1,0.5,"منخفضة","معرض واحد فقط في كل مدينة وفئة سيارات نعمل معه.",["اختر الفئة (ألمانية، يابانية، دفع رباعي)","اعرض الحصرية على أول معرض يقبل","اذكرها في العقد"],"التزم بها فعلًا. الندرة الحقيقية تبيع أكثر من الكاذبة."),
 ("c1","قصة السيارة قبل سعرها","content",1,1.5,"منخفضة","سلسلة ريلز تحكي من أين جاءت كل سيارة ومن اقتناها، ثم يأتي السعر في آخر ثانية.",["اسأل المعرض عن سجل كل سيارة","الكاتب يحوّله إلى 25 ثانية","المخرج يجهّز 6 لقطات قريبة"],"لا نذكر تاريخًا أو مالكًا لا يوثقه المعرض."),
 ("c2","يوم الشفافية: فحص مباشر","event",2,2,"متوسطة","بثّ فحص كامل لسيارة أمام الجمهور، وتقرير مفتوح لمن يريد.",["اختر سيارة بتقرير جيد","مهندس ميكانيكي مستقل يفحص أمام الكاميرا","نشر التقرير كاملًا","تجربة قيادة لمن يحضر"],"إن ظهر عيب يكون جزءًا من القصة وبموافقة المعرض. لا نخفي شيئًا."),
 ("c3","مسلسل «مندوب المعرض»","content",2,3,"منخفضة","شخصية كوميدية أصلية تحكي مواقف المشترين. يعرفها الناس أكثر مما يعرفون اسم المعرض.",["ابتكار الشخصية ونبرتها","10 حلقات من 30 ثانية","نصوص أسبوعية من الكاتب","ممثل من الفريق أو ضيف"],"شخصية أصلية. لا نقلد شخصًا حقيقيًا ولا نسخر من فئة."),
 ("c4","فخامة على أرض ليبية","content",2,3,"متوسطة","تصوير سينمائي عند الفجر: سيارة أمام البحر، أو الصحراء، أو المدينة القديمة.",["اختيار 3 مواقع","المخرج يجهّز قائمة لقطات","تصوير في ساعة الفجر بهاتف ومثبّت","مونتاج ريل وغلاف"],"تحقق من تصاريح التصوير في الأماكن العامة والأثرية قبل الذهاب."),
 ("e1","صباح القهوة والمحركات","event",1,3,"منخفضة","لقاء صباحي شهري لأصحاب السيارات، والمعرض راعٍ. يتحول إلى مجتمع.",["اختيار موقع واسع وموعد جمعة","دعوة عبر الصفحات والمجموعات","ركن قهوة وتصوير للحضور","نشر أفضل اللقطات"],"نتحقق من التصريح وعدم إزعاج الجيران. لا سباقات."),
 ("e2","ليلة العرض الخاص بدعوات","event",2,4,"متوسطة","سيارة نادرة تحت إضاءة سينمائية ليلة واحدة، ولا يدخل إلا من معه دعوة رقمية.",["اختيار السيارة والليلة","دعوات رقمية لـ 40 ضيفًا","5 أيام تشويق على الحساب","قائمة انتظار للحجز"],"لا نعد بسعر أو توفر لا يملكه المعرض."),
 ("e3","مزاد المظروف المغلق","event",3,5,"عالية","عروض مغلقة لسيارة نادرة تُفتح في بث مباشر أمام الجميع.",["تحديد السعر الأدنى","نموذج عروض سرية","بث مباشر لفتح المظاريف","إعلان الفائز في الحال"],"يلزم التحقق من صيغة المزاد وشروطه قانونيًا مع المعرض قبل الإعلان عنه."),
 ("e4","تحدي 24 ساعة مع مؤثر","event",3,4,"عالية","مؤثر محلي يعيش يومًا كاملًا مع سيارة فارهة من المعرض.",["اختيار المؤثر بأرقام حقيقية","عقد مكتوب وتأمين من المعرض","تخطيط 6 محطات","نشر على ثلاث منصات"],"التأمين والمسؤولية مكتوبان قبل التسليم. لا قيادة متهورة."),
 ("a1","رد في 30 ثانية على واتساب","auto",1,2,"منخفضة","أول من يرد يبيع. رد آلي يرسل الكتالوج ويحجز تجربة قيادة ثم يحوّل لإنسان.",["أتمتة n8n مع رقم المعرض","رد يعرّف نفسه أنه آلي","كتالوج مختصر وأزرار حجز","تنبيه فوري للبائع"],"الرد يعرّف نفسه بأنه آلي ويترك رقم إنسان."),
 ("a2","موظف استقبال صوتي","auto",3,4,"متوسطة","وكيل صوتي يرد على المكالمات خارج الدوام بالعربية ويسجّل الطلبات.",["تجربة لهجة الوكيل على 20 مكالمة","نص ترحيب واضح","تحويل الحالات الحساسة لإنسان","تقرير صباحي بالمكالمات"],"تجريبي. نختبر جودة اللهجة قبل الاعتماد ونعلن أنه مساعد آلي."),
 ("a3","اختبار «أي سيارة تشبهك؟»","auto",1,2,"منخفضة","اختبار قصير على إنستغرام يقود إلى واتساب ويجمع عملاء محتملين.",["8 أسئلة عن الشخصية والذوق","نتيجة لكل نوع سيارة","رابط في البايو","متابعة من البائع"],"نأخذ موافقة صريحة قبل مراسلة أي شخص."),
]
ideas = {}
for i,(id_,title,kind,bold,hours,cost,hook,how,guard) in enumerate(ideas_raw):
    ideas[id_] = dict(n=i+1,title=title,kind=kind,bold=bold,hours=hours,cost=cost,hook=hook,how=how,guard=guard,status="new")

web_raw = [
 ("بحث وفلاتر واضحة","ماركة، سنة، سعر، ناقل، وقود. الزائر يجب أن يجد سيارته في أقل من 10 ثوانٍ."),
 ("15 إلى 20 صورة لكل سيارة","معرض صور مع تكبير وتمرير باللمس. الصور هي البيع الأول."),
 ("مواصفات كاملة وصادقة","الكيلومترات، بلد المنشأ، آخر خانات الشاصي، الطلاء، الصيانة. الشفافية تصنع الثقة."),
 ("زر واتساب على كل سيارة","برسالة جاهزة تحمل اسم السيارة وسعرها، فيصلك عميل جاد لا سؤالًا عامًا."),
 ("حجز تجربة قيادة بثلاثة حقول","الاسم والهاتف والموعد. كل حقل زائد يخسّرك عملاء."),
 ("حاسبة تقسيط إن كنت تقدّمه","إن كان المعرض يبيع بالتقسيط فاعرض القسط الشهري تحت السعر مباشرة."),
 ("تقرير فحص وسجل صيانة","ملف قابل للتحميل لكل سيارة. هذا ما يميّز معرضًا يثق به الناس."),
 ("آراء عملاء حقيقية فقط","روابط لتقييمات فعلية، مع إذن أصحابها. لا مراجعات مصنوعة."),
 ("سرعة وتصميم للجوال أولًا","أغلب الزيارات من الهاتف، والصفحة البطيئة تُغلق قبل أن تُفتح."),
 ("مزامنة المخزون تلقائيًا","السيارة تظهر في الموقع لحظة إدخالها هنا. هذا ما تفعله هذه المنظومة."),
 ("صفحة «بِع سيارتك أو استبدلها»","نموذج تقييم سريع يجلب سيارات مستعملة للمعرض وعملاء جددًا."),
 ("صفحات قابلة للبحث في جوجل","عنوان ووصف واضحان لكل سيارة ورابط ثابت وخريطة موقع."),
]
web = {f"w{i+1}": dict(n=i+1,title=t,why=w,done=(i in (3,9))) for i,(t,w) in enumerate(web_raw)}

allc = dict(cars=cars, leads=leads, tx=txs, ideas=ideas, web=web, settings=dict(main=dict(currency="USD",agingDays=60)))
os.makedirs("seed", exist_ok=True)
json.dump(allc, open("seed_all.json","w"), ensure_ascii=False)
n=0
for col,docs in allc.items():
    os.makedirs(f"seed/{col}", exist_ok=True)
    for k,v in docs.items():
        json.dump(v, open(f"seed/{col}/{k}.json","w"), ensure_ascii=False); n+=1
print(n)
