/* ============================================================
   الترجمة الثلاثية (عربي / إنجليزي / صيني) — I18N
   ============================================================ */
var I18N = {
ar: {
  dirName:"rtl", langName:"العربية", langShort:"AR", htmlLang:"ar",
  appTitle:"منظومة العالمية — حمودة",
  appDescription:"نظام تشغيل الشركة عبر أقسام التصنيع والتجاري واللوجستيك والحسابات والخزينة",
  brandMark:"حمودة", brandSub:"منظومة العالمية",
  loggedInAs:"مسجّل الدخول بصفتي:", logout:"تسجيل الخروج", autosave:"يُحفظ كل شيء تلقائيًا على خادم المنظومة ويُشارك مع كل المستخدمين.",
  creditLine:"تصميم وتطوير: محمد خالد الطياري — مدير مشروع مجموعة حمودة",
  loginBrand:"حمودة — منظومة العالمية", loginSub:"أدخل بيانات الدخول للمتابعة إلى النظام",
  loginUsernameLabel:"اسم المستخدم (البريد)", loginPasswordLabel:"الرمز / كلمة المرور",
  loginQuickSelectLabel:"اختيار سريع لمستخدم", loginQuickSelectPlaceholder:"— اختر مستخدمًا لتسجيل الدخول به —",
  loginDividerText:"أو أدخل البيانات يدويًا",
  loginError:"اسم المستخدم أو الرمز غير صحيح", loginBtn:"دخول",
  nav:{orders:"الطلبيات", warehouse:"المخازن", settings:"الإعدادات وسجل التدقيق", incoterms:"مصطلحات Incoterms 2020"},
  departments:{MANUFACTURING:"قسم التصنيع", COMMERCIAL:"القسم التجاري", LOGISTICS:"قسم خدمات اللوجستيك", ACCOUNTS_MANUFACTURING:"حسابات التصنيع", ACCOUNTS_COMMERCIAL:"حسابات التجارة", ACCOUNTS_LOGISTICS:"حسابات اللوجستيك", TREASURY:"الخزينة", SENIOR_MANAGEMENT:"قسم المالية"},
  orderTypes:{COMMERCIAL:"تجاري (منتج جاهز)", MANUFACTURING:"تصنيع (تصميم خاص)"},
  roles:{manufacturing_staff:"موظف تصنيع", commercial_staff:"موظف تجاري", logistics_fcl:"مكتب حجز FCL", logistics_lcl:"مكتب حجز LCL", logistics_bb:"مكتب حجز BB", logistics_air:"مكتب حجز الشحن الجوي", logistics_documentation:"مكتب المستندات", logistics_warehouse:"مكتب المخازن", logistics_expert:"خبير الشحن المحترف", logistics_manager:"مدير اللوجستيك", accounts_manufacturing:"محاسب التصنيع", accounts_commercial:"محاسب التجارة", accounts_logistics:"محاسب اللوجستيك", treasury:"موظف الخزينة", senior_management:"قسم المالية", system_admin:"مسؤول النظام"},
  stages:{COMMERCIAL_QUOTE:"تجاري: عرض السعر الأولي", COMMERCIAL_RECEIVE_SPECS:"تجاري: استلام طلب الزبون", COMMERCIAL_SOURCE_PRICE:"تجاري: تحديد أفضل سعر للمنتج الجاهز", COMMERCIAL_SEND_SPECS_TO_LOGISTICS:"تجاري: إرسال التفاصيل إلى اللوجيستك", COMMERCIAL_REQUEST_SHIPPING_PRICE:"تجاري: طلب سعر الشحن", COMMERCIAL_RECEIVE_SHIPPING_PRICE:"تجاري: استلام سعر الشحن من اللوجيستك", MFG_RECEIVE_SPECS:"تصنيع: استلام مواصفات الطلبية", MFG_EXWORKS_PRICE:"تصنيع: تحديد سعر EX WORK", MFG_SEND_SPECS_TO_LOGISTICS:"تصنيع: إرسال المواصفات إلى اللوجيستك", MFG_REQUEST_SHIPPING_PRICE:"تصنيع: طلب سعر الشحن", MFG_RECEIVE_SHIPPING_PRICE:"تصنيع: استلام سعر الشحن من اللوجيستك", LOGISTICS_PROCEDURE_ORDER:"لوجستيك: استلام موافقة الزبون (Procedure Order)", LOGISTICS_BOOKING:"لوجستيك: حجز الشحن", DOCUMENTATION_PREPARE:"مستندات: إعداد المستندات", CUSTOMS_CLEARANCE:"جمارك: قرار التخليص", DELIVERY:"التسليم حسب Incoterm"},
  servicesCostLabels:{inspection:"1- الفحص (اختياري)", roadTransportOrigin:"2- النقل البري (عند الشحن)", customsClearingOrigin:"3- التخليص الجمركي (مرحلة الشحن)", stevedoringOrigin:"4- أعمال الشحن والمناولة (مرحلة الشحن)", insurance:"5- التأمين (اختياري)", marineTransport:"6- النقل البحري", stevedoringDischarge:"7- أعمال التفريغ والمناولة (عند الوصول)", customsClearingDestination:"8- التخليص الجمركي (عند الوصول)", roadTransportDestination:"9- النقل البري (عند الوصول)", dangerousGoodsSurcharge:"10- رسوم إضافية: بضاعة خطرة (Dangerous Goods)", specialCargoSurcharge:"11- رسوم إضافية: بضاعة خاصة (Special Cargo)", reeferSurcharge:"12- رسوم إضافية: تبريد (Reefer)", otherServices:"13- أخرى (Others)"},
  documents:{FINAL_INVOICE:"فاتورة نهائية", PACKING_LIST:"Packing List", CERTIFICATE_OF_ORIGIN:"شهادة منشأ", BILL_OF_LADING:"بوليصة الشحن (House B/L)", CARGO_MANIFEST:"بيان الحمولة (Cargo Manifest)"},
  bookingTypes:{FCL:"حاوية كاملة (FCL)", LCL:"شحن مجمّع (LCL)", BB:"بضائع غير قياسية (Break Bulk)", AIR:"شحن جوي", REEFER:"حاوية مبرّدة (Reefer)"},
  incotermElements:{INSPECTION:"التفتيش", LOCAL_TRANSPORT:"النقل البري المحلي", CUSTOMS_CLEARING:"التخليص الجمركي", LOADING_DISCHARGING:"الشحن/التفريغ", SEA_TRANSPORT:"النقل البحري", INSURANCE:"التأمين البحري"},
  incoterms:{EXW:"تسليم بالمصنع", FCA:"تسليم متعهد النقل", FAS:"تسليم جانب السفينة", FOB:"تسليم على ظهر السفينة", CFR:"ثمن البضاعة والنقل (واصل)", CIF:"ثمن البضاعة والنقل والتأمين (واصل، مؤمن)", CPT:"ثمن البضاعة والنقل (واصل)", CIP:"ثمن البضاعة والنقل والتأمين (واصل، مؤمن)", DAP:"تسليم في مكان محدد", DPU:"تسليم في مكان محدد، غير مفرغ", DDP:"تسليم في الموقع النهائي، شامل كافة الرسوم والتكاليف"},
  party:{SELLER:"البائع", BUYER:"المشتري", NA:"—"},
  phase:{PRE_SHIPMENT:"قبل الشحن", SHIPMENT_ACTIVE:"الشحن نشط", COMPLETED:"مكتمل", CANCELLED:"ملغى"},
  statusColor:{GREEN:"ضمن الجدول الزمني", YELLOW:"اقترب موعد المرحلة", RED:"متأخر عن الموعد", NEUTRAL:"بلا موعد محدد"},
  stageStatus:{PENDING:"لم تبدأ", IN_PROGRESS:"قيد التنفيذ", DONE:"مكتملة"},
  accSection:{MANUFACTURING:"حسابات التصنيع", COMMERCIAL:"حسابات التجارة", LOGISTICS:"حسابات اللوجستيك"},
  payStatus:{PENDING:"غير مسدد", PARTIAL:"مسدد جزئيًا", PAID:"مسدد بالكامل"},
  bonusStatus:{PROPOSED:"مقترح", APPROVED:"معتمد", PAID:"تم الصرف"},
  journeyStops:["التجهيز والتسعير","موافقة الزبون (Procedure Order)","الشاحنة إلى الميناء","الميناء (مستندات وجمارك)","التسليم للعميل"],
  shippingMethods:{SEA_LCL:"بحري جزئي (LCL)", SEA_FCL:"بحري حاوية كاملة (FCL)", AIR_EXPRESS:"جوي سريع", AIR_REGULAR:"جوي عادي"},
  currencies:{USD:"دولار أمريكي (USD)", CNY:"يوان صيني (RMB/CNY)", LYD:"دينار ليبي (LYD)"},
  ui:{
    ordersHeading:"الطلبيات", newOrderBtn:"+ طلبية جديدة", noOrdersYet:"لا توجد طلبيات بعد.",
    orderNotFound:"الطلبية غير موجودة.", backToOrders:"→ رجوع للطلبيات",
    newOrderFormTitle:"طلبية جديدة — استلام مكالمة عميل",
    customerName:"اسم العميل / الشركة *", contactPerson:"اسم المسؤول (جهة الاتصال)", phone:"رقم الهاتف", email:"البريد الإلكتروني",
    goodsDescription:"وصف البضاعة", quantity:"الكمية", unit:"الوحدة", incotermRequired:"مصطلح Incoterm *",
    exWorksPriceLabel:"سعر EX WORK", currency:"العملة", createOrder:"إنشاء الطلبية", cancel:"إلغاء",
    manualOverrideSuffix:" (تجاوز يدوي)", exworkPill:"EX WORK: ", shippingPill:"الشحن: ",
    journeyTitle:"خريطة رحلة الشحنة", journeyNotStarted:"لم تبدأ رحلة الشحن بعد — بانتظار Procedure Order",
    statusColorTitle:"تلوين الحالة",
    manualOverrideAppliedTemplate:"تم التجاوز اليدوي إلى «{color}» بواسطة {by}{reason}",
    reasonSuffixTemplate:" — السبب: {reason}",
    revertToAuto:"إعادة إلى التلقائي", forceColorLabel:"فرض لون يدويًا", reasonOptional:"السبب (اختياري)", applyOverride:"تطبيق التجاوز",
    stagesTitle:"مراحل سير العمل", dueDatePrefix:" · الموعد: ",
    shippingPriceLabel:"سعر الشحن", saveShippingPrice:"حفظ سعر الشحن",
    bookingTypeLabel:"نوع الشحن", carrierLabel:"الناقل", referenceLabel:"المرجع (House B/L، رقم الرحلة...)", saveBooking:"حفظ الحجز",
    materialTypeLabel:"نوع المادة/الشحنة", clearanceNotesLabel:"ملاحظات إجراء التخليص", approveClearance:"اعتماد التخليص وتعليم كمكتملة",
    dueDateLabel:"الموعد النهائي", saveDueDate:"حفظ الموعد", markDone:"تعليم كمكتملة",
    documentsTitle:"المستندات", issued:"صادر", draft:"مسودة", viewPrint:"عرض / طباعة", issue:"إصدار",
    bonusTitle:"ملاحظات Bonus — حافز أداء داخلي (BB)", bonusHint:"سجل داخلي للموظفين فقط — لا يظهر في أي مستند للعميل.",
    noNotesYet:"لا توجد ملاحظات بعد", descriptionLabel:"الوصف", amountOptional:"المبلغ (اختياري)", addNote:"إضافة ملاحظة",
    approve:"اعتماد", recordPayment:"تسجيل الصرف",
    expertTitle:"خبير الشحن المحترف", noExpertYet:"لم يُعيَّن خبير بعد", expertNameLabel:"اسم الخبير", contactMethod:"وسيلة التواصل", saveAssignment:"حفظ التعيين",
    accountsTitle:"الحسابات", noInvoiceRef:"بدون رقم فاتورة", noAccountsYet:"لا توجد سجلات حسابات بعد",
    invoiceRefLabel:"رقم الفاتورة", amountLabel:"المبلغ", paymentStatusLabel:"حالة السداد", addRecord:"إضافة سجل",
    treasuryTitle:"الخزينة", inbound:"وارد", outbound:"صادر", noTreasuryYet:"لا توجد حركات مالية بعد",
    directionLabel:"الاتجاه", addTransaction:"إضافة حركة",
    incotermsRefTitle:"مصطلحات Incoterms 2020 ومصفوفة المسؤولية", termColumn:"المصطلح",
    warehouseHeading:"المخازن", noWarehouseAccess:"لا تملك صلاحية عرض المخازن.",
    qtyPrefix:" · الكمية: ", orderPrefix:" · الطلبية: ", stored:"مخزَّن", released:"تم الصرف", releaseBtn:"صرف",
    noGoodsStored:"لا توجد بضائع مخزَّنة", noOrderOption:"بدون طلبية", addToWarehouse:"إضافة إلى المخزن",
    settingsHeading:"إعدادات النظام", noSettingsAccess:"لا تملك صلاحية الوصول إلى الإعدادات.",
    fsAutoSaveTitle:"الحفظ التلقائي في مجلد على جهازك", fsAutoSaveDesc:"اربط النظام بمجلد على جهازك (مثلًا مجلد «حمودة») — تُحفظ بيانات كل عميل وطلبية تلقائيًا في ملف واحد داخل هذا المجلد بمجرد إنشائها أو تعديلها، مفهرسة برقم الطلبية، بدون أي تنزيل يدوي.",
    fsAutoSaveNote:"هذا سجل إضافي دائم خارج المتصفح — لا يُغني عن النسخة الاحتياطية الكاملة أدناه.",
    notifTitle:"تنبيهات اقتراب موعد الشحن (Cut-off)", notifDesc:"تنبيه فوري على شاشة جهازك لما طلبية توّها تفوت أو تقترب من موعد الـ Cut-off — بديل سريع لحد ما تقرر تفعّل واتساب بزنس.",
    notifNote:"يشتغل طالما النظام مفتوح على جهازك (حتى بالخلفية) — ما يوصلك لو التطبيق مقفول تمامًا، بعكس واتساب.",
    notifNotSupported:"متصفحك لا يدعم تنبيهات سطح المكتب.", notifNotSupportedShort:"غير مدعوم",
    notifDeniedNote:"رفضت إذن التنبيهات سابقًا من إعدادات المتصفح — لازم تفعّلها يدويًا من إعدادات الموقع بالمتصفح.", notifDeniedShort:"مرفوض",
    notifEnableBtn:"تفعيل التنبيهات", notifDisableBtn:"إيقاف التنبيهات",
    notifEnabledShort:"مفعّلة", notifDisabledShort:"غير مفعّلة",
    notifEnabled:"تم تفعيل التنبيهات بنجاح.", notifDenied:"ما وافقت على إذن التنبيهات.",
    notifCutoffPassedTitle:"⚠ فات موعد الـ Cut-off!", notifCutoffSoonTitle:"⏰ اقترب موعد الـ Cut-off",
    notifQuickOnTitle:"تنبيهات الـ Cut-off مفعّلة — اضغط للإيقاف", notifQuickOffTitle:"تنبيهات الـ Cut-off متوقفة — اضغط للتفعيل",
    notifQuickOnToast:"تفعّلت التنبيهات — بتفضل شغّالة لين توقفها بنفس الزر.", notifQuickOffToast:"أوقفت التنبيهات.",
    fsConnectedShort:"متصل ويحفظ تلقائيًا", fsNotConnectedShort:"غير متصل", fsNeedsPermission:"بانتظار إذن الوصول",
    fsConnectBtn:"اختيار مجلد الحفظ", fsReconnectBtn:"إعادة منح الإذن", fsDisconnectBtn:"فصل الاتصال",
    fsNotSupported:"متصفحك لا يدعم الحفظ التلقائي على القرص (يعمل على Chrome أو Edge على سطح المكتب).",
    fsConnected:"تم الاتصال — الحفظ التلقائي يعمل الآن.", fsConnectFailed:"تعذّر الاتصال بالمجلد.",
    fsLastSyncTemplate:"آخر حفظ تلقائي: {date}",
    backupTitle:"النسخ الاحتياطي للبيانات", backupDesc:"البيانات محفوظة مركزيًا على خادم المنظومة ومشتركة بين كل الأقسام. يمكنك تنزيل نسخة احتياطية كاملة أو استيراد نسخة سابقة (الاستيراد يستبدل بيانات الخادم ويحتاج صلاحية المدير).",
    exportBackupBtn:"تصدير نسخة احتياطية", importBackupBtn:"استيراد نسخة احتياطية",
    backupNote:"يُنصح أيضًا بنسخ ملف قاعدة البيانات (data/hamouda.db) ومجلد المرفقات (data/uploads) على الخادم دوريًا.",
    backupExportFailedAlert:"تعذّر تصدير النسخة الاحتياطية. حاول مرة أخرى.",
    backupImportInvalidAlert:"الملف المختار ليس نسخة احتياطية صالحة لهذا النظام.",
    backupImportConfirmWarning:"سيؤدي الاستيراد إلى استبدال كل البيانات الحالية على هذا الجهاز بمحتوى الملف المختار. هذا الإجراء لا يمكن التراجع عنه. هل تريد المتابعة؟",
    backupImportSuccessAlert:"تم استيراد النسخة الاحتياطية بنجاح.",
    currentStageLabel:"المرحلة الحالية",
    assistantTitle:"مساعد حمودة", assistantSubtitle:"اسأل عن أي طلبية أو شحنة",
    assistantPlaceholder:"مثال: وين طلبية ORD-0012؟", assistantSend:"إرسال", close:"إغلاق",
    assistantWelcome:"أهلًا 👋 أقدر أجاوبك عن أي طلبية برقمها، أو أعطيك قوائم جاهزة (متأخرة، قريبة من Cut-off، مكتملة، بضاعة خطرة). جرّبني.",
    assistantNotFoundTemplate:"ما لقيت طلبية بالرقم {no}. تأكد من الرقم وجرّب مرة ثانية.",
    assistantLateIntroTemplate:"لقيت {count} طلبية متأخرة:", assistantLateIntroEmpty:"الحمد لله، ما فيه طلبيات متأخرة حاليًا.",
    assistantCutoffIntroTemplate:"{count} طلبية قربت من موعد الـ Cut-off:", assistantCutoffIntroEmpty:"ما فيه طلبيات قربت من الـ Cut-off حاليًا.",
    assistantDoneIntroTemplate:"عندك {count} طلبية مكتملة:", assistantDoneIntroEmpty:"ما فيه طلبيات مكتملة لسا.",
    assistantDgIntroTemplate:"{count} طلبية معلّمة كبضاعة خطرة:", assistantDgIntroEmpty:"ما فيه طلبيات بضاعة خطرة حاليًا.",
    assistantCustomerIntroTemplate:"لقيت {count} طلبية مطابقة:",
    assistantCountAnswerTemplate:"عندك {count} طلبية بالنظام إجمالًا.",
    assistantGreeting:"أهلًا فيك! اسألني عن أي طلبية أو قول لي شنو تبي تعرف.",
    assistantFallback:"ما فهمت قصدك بالضبط 🤔 جرّب تكتب رقم الطلبية (مثل ORD-0012)، أو اسأل عن: المتأخرة، القريبة من Cut-off، المكتملة، بضاعة خطرة.",
    assistantMoreSuffixTemplate:"...و{count} أخرى",
    assistantSuggestLate:"الطلبيات المتأخرة", assistantSuggestCutoff:"قريبة من Cut-off", assistantSuggestDone:"المكتملة",
    servicesCostsTitle:"تكاليف الخدمات (Services Costs)", servicesCostsDesc:"بنود التكاليف التي يبني عليها اللوجستيك السعر الكامل المُرسل إلى الزبون.",
    otherServicesNoteLabel:"وصف الخدمة الإضافية (Others)", otherServicesNotePlaceholder:"مثال: تغليف خاص، تفريغ يدوي إضافي...",
    servicesCostsSurchargeNote:"هذه الطلبية تحتوي بضاعة تستوجب رسومًا إضافية على سعر الشحن — حدّد القيمة المناسبة لكل بند حسب طبيعة البضاعة.",
    optionalSuffix:"(اختياري)", saveServicesCostsBtn:"حفظ تكاليف الخدمات", servicesCostsTotalLabel:"الإجمالي:",
    servicesCostsAutoFillNote:"يُحسب إجمالي هذه البنود تلقائيًا ويُستخدم كسعر الشحن الكامل في مراحل سير العمل والفاتورة النهائية.",
    thresholdTitle:"تلوين حالة الشحنة", thresholdDesc:"عدد الأيام قبل الموعد النهائي التي تُظهر البطاقة باللون الأصفر.",
    daysLabel:"عدد الأيام", save:"حفظ",
    auditLogTitle:"سجل التدقيق (آخر 50 عملية)", noAuditYet:"لا توجد عمليات مسجّلة بعد",
    printOrderNo:"رقم الطلبية: ", printDate:"التاريخ: ", printCustomerData:"بيانات العميل",
    printContact:"المسؤول: ", printPhone:"الهاتف: ", printGoodsData:"بيانات البضاعة", printQtyPrefix:" — الكمية: ",
    printTermsData:"شروط التسليم والشحن", printShipmentType:"نوع الشحن: ", printCarrier:" · الناقل: ", printReference:" · المرجع: ",
    printPrices:"الأسعار", printExworks:"سعر EX WORK", printShipping:"سعر الشحن", printTotal:"الإجمالي",
    printIssuerSig:"توقيع المُصدِر", printRecipientSig:"توقيع المستلم",
    requiredNameAlert:"اسم العميل مطلوب",
    requiredPhoneAlert:"رقم الهاتف مطلوب",
    requiredContactAlert:"اسم مسؤول التواصل مطلوب", requiredEmailAlert:"البريد الإلكتروني مطلوب",
    requiredGoodsArAlert:"وصف البضاعة بالعربي مطلوب", requiredGoodsEnAlert:"وصف البضاعة بالإنجليزي مطلوب",
    requiredSupplierAddrAlert:"عنوان المورد/المصنع بالصين مطلوب", requiredChinaTrackingAlert:"رقم التتبع الداخلي بالصين مطلوب",
    requiredPackagesAlert:"عدد الطرود مطلوب", requiredNetWeightAlert:"الوزن الصافي مطلوب", requiredGrossWeightAlert:"الوزن الإجمالي مطلوب",
    requiredDimAlert:"جميع أبعاد الطرد (طول × عرض × ارتفاع) مطلوبة", requiredLaydaysAlert:"تاريخ جاهزية البضاعة مطلوب",
    requiredCancellingAlert:"تاريخ إلغاء/انتهاء الطلبية مطلوب", requiredExwAlert:"سعر الشراء من المصنع مطلوب",
    formIncompleteNote:"جميع الخانات في هذا النموذج إجبارية — لا يمكن إرسال الطلبية قبل تعبئتها كاملة.",
    orderInfoTitle:"معلومات الطلبية",
    sectionBasicInfo:"بيانات العميل والطلب الأساسية", sectionCargoSupplier:"تفاصيل البضاعة والمورد",
    sectionLogisticsSpecs:"المواصفات اللوجستية والحجم", sectionShippingTerms:"شروط الشحن والتواريخ", sectionFinancials:"الحسابات والأسعار",
    phoneRequired:"رقم الهاتف (مع الرمز الدولي) *",
    orderRefLabel:"رقم الطلب / المرجع", orderRefAutoNote:"يُنشأ تلقائيًا عند الحفظ",
    goodsDescriptionArLabel:"وصف البضاعة (عربي)", goodsDescriptionEnLabel:"وصف البضاعة (إنجليزي)",
    hsCodeLabel:"رمز النظام المنسق HS Code (اختياري)",
    supplierAddressLabel:"عنوان المورد / المصنع بالصين", chinaTrackingLabel:"رقم التتبع الداخلي بالصين",
    packagesCountLabel:"عدد الطرود / الكراتين", netWeightLabel:"الوزن الصافي (كجم)", grossWeightLabel:"الوزن الإجمالي (كجم)",
    dimensionsLabel:"الأبعاد (طول × عرض × ارتفاع، سم)", dimLPlaceholder:"الطول", dimWPlaceholder:"العرض", dimHPlaceholder:"الارتفاع",
    cbmLabel:"الحجم الإجمالي CBM (يُحسب تلقائيًا)", cbmUnit:"م³",
    shippingMethodLabel:"وسيلة الشحن",
    laydaysStartLabel:"تاريخ جاهزية البضاعة (Laydays)", cancellingDateLabel:"تاريخ إلغاء/انتهاء الطلبية (Cancelling Date)",
    exwPriceLabel:"سعر الشراء من المصنع (EXW Unit Price)", currencySelectLabel:"عملة الشراء", orderTypeLabel:"نوع الطلبية / القسم المسؤول",
    vatApplicableLabel:"هل الفاتورة النهائية من المصنع تشمل ضريبة القيمة المضافة (VAT)؟", vatAmountLabel:"قيمة ضريبة القيمة المضافة (VAT)",
    sectionSpecialCargo:"متطلبات خاصة بالبضاعة",
    isDangerousGoodsLabel:"هل البضاعة مادة خطرة؟ (Dangerous Goods)", msdsNumberLabel:"رقم / مرجع نشرة بيانات السلامة (MSDS)",
    isSpecialCargoLabel:"بضاعة تتطلب معاملة خاصة؟ (Special Cargo)", specialCargoNoteLabel:"وصف طبيعة البضاعة الخاصة ومتطلباتها",
    needsReeferLabel:"هل تحتاج البضاعة تبريد؟ (Reefer)", reeferTempLabel:"درجة الحرارة المطلوبة (°C)",
    yesOption:"نعم", noOption:"لا",
    dgBadge:"خطرة", specialBadge:"خاصة", reeferBadge:"تبريد",
    cutOffSoonKpi:"اقتراب Cut-off",
    dgDeclarationTitle:"إقرار بضاعة خطرة — DANGEROUS GOODS DECLARATION",
    dgDeclarationNote:"هذه الشحنة تحتوي مادة مصنّفة خطرة. رقم/مرجع MSDS:",
    specialCargoDeclarationTitle:"بضاعة تتطلب معاملة خاصة — SPECIAL CARGO",
    reeferDeclarationTitle:"شحنة تبريد — REEFER CARGO",
    reeferDeclarationNote:"درجة الحرارة المطلوبة أثناء النقل:",
    msdsRequiredAlert:"البضاعة محددة كمادة خطرة — يجب إدخال رقم/مرجع نشرة بيانات السلامة MSDS.",
    specialCargoNoteRequiredAlert:"البضاعة محددة كبضاعة خاصة — يجب كتابة وصف متطلباتها.",
    reeferTempRequiredAlert:"البضاعة تحتاج تبريد — يجب إدخال درجة الحرارة المطلوبة.",
    vatAmountRequiredAlert:"تم تحديد وجود ضريبة قيمة مضافة — يجب إدخال قيمتها.",
    printPackagesPrefix:" — عدد الطرود: ", printNetWeightPrefix:" — الوزن الصافي: ", printGrossWeightPrefix:" — الوزن الإجمالي: ",
    printCbmPrefix:" — الحجم: ", printHsCodePrefix:" — HS Code: ",
    blSectionTitle:"بيانات بوليصة الشحن (House Bill of Lading)",
    blDocTypeLabel:"نوع مستند الشحن", blDocTypeHBL:"بوليصة شحن منزلية (House B/L)", blDocTypeCWB:"بوليصة إلكترونية (Cargo Waybill - CWB)",
    blDocTypeCwbNote:"بوليصة إلكترونية لا تحتاج أصلًا ورقيًا ولا تظهيرًا — تُسلَّم البضاعة للمرسل إليه بإثبات الهوية مباشرة عند الوصول.",
    blShipperNameLabel:"اسم الشاحن (المصنع / المورد)", blShipperAddressNote:"العنوان: {address}",
    blConsigneeNameLabel:"اسم المرسل إليه", blConsigneeAddressLabel:"عنوان المرسل إليه",
    blNotifyNameLabel:"اسم الطرف المُخطر", blNotifyAddressLabel:"عنوان الطرف المُخطر",
    blContainerSealLabel:"رقم الحاوية / الختم", blMarksNosLabel:"علامات وأرقام الطرود",
    blPackageKindLabel:"نوع الطرود", blPackageKindPlaceholder:"مثال: كراتين CTNS",
    blVesselNameLabel:"اسم السفينة", blVoyageNoLabel:"رقم الرحلة",
    blPortLoadingLabel:"ميناء التحميل", blPortDischargeLabel:"ميناء التفريغ",
    blVesselEtaLabel:"تاريخ وصول السفينة المتوقع للميناء (Vessel ETA)",
    blCutOffLabel:"موعد الـ Cut-off (وصول الشحنة للميناء)", blCutOffAutoNote:"يُحسب تلقائيًا: 3 أيام قبل وصول السفينة المتوقع.",
    blCutOffPassedWarning:"تنبيه: موعد الـ Cut-off فات ولم تصل الشحنة للميناء بعد!",
    blCutOffApproachingWarning:"تنبيه: موعد الـ Cut-off يقترب — يجب وصول الشحنة للميناء قبله.",
    blVgmSectionTitle:"الوزن الإجمالي المؤكد (VGM)",
    blVgmWeightLabel:"الوزن الإجمالي المؤكد VGM (كجم)", blVgmVerifiedByLabel:"جهة/موظف التحقق بالميناء", blVgmDateLabel:"تاريخ التحقق",
    blVgmMissingNote:"لم يُستلم بعد وزن VGM من الميناء — مطلوب لإدراجه في البوليصة قبل الإصدار.",
    blVgmNotYetIssuedAlert:"لا يمكن توقيع وإصدار البوليصة قبل إدخال الوزن الإجمالي المؤكد VGM من الميناء.",
    blFreightPayableLabel:"شروط الدفع", blFreightPrepaid:"مدفوع مسبقًا (PREPAID)", blFreightCollect:"يُدفع عند الوصول (COLLECT)",
    blNumberLabel:"رقم البوليصة (B/L No.)", blPlaceOfIssueLabel:"مكان الإصدار",
    blIssuedByLabel:"صادرة بواسطة", blIssueDateLabel:"تاريخ الإصدار", saveBLBtn:"حفظ بيانات البوليصة",
    blPaymentHeldShort:"محجوزة - بانتظار السداد", blPaymentClearedShort:"السداد مؤكد",
    blPaymentHeldNote:"الشحنة مدفوعة مسبقًا (PREPAID) ولم يُسجَّل بعد سداد كامل في حسابات اللوجستيك — لا يمكن لقسم المالية إصدار البوليصة أو السماح بخروج البضاعة حتى يتأكد السداد.",
    blPaymentClearedNote:"تم تأكيد السداد في حسابات اللوجستيك — بإمكان قسم المالية إصدار البوليصة والسماح بخروج البضاعة.",
    blIssueBlockedAlert:"لا يمكن إصدار بوليصة الشحن: الدفع المسبق لم يُسدَّد بعد. الرجاء تأكيد السداد في قسم الحسابات (حسابات اللوجستيك) أولاً.",
    blIssuedShort:"صادرة", blIssuedNote:"تم إصدار بوليصة الشحن رسميًا من قسم المالية — يمكن للوجستيك إكمال إجراءات خروج البضاعة الآن.",
    blIssuedCodeLabel:"كود التحقق", blIssuedByRoleLabel:"صادرة عن",
    blLockedAfterIssueNote:"تم اعتماد وتوقيع البوليصة من المالية — بيانات الشحن مقفلة ولا يمكن تعديلها بعد الآن.",
    procOrderSeeCardNote:"إتمام هذه المرحلة يتم من بطاقة «تأكيد الزبون على الفاتورة النهائية» أعلاه.",
    customerConfirmationTitle:"تأكيد الزبون على الفاتورة النهائية",
    customerConfirmedShort:"تم التأكيد", awaitingCustomerConfirmation:"بانتظار تأكيد الزبون", customerInvoiceNotSentShort:"لم تُرسل بعد",
    awaitingLogisticsAckShort:"بانتظار استلام اللوجستيك", logisticsAckedShort:"استلمها اللوجستيك",
    logisticsAckBtn:"استلام الموافقة ومتابعة إجراءات الشحن",
    logisticsAckedNoteTemplate:"استلم اللوجستيك هذه الموافقة وتابع إجراءات الشحن — بواسطة: {by} — بتاريخ: {date}",
    awaitingLogisticsAckNote:"تم تسجيل موافقة الزبون. بانتظار أن يستلمها اللوجستيك ليكمل إجراءات الشحن.",
    awaitingDeptConfirmationNote:"بانتظار أن يُدخل {dept} رمز موافقة الزبون بعد إرسال الفاتورة.",
    awaitingDeptInvoiceNote:"بانتظار أن يُصدر {dept} الفاتورة النهائية ويُرسلها للزبون أولًا.",
    customerConfirmationExplainerNote:"هذه بطاقة تسجيل إجرائي داخلي: يُصدر {dept} فاتورة نهائية تحمل رمز تأكيد فريد ويُرسلها للزبون، ثم يُدخل نفس القسم الرمز الذي يرده به الزبون (هاتفيًا أو عبر البريد/واتساب) لتوثيق موافقته. بعدها يستلم اللوجستيك هذه الموافقة ليكمل إجراءات الشحن. وهذا سجل وإثبات إجرائي، وليس توقيعًا إلكترونيًا مباشرًا من الزبون نفسه على النظام.",
    generateCustomerInvoiceBtn:"توليد الفاتورة النهائية وإرسالها للزبون", regenerateInvoiceBtn:"إعادة توليد الفاتورة (رمز جديد)",
    invoiceSentNoteTemplate:"تم توليد الفاتورة وإرسالها للزبون بتاريخ {date} بواسطة {by}.",
    enterConfirmCodeLabel:"رمز التأكيد الوارد من الزبون", enterConfirmCodePlaceholder:"مثال: CNF-XXXXXX",
    recordCustomerConfirmationBtn:"تسجيل تأكيد الزبون", confirmCodeMismatchAlert:"الرمز المُدخل لا يطابق رمز الفاتورة المُرسلة للزبون. الرجاء التأكد من الرمز قبل المتابعة.",
    customerConfirmedNote:"تم توثيق موافقة الزبون على الفاتورة النهائية — يمكن للوجستيك متابعة إجراءات الحجز الآن.",
    confirmCodeLabel:"رمز التأكيد", confirmedByLabel:"سجّله",
    finalInvoiceCodeInstructions:"يرجى مراجعة تفاصيل هذه الفاتورة، وفي حال الموافقة، الرد بهذا الرمز عبر الهاتف أو البريد الإلكتروني أو واتساب لتأكيد الموافقة والمتابعة في إجراءات الشحن — ORDER CONFIRMATION CODE",
    blNumberFilledByFinanceNote:"يُدخله قسم المالية عند التوقيع وإصدار البوليصة.",
    blNumberPlaceholder:"أدخل رقم البوليصة الصادر", blSignAndIssueBtn:"توقيع وإصدار البوليصة",
    blSignAndIssueExplainerNote:"إدخال رقم البوليصة هنا والضغط على «توقيع وإصدار» يُعتبر توقيع المالية الرسمي على البوليصة — بعدها تُقفل جميع بيانات الشحن ويُبلَّغ اللوجستيك بإمكانية متابعة إجراءات خروج البضاعة.",
    blAwaitingLogisticsDataNote:"بانتظار أن يُعبّئ اللوجستيك بيانات الشحن أولًا قبل أن يتسنى للمالية التوقيع وإصدار البوليصة.",
    blNumberRequiredAlert:"الرجاء إدخال رقم البوليصة قبل التوقيع والإصدار.",
    blSeeCardNote:"جاهزة لتوقيع المالية — راجع بطاقة بوليصة الشحن أعلاه"
  }
},
en: {
  dirName:"ltr", langName:"English", langShort:"EN", htmlLang:"en",
  appTitle:"Al-Alamiya System — Hamouda",
  appDescription:"The company's internal operating system across manufacturing, commercial, logistics, accounts and treasury",
  brandMark:"Hamouda", brandSub:"Al-Alamiya System",
  loggedInAs:"Logged in as:", logout:"Log out", autosave:"Everything is saved automatically on the system server and shared with all users.",
  creditLine:"Designed & developed by: Mohammed Khaled Al-Tayari — Project Manager, Hamouda Group",
  loginBrand:"Hamouda — Al-Alamiya System", loginSub:"Enter your login details to continue",
  loginUsernameLabel:"Username (email)", loginPasswordLabel:"Password",
  loginQuickSelectLabel:"Quick user select", loginQuickSelectPlaceholder:"— Choose a user to sign in as —",
  loginDividerText:"or enter credentials manually",
  loginError:"Incorrect username or password", loginBtn:"Log in",
  nav:{orders:"Orders", warehouse:"Warehouses", settings:"Settings & Audit Log", incoterms:"Incoterms 2020"},
  departments:{MANUFACTURING:"Manufacturing Department", COMMERCIAL:"Commercial Department", LOGISTICS:"Logistics Department", ACCOUNTS_MANUFACTURING:"Manufacturing Accounts", ACCOUNTS_COMMERCIAL:"Commercial Accounts", ACCOUNTS_LOGISTICS:"Logistics Accounts", TREASURY:"Treasury", SENIOR_MANAGEMENT:"Finance Department"},
  orderTypes:{COMMERCIAL:"Commercial (Ready-Made Product)", MANUFACTURING:"Manufacturing (Custom Design)"},
  roles:{manufacturing_staff:"Manufacturing Staff", commercial_staff:"Commercial Staff", logistics_fcl:"FCL Booking Desk", logistics_lcl:"LCL Booking Desk", logistics_bb:"Break Bulk Booking Desk", logistics_air:"Air Freight Booking Desk", logistics_documentation:"Documentation Desk", logistics_warehouse:"Warehouse Desk", logistics_expert:"Professional Shipping Expert", logistics_manager:"Logistics Manager", accounts_manufacturing:"Manufacturing Accountant", accounts_commercial:"Commercial Accountant", accounts_logistics:"Logistics Accountant", treasury:"Treasury Officer", senior_management:"Finance Department", system_admin:"System Administrator"},
  stages:{COMMERCIAL_QUOTE:"Commercial: Initial Quotation", COMMERCIAL_RECEIVE_SPECS:"Commercial: Receive Customer Request", COMMERCIAL_SOURCE_PRICE:"Commercial: Source Best Price for Ready-Made Product", COMMERCIAL_SEND_SPECS_TO_LOGISTICS:"Commercial: Send Details to Logistics", COMMERCIAL_REQUEST_SHIPPING_PRICE:"Commercial: Request Shipping Price", COMMERCIAL_RECEIVE_SHIPPING_PRICE:"Commercial: Receive Shipping Price from Logistics", MFG_RECEIVE_SPECS:"Manufacturing: Receive Order Specifications", MFG_EXWORKS_PRICE:"Manufacturing: Set Ex Works Price", MFG_SEND_SPECS_TO_LOGISTICS:"Manufacturing: Send Specs to Logistics", MFG_REQUEST_SHIPPING_PRICE:"Manufacturing: Request Shipping Price", MFG_RECEIVE_SHIPPING_PRICE:"Manufacturing: Receive Shipping Price from Logistics", LOGISTICS_PROCEDURE_ORDER:"Logistics: Receive Customer Approval (Procedure Order)", LOGISTICS_BOOKING:"Logistics: Shipment Booking", DOCUMENTATION_PREPARE:"Documentation: Prepare Documents", CUSTOMS_CLEARANCE:"Customs: Clearance Decision", DELIVERY:"Delivery per Incoterm"},
  servicesCostLabels:{inspection:"1- Inspection (optional)", roadTransportOrigin:"2- Road Transport (origin)", customsClearingOrigin:"3- Customs Clearing (shipping)", stevedoringOrigin:"4- Stevedoring (shipping)", insurance:"5- Insurance (optional)", marineTransport:"6- Marine Transport", stevedoringDischarge:"7- Stevedoring (discharge)", customsClearingDestination:"8- Customs Clearing (destination)", roadTransportDestination:"9- Road Transport (destination)", dangerousGoodsSurcharge:"10- Surcharge: Dangerous Goods", specialCargoSurcharge:"11- Surcharge: Special Cargo", reeferSurcharge:"12- Surcharge: Reefer", otherServices:"13- Others"},
  documents:{FINAL_INVOICE:"Final Invoice", PACKING_LIST:"Packing List", CERTIFICATE_OF_ORIGIN:"Certificate of Origin", BILL_OF_LADING:"House Bill of Lading", CARGO_MANIFEST:"Cargo Manifest"},
  bookingTypes:{FCL:"Full Container Load (FCL)", LCL:"Less than Container Load (LCL)", BB:"Non-standard Cargo (Break Bulk)", AIR:"Air Freight", REEFER:"Refrigerated Container (Reefer)"},
  incotermElements:{INSPECTION:"Inspection", LOCAL_TRANSPORT:"Local Land Transport", CUSTOMS_CLEARING:"Customs Clearance", LOADING_DISCHARGING:"Loading/Discharging", SEA_TRANSPORT:"Sea Transport", INSURANCE:"Marine Insurance"},
  incoterms:{EXW:"Ex Works", FCA:"Free Carrier", FAS:"Free Alongside Ship", FOB:"Free on Board", CFR:"Cost and Freight", CIF:"Cost, Insurance and Freight", CPT:"Carriage Paid To", CIP:"Carriage and Insurance Paid To", DAP:"Delivered at Place", DPU:"Delivered at Place Unloaded", DDP:"Delivered Duty Paid"},
  party:{SELLER:"Seller", BUYER:"Buyer", NA:"—"},
  phase:{PRE_SHIPMENT:"Pre-Shipment", SHIPMENT_ACTIVE:"Shipment Active", COMPLETED:"Completed", CANCELLED:"Cancelled"},
  statusColor:{GREEN:"On Schedule", YELLOW:"Deadline Approaching", RED:"Overdue", NEUTRAL:"No Deadline Set"},
  stageStatus:{PENDING:"Not Started", IN_PROGRESS:"In Progress", DONE:"Done"},
  accSection:{MANUFACTURING:"Manufacturing Accounts", COMMERCIAL:"Commercial Accounts", LOGISTICS:"Logistics Accounts"},
  payStatus:{PENDING:"Unpaid", PARTIAL:"Partially Paid", PAID:"Fully Paid"},
  bonusStatus:{PROPOSED:"Proposed", APPROVED:"Approved", PAID:"Paid"},
  journeyStops:["Preparation & Pricing","Customer Approval (Procedure Order)","Truck to Port","Port (Docs & Customs)","Delivery to Customer"],
  shippingMethods:{SEA_LCL:"Sea – LCL", SEA_FCL:"Sea – FCL Container", AIR_EXPRESS:"Air – Express", AIR_REGULAR:"Air – Regular"},
  currencies:{USD:"US Dollar (USD)", CNY:"Chinese Yuan (RMB/CNY)", LYD:"Libyan Dinar (LYD)"},
  ui:{
    ordersHeading:"Orders", newOrderBtn:"+ New Order", noOrdersYet:"No orders yet.",
    orderNotFound:"Order not found.", backToOrders:"← Back to Orders",
    newOrderFormTitle:"New Order — Customer Call Intake",
    customerName:"Customer / Company Name *", contactPerson:"Contact Person", phone:"Phone Number", email:"Email",
    goodsDescription:"Goods Description", quantity:"Quantity", unit:"Unit", incotermRequired:"Incoterm *",
    exWorksPriceLabel:"Ex Works Price", currency:"Currency", createOrder:"Create Order", cancel:"Cancel",
    manualOverrideSuffix:" (Manual Override)", exworkPill:"EX WORK: ", shippingPill:"Shipping: ",
    journeyTitle:"Shipment Journey Map", journeyNotStarted:"Shipment journey hasn't started yet — awaiting Procedure Order",
    statusColorTitle:"Status Color",
    manualOverrideAppliedTemplate:"Manually overridden to “{color}” by {by}{reason}",
    reasonSuffixTemplate:" — Reason: {reason}",
    revertToAuto:"Revert to Automatic", forceColorLabel:"Force Color Manually", reasonOptional:"Reason (optional)", applyOverride:"Apply Override",
    stagesTitle:"Workflow Stages", dueDatePrefix:" · Due: ",
    shippingPriceLabel:"Shipping Price", saveShippingPrice:"Save Shipping Price",
    bookingTypeLabel:"Shipment Type", carrierLabel:"Carrier", referenceLabel:"Reference (House B/L, Voyage No....)", saveBooking:"Save Booking",
    materialTypeLabel:"Material/Cargo Type", clearanceNotesLabel:"Clearance Procedure Notes", approveClearance:"Approve Clearance & Mark Done",
    dueDateLabel:"Due Date", saveDueDate:"Save Due Date", markDone:"Mark Done",
    documentsTitle:"Documents", issued:"Issued", draft:"Draft", viewPrint:"View / Print", issue:"Issue",
    bonusTitle:"Bonus Notes — Internal Performance Incentive (BB)", bonusHint:"Internal staff record only — never shown on any customer document.",
    noNotesYet:"No notes yet", descriptionLabel:"Description", amountOptional:"Amount (optional)", addNote:"Add Note",
    approve:"Approve", recordPayment:"Record Payment",
    expertTitle:"Professional Shipping Expert", noExpertYet:"No expert assigned yet", expertNameLabel:"Expert Name", contactMethod:"Contact Method", saveAssignment:"Save Assignment",
    accountsTitle:"Accounts", noInvoiceRef:"No Invoice Ref", noAccountsYet:"No account records yet",
    invoiceRefLabel:"Invoice Reference", amountLabel:"Amount", paymentStatusLabel:"Payment Status", addRecord:"Add Record",
    treasuryTitle:"Treasury", inbound:"Inbound", outbound:"Outbound", noTreasuryYet:"No transactions yet",
    directionLabel:"Direction", addTransaction:"Add Transaction",
    incotermsRefTitle:"Incoterms 2020 & Responsibility Matrix", termColumn:"Term",
    warehouseHeading:"Warehouses", noWarehouseAccess:"You don't have permission to view warehouses.",
    qtyPrefix:" · Qty: ", orderPrefix:" · Order: ", stored:"Stored", released:"Released", releaseBtn:"Release",
    noGoodsStored:"No goods stored", noOrderOption:"No Order", addToWarehouse:"Add to Warehouse",
    settingsHeading:"System Settings", noSettingsAccess:"You don't have permission to access settings.",
    fsAutoSaveTitle:"Auto-Save to a Folder on Your Device", fsAutoSaveDesc:"Connect the system to a folder on your device (e.g. a \"Hamouda\" folder) — every customer's and order's data is saved automatically into one file inside that folder the moment it's created or changed, indexed by order number, with no manual download.",
    fsAutoSaveNote:"This is an extra, permanent record outside the browser — it does not replace the full backup below.",
    notifTitle:"Cut-off Approaching Notifications", notifDesc:"An instant alert on your device screen when an order's Cut-off date is near or has passed — a fast alternative until you decide to set up WhatsApp Business.",
    notifNote:"Works as long as the system is open on your device (even in the background) — it won't reach you if the app is fully closed, unlike WhatsApp.",
    notifNotSupported:"Your browser doesn't support desktop notifications.", notifNotSupportedShort:"Not supported",
    notifDeniedNote:"You previously denied notification permission in your browser settings — you'll need to re-enable it manually from the site settings.", notifDeniedShort:"Denied",
    notifEnableBtn:"Enable Notifications", notifDisableBtn:"Disable Notifications",
    notifEnabledShort:"Enabled", notifDisabledShort:"Disabled",
    notifEnabled:"Notifications enabled successfully.", notifDenied:"Notification permission was not granted.",
    notifCutoffPassedTitle:"⚠ Cut-off date has passed!", notifCutoffSoonTitle:"⏰ Cut-off date approaching",
    notifQuickOnTitle:"Cut-off alerts are ON — click to turn off", notifQuickOffTitle:"Cut-off alerts are OFF — click to turn on",
    notifQuickOnToast:"Alerts turned on — they'll stay on until you turn them off with this same button.", notifQuickOffToast:"Alerts turned off.",
    fsConnectedShort:"Connected — auto-saving", fsNotConnectedShort:"Not connected", fsNeedsPermission:"Awaiting access permission",
    fsConnectBtn:"Choose Save Folder", fsReconnectBtn:"Grant Permission Again", fsDisconnectBtn:"Disconnect",
    fsNotSupported:"Your browser doesn't support auto-save to disk (works on desktop Chrome or Edge).",
    fsConnected:"Connected — auto-save is now active.", fsConnectFailed:"Could not connect to the folder.",
    fsLastSyncTemplate:"Last auto-save: {date}",
    backupTitle:"Data Backup", backupDesc:"Data is stored centrally on the system server and shared by all departments. You can download a full backup or import an earlier one (importing replaces the server data and needs manager rights).",
    exportBackupBtn:"Export Backup", importBackupBtn:"Import Backup",
    backupNote:"We also recommend copying the database file (data/hamouda.db) and the uploads folder (data/uploads) on the server regularly.",
    backupExportFailedAlert:"Could not export the backup. Please try again.",
    backupImportInvalidAlert:"The selected file is not a valid backup for this system.",
    backupImportConfirmWarning:"Importing will replace ALL current data on this device with the content of the selected file. This cannot be undone. Continue?",
    backupImportSuccessAlert:"Backup imported successfully.",
    currentStageLabel:"Current Stage",
    assistantTitle:"Hamouda Assistant", assistantSubtitle:"Ask about any order or shipment",
    assistantPlaceholder:"e.g. Where is order ORD-0012?", assistantSend:"Send", close:"Close",
    assistantWelcome:"Hi 👋 I can answer about any order by its number, or give you ready lists (late, near Cut-off, completed, dangerous goods). Try me.",
    assistantNotFoundTemplate:"Couldn't find an order numbered {no}. Double-check the number and try again.",
    assistantLateIntroTemplate:"Found {count} late order(s):", assistantLateIntroEmpty:"Good news — no late orders right now.",
    assistantCutoffIntroTemplate:"{count} order(s) approaching their Cut-off date:", assistantCutoffIntroEmpty:"No orders approaching Cut-off right now.",
    assistantDoneIntroTemplate:"You have {count} completed order(s):", assistantDoneIntroEmpty:"No completed orders yet.",
    assistantDgIntroTemplate:"{count} order(s) marked as dangerous goods:", assistantDgIntroEmpty:"No dangerous goods orders right now.",
    assistantCustomerIntroTemplate:"Found {count} matching order(s):",
    assistantCountAnswerTemplate:"You have {count} order(s) in total.",
    assistantGreeting:"Hello! Ask me about any order or tell me what you'd like to know.",
    assistantFallback:"I didn't quite catch that 🤔 Try an order number (like ORD-0012), or ask about: late orders, orders near Cut-off, completed orders, dangerous goods.",
    assistantMoreSuffixTemplate:"...and {count} more",
    assistantSuggestLate:"Late orders", assistantSuggestCutoff:"Near Cut-off", assistantSuggestDone:"Completed",
    servicesCostsTitle:"Services Costs", servicesCostsDesc:"Cost line items Logistics uses to build the full price sent to the customer.",
    otherServicesNoteLabel:"Description of the additional service (Others)", otherServicesNotePlaceholder:"e.g. special packaging, extra manual unloading...",
    servicesCostsSurchargeNote:"This order contains cargo that requires a surcharge on the shipping price — set the appropriate value for each line based on the cargo's nature.",
    optionalSuffix:"(optional)", saveServicesCostsBtn:"Save Services Costs", servicesCostsTotalLabel:"Total:",
    servicesCostsAutoFillNote:"The total of these items is computed automatically and used as the full shipping price in the workflow stages and the final invoice.",
    thresholdTitle:"Shipment Status Coloring", thresholdDesc:"Number of days before the deadline when the card turns yellow.",
    daysLabel:"Number of Days", save:"Save",
    auditLogTitle:"Audit Log (last 50 actions)", noAuditYet:"No actions recorded yet",
    printOrderNo:"Order No.: ", printDate:"Date: ", printCustomerData:"Customer Details",
    printContact:"Contact: ", printPhone:"Phone: ", printGoodsData:"Goods Details", printQtyPrefix:" — Quantity: ",
    printTermsData:"Delivery & Shipping Terms", printShipmentType:"Shipment Type: ", printCarrier:" · Carrier: ", printReference:" · Reference: ",
    printPrices:"Prices", printExworks:"Ex Works Price", printShipping:"Shipping Price", printTotal:"Total",
    printIssuerSig:"Issuer Signature", printRecipientSig:"Recipient Signature",
    requiredNameAlert:"Customer name is required",
    requiredPhoneAlert:"Phone number is required",
    requiredContactAlert:"Contact person name is required", requiredEmailAlert:"Email is required",
    requiredGoodsArAlert:"Goods description (Arabic) is required", requiredGoodsEnAlert:"Goods description (English) is required",
    requiredSupplierAddrAlert:"Supplier/factory address in China is required", requiredChinaTrackingAlert:"Internal China tracking number is required",
    requiredPackagesAlert:"Number of packages is required", requiredNetWeightAlert:"Net weight is required", requiredGrossWeightAlert:"Gross weight is required",
    requiredDimAlert:"All package dimensions (L x W x H) are required", requiredLaydaysAlert:"Cargo readiness (Laydays) date is required",
    requiredCancellingAlert:"Cancelling date is required", requiredExwAlert:"EXW purchase price is required",
    formIncompleteNote:"Every field in this form is mandatory — the order cannot be submitted until all fields are filled in.",
    orderInfoTitle:"Order Information",
    sectionBasicInfo:"Customer & Order Basic Info", sectionCargoSupplier:"Cargo & Supplier Details",
    sectionLogisticsSpecs:"Logistics & Specs", sectionShippingTerms:"Shipping & LAYCAN", sectionFinancials:"Financials",
    phoneRequired:"Phone Number (with country code) *",
    orderRefLabel:"Order Ref.", orderRefAutoNote:"Generated automatically on save",
    goodsDescriptionArLabel:"Goods Description (Arabic)", goodsDescriptionEnLabel:"Goods Description (English)",
    hsCodeLabel:"HS Code (optional)",
    supplierAddressLabel:"Supplier / Factory Address in China", chinaTrackingLabel:"China Tracking No.",
    packagesCountLabel:"Packages Count", netWeightLabel:"Net Weight (kg)", grossWeightLabel:"Gross Weight (kg)",
    dimensionsLabel:"Dimensions (L × W × H, cm)", dimLPlaceholder:"Length", dimWPlaceholder:"Width", dimHPlaceholder:"Height",
    cbmLabel:"Total Volume – CBM (auto-calculated)", cbmUnit:"m³",
    shippingMethodLabel:"Shipping Method",
    laydaysStartLabel:"Cargo Ready Date (Laydays Start)", cancellingDateLabel:"Cancelling Date",
    exwPriceLabel:"EXW Unit Price", currencySelectLabel:"Purchase Currency", orderTypeLabel:"Order Type / Responsible Department",
    vatApplicableLabel:"Does the factory's final invoice include VAT?", vatAmountLabel:"VAT Amount",
    sectionSpecialCargo:"Special Cargo Requirements",
    isDangerousGoodsLabel:"Is this cargo a dangerous good?", msdsNumberLabel:"MSDS Reference / Number",
    isSpecialCargoLabel:"Does this cargo require special handling? (Special Cargo)", specialCargoNoteLabel:"Describe the special cargo nature and requirements",
    needsReeferLabel:"Does this cargo require refrigeration? (Reefer)", reeferTempLabel:"Required Temperature (°C)",
    yesOption:"Yes", noOption:"No",
    dgBadge:"Dangerous", specialBadge:"Special", reeferBadge:"Reefer",
    cutOffSoonKpi:"Cut-off Approaching",
    dgDeclarationTitle:"Dangerous Goods Declaration",
    dgDeclarationNote:"This shipment contains a classified dangerous substance. MSDS Reference/Number:",
    specialCargoDeclarationTitle:"Cargo Requiring Special Handling — SPECIAL CARGO",
    reeferDeclarationTitle:"Refrigerated Cargo — REEFER CARGO",
    reeferDeclarationNote:"Required temperature during transport:",
    msdsRequiredAlert:"Cargo is marked as dangerous goods — the MSDS reference/number is required.",
    specialCargoNoteRequiredAlert:"Cargo is marked as special cargo — a description of its requirements is required.",
    reeferTempRequiredAlert:"Cargo requires refrigeration — the required temperature is required.",
    vatAmountRequiredAlert:"VAT was marked as applicable — the VAT amount is required.",
    printPackagesPrefix:" — Packages: ", printNetWeightPrefix:" — Net Weight: ", printGrossWeightPrefix:" — Gross Weight: ",
    printCbmPrefix:" — Volume: ", printHsCodePrefix:" — HS Code: ",
    blSectionTitle:"House Bill of Lading Details",
    blDocTypeLabel:"Shipping Document Type", blDocTypeHBL:"House Bill of Lading (HBL)", blDocTypeCWB:"Electronic Cargo Waybill (CWB)",
    blDocTypeCwbNote:"An electronic waybill — no paper original and no endorsement needed. Cargo is released to the consignee on ID verification alone.",
    blShipperNameLabel:"Shipper Name (Factory / Supplier)", blShipperAddressNote:"Address: {address}",
    blConsigneeNameLabel:"Consignee Name", blConsigneeAddressLabel:"Consignee Address",
    blNotifyNameLabel:"Notify Party Name", blNotifyAddressLabel:"Notify Party Address",
    blContainerSealLabel:"Container / Seal No.", blMarksNosLabel:"Marks & Numbers",
    blPackageKindLabel:"Package Type", blPackageKindPlaceholder:"e.g. CTNS",
    blVesselNameLabel:"Vessel Name", blVoyageNoLabel:"Voyage No.",
    blVesselEtaLabel:"Vessel ETA at Port",
    blCutOffLabel:"Cut-off Date (cargo must reach port)", blCutOffAutoNote:"Auto-calculated: 3 days before the vessel's expected arrival.",
    blCutOffPassedWarning:"Warning: the cut-off date has passed and the cargo has not reached the port yet!",
    blCutOffApproachingWarning:"Warning: the cut-off date is approaching — cargo must reach the port before it.",
    blVgmSectionTitle:"Verified Gross Mass (VGM)",
    blVgmWeightLabel:"Verified Gross Mass — VGM (kg)", blVgmVerifiedByLabel:"Verified By (Port)", blVgmDateLabel:"Verification Date",
    blVgmMissingNote:"VGM weight has not been received from the port yet — required on the Bill of Lading before issuance.",
    blVgmNotYetIssuedAlert:"Cannot sign and issue the Bill of Lading before the Verified Gross Mass (VGM) from the port is entered.",
    blPortLoadingLabel:"Port of Loading", blPortDischargeLabel:"Port of Discharge",
    blFreightPayableLabel:"Freight Payable At", blFreightPrepaid:"PREPAID", blFreightCollect:"COLLECT",
    blNumberLabel:"B/L No.", blPlaceOfIssueLabel:"Place of Issue",
    blIssuedByLabel:"Issued By", blIssueDateLabel:"Date of Issue", saveBLBtn:"Save Bill of Lading Data",
    blPaymentHeldShort:"Held – Awaiting Payment", blPaymentClearedShort:"Payment Confirmed",
    blPaymentHeldNote:"This shipment is PREPAID and no full payment has been recorded yet under Logistics Accounts — Finance cannot issue the Bill of Lading or release the goods until payment is confirmed.",
    blPaymentClearedNote:"Payment has been confirmed under Logistics Accounts — Finance may issue the Bill of Lading and release the goods.",
    blIssueBlockedAlert:"Cannot issue the Bill of Lading: prepayment has not been settled yet. Please confirm payment under Accounts (Logistics Accounts) first.",
    blIssuedShort:"Issued", blIssuedNote:"The Bill of Lading has been officially issued by Finance — Logistics may now proceed with cargo release.",
    blIssuedCodeLabel:"Verification Code", blIssuedByRoleLabel:"Issued By",
    blLockedAfterIssueNote:"This Bill of Lading has been approved and signed by Finance — shipment details are now locked and can no longer be edited.",
    procOrderSeeCardNote:"This stage is completed from the \"Customer Confirmation on Final Invoice\" card above.",
    customerConfirmationTitle:"Customer Confirmation on Final Invoice",
    customerConfirmedShort:"Confirmed", awaitingCustomerConfirmation:"Awaiting Customer Confirmation", customerInvoiceNotSentShort:"Not Sent Yet",
    awaitingLogisticsAckShort:"Awaiting Logistics Receipt", logisticsAckedShort:"Received by Logistics",
    logisticsAckBtn:"Receive Approval & Continue Shipping",
    logisticsAckedNoteTemplate:"Logistics received this approval and proceeded with shipping — by: {by} — on: {date}",
    awaitingLogisticsAckNote:"The customer's approval has been recorded. Awaiting Logistics to receive it and continue shipping procedures.",
    awaitingDeptConfirmationNote:"Awaiting {dept} to enter the customer's confirmation code after sending the invoice.",
    awaitingDeptInvoiceNote:"Awaiting {dept} to issue the final invoice and send it to the customer first.",
    customerConfirmationExplainerNote:"This card is an internal procedural record: {dept} issues a final invoice carrying a unique confirmation code and sends it to the customer, then the same department enters the code the customer reads back (by phone, email, or WhatsApp) to document their approval. Logistics then receives this confirmation to proceed with shipping. This is a procedural record and evidence trail, not a direct electronic signature by the customer on the system itself.",
    generateCustomerInvoiceBtn:"Generate & Send Final Invoice to Customer", regenerateInvoiceBtn:"Regenerate Invoice (New Code)",
    invoiceSentNoteTemplate:"The invoice was generated and sent to the customer on {date} by {by}.",
    enterConfirmCodeLabel:"Confirmation Code from Customer", enterConfirmCodePlaceholder:"e.g. CNF-XXXXXX",
    recordCustomerConfirmationBtn:"Record Customer Confirmation", confirmCodeMismatchAlert:"The entered code does not match the code sent to the customer on the invoice. Please verify the code before continuing.",
    customerConfirmedNote:"The customer's approval of the final invoice has been documented — Logistics can now proceed with booking arrangements.",
    confirmCodeLabel:"Confirmation Code", confirmedByLabel:"Recorded by",
    finalInvoiceCodeInstructions:"Please review this invoice, and if you agree, reply with this code by phone, email, or WhatsApp to confirm your approval and proceed with shipping — ORDER CONFIRMATION CODE",
    blNumberFilledByFinanceNote:"Filled in by Finance when they sign and issue the B/L.",
    blNumberPlaceholder:"Enter the issued B/L number", blSignAndIssueBtn:"Sign & Issue Bill of Lading",
    blSignAndIssueExplainerNote:"Entering the B/L number here and clicking \"Sign & Issue\" is Finance's official signature on the Bill of Lading — all shipment data is then locked, and Logistics is notified they can proceed with cargo release.",
    blAwaitingLogisticsDataNote:"Awaiting Logistics to fill in the shipment details before Finance can sign and issue the B/L.",
    blNumberRequiredAlert:"Please enter the B/L number before signing and issuing.",
    blSeeCardNote:"Ready for Finance's signature — see the Bill of Lading card above"
  }
},
zh: {
  dirName:"ltr", langName:"中文", langShort:"中文", htmlLang:"zh",
  appTitle:"运营与货运系统 — 哈穆达",
  appDescription:"贯穿生产、商务、物流、财务与资金各部门的公司内部运营系统",
  brandMark:"哈穆达", brandSub:"运营与货运系统",
  loggedInAs:"当前登录身份:", logout:"退出登录", autosave:"所有数据自动保存在系统服务器上，并与所有用户共享。",
  creditLine:"设计与开发：穆罕默德·哈立德·塔亚里 — 哈穆达集团项目经理",
  loginBrand:"哈穆达 — 运营与货运系统", loginSub:"请输入登录信息以继续",
  loginUsernameLabel:"用户名(邮箱)", loginPasswordLabel:"密码",
  loginQuickSelectLabel:"快速选择用户", loginQuickSelectPlaceholder:"— 选择要登录的用户 —",
  loginDividerText:"或手动输入登录信息",
  loginError:"用户名或密码不正确", loginBtn:"登录",
  nav:{orders:"订单", warehouse:"仓库", settings:"设置与审计日志", incoterms:"2020国际贸易术语解释通则"},
  departments:{MANUFACTURING:"生产部", COMMERCIAL:"商务部", LOGISTICS:"物流部", ACCOUNTS_MANUFACTURING:"生产财务", ACCOUNTS_COMMERCIAL:"商务财务", ACCOUNTS_LOGISTICS:"物流财务", TREASURY:"资金部", SENIOR_MANAGEMENT:"财务部"},
  orderTypes:{COMMERCIAL:"商务(现货产品)", MANUFACTURING:"生产(定制设计)"},
  roles:{manufacturing_staff:"生产员工", commercial_staff:"商务员工", logistics_fcl:"整箱(FCL)订舱台", logistics_lcl:"拼箱(LCL)订舱台", logistics_bb:"散杂货订舱台", logistics_air:"空运订舱台", logistics_documentation:"单证台", logistics_warehouse:"仓库台", logistics_expert:"专业货运专家", logistics_manager:"物流经理", accounts_manufacturing:"生产会计", accounts_commercial:"商务会计", accounts_logistics:"物流会计", treasury:"资金专员", senior_management:"财务部", system_admin:"系统管理员"},
  stages:{COMMERCIAL_QUOTE:"商务:初步报价", COMMERCIAL_RECEIVE_SPECS:"商务:接收客户需求", COMMERCIAL_SOURCE_PRICE:"商务:为现货产品寻源最优价格", COMMERCIAL_SEND_SPECS_TO_LOGISTICS:"商务:将详情发送至物流部", COMMERCIAL_REQUEST_SHIPPING_PRICE:"商务:申请运费报价", COMMERCIAL_RECEIVE_SHIPPING_PRICE:"商务:从物流部接收运费", MFG_RECEIVE_SPECS:"生产:接收订单规格", MFG_EXWORKS_PRICE:"生产:确定工厂交货价(EX WORK)", MFG_SEND_SPECS_TO_LOGISTICS:"生产:将规格发送至物流部", MFG_REQUEST_SHIPPING_PRICE:"生产:申请运费报价", MFG_RECEIVE_SHIPPING_PRICE:"生产:从物流部接收运费", LOGISTICS_PROCEDURE_ORDER:"物流:接收客户批准(Procedure Order)", LOGISTICS_BOOKING:"物流:货运订舱", DOCUMENTATION_PREPARE:"单证:准备单证", CUSTOMS_CLEARANCE:"海关:清关决定", DELIVERY:"按国际贸易术语(Incoterm)交货"},
  servicesCostLabels:{inspection:"1- 检验(可选)", roadTransportOrigin:"2- 陆运(启运地)", customsClearingOrigin:"3- 清关(发货阶段)", stevedoringOrigin:"4- 装卸作业(发货阶段)", insurance:"5- 保险(可选)", marineTransport:"6- 海运", stevedoringDischarge:"7- 卸货装卸作业(到港时)", customsClearingDestination:"8- 清关(到达时)", roadTransportDestination:"9- 陆运(到达时)", dangerousGoodsSurcharge:"10- 附加费:危险品(Dangerous Goods)", specialCargoSurcharge:"11- 附加费:特殊货物(Special Cargo)", reeferSurcharge:"12- 附加费:冷藏(Reefer)", otherServices:"13- 其他(Others)"},
  documents:{FINAL_INVOICE:"最终发票", PACKING_LIST:"装箱单(Packing List)", CERTIFICATE_OF_ORIGIN:"原产地证书", BILL_OF_LADING:"分提单(House B/L)", CARGO_MANIFEST:"货物舱单(Cargo Manifest)"},
  bookingTypes:{FCL:"整箱(FCL)", LCL:"拼箱(LCL)", BB:"散杂货(Break Bulk)", AIR:"空运", REEFER:"冷藏集装箱(Reefer)"},
  incotermElements:{INSPECTION:"检验", LOCAL_TRANSPORT:"境内陆运", CUSTOMS_CLEARING:"清关", LOADING_DISCHARGING:"装卸货", SEA_TRANSPORT:"海运", INSURANCE:"海运保险"},
  incoterms:{EXW:"工厂交货", FCA:"货交承运人", FAS:"船边交货", FOB:"船上交货", CFR:"成本加运费", CIF:"成本、保险费加运费", CPT:"运费付至", CIP:"运费、保险费付至", DAP:"目的地交货", DPU:"目的地卸货后交货", DDP:"完税后交货"},
  party:{SELLER:"卖方", BUYER:"买方", NA:"—"},
  phase:{PRE_SHIPMENT:"发货前", SHIPMENT_ACTIVE:"运输中", COMPLETED:"已完成", CANCELLED:"已取消"},
  statusColor:{GREEN:"按计划进行", YELLOW:"临近截止日期", RED:"已逾期", NEUTRAL:"未设定截止日期"},
  stageStatus:{PENDING:"未开始", IN_PROGRESS:"进行中", DONE:"已完成"},
  accSection:{MANUFACTURING:"生产财务", COMMERCIAL:"商务财务", LOGISTICS:"物流财务"},
  payStatus:{PENDING:"未付款", PARTIAL:"部分付款", PAID:"已付清"},
  bonusStatus:{PROPOSED:"已提议", APPROVED:"已批准", PAID:"已支付"},
  journeyStops:["备货与报价","客户批准(Procedure Order)","卡车运至港口","港口(单证与清关)","交付客户"],
  shippingMethods:{SEA_LCL:"海运拼箱(LCL)", SEA_FCL:"海运整箱(FCL)", AIR_EXPRESS:"空运快件", AIR_REGULAR:"空运普通货"},
  currencies:{USD:"美元(USD)", CNY:"人民币(RMB/CNY)", LYD:"利比亚第纳尔(LYD)"},
  ui:{
    ordersHeading:"订单", newOrderBtn:"+ 新建订单", noOrdersYet:"暂无订单。",
    orderNotFound:"未找到该订单。", backToOrders:"← 返回订单列表",
    newOrderFormTitle:"新订单 — 客户来电登记",
    customerName:"客户/公司名称 *", contactPerson:"联系人", phone:"电话号码", email:"电子邮箱",
    goodsDescription:"货物描述", quantity:"数量", unit:"单位", incotermRequired:"国际贸易术语(Incoterm) *",
    exWorksPriceLabel:"工厂交货价(EX WORK)", currency:"货币", createOrder:"创建订单", cancel:"取消",
    manualOverrideSuffix:"(手动覆盖)", exworkPill:"工厂交货价: ", shippingPill:"运费: ",
    journeyTitle:"货运路线图", journeyNotStarted:"货运尚未开始 — 等待流程单(Procedure Order)",
    statusColorTitle:"状态颜色",
    manualOverrideAppliedTemplate:"已由 {by} 手动覆盖为「{color}」{reason}",
    reasonSuffixTemplate:" — 原因:{reason}",
    revertToAuto:"恢复为自动", forceColorLabel:"手动指定颜色", reasonOptional:"原因(可选)", applyOverride:"应用覆盖",
    stagesTitle:"工作流程阶段", dueDatePrefix:" · 截止日期:",
    shippingPriceLabel:"运费", saveShippingPrice:"保存运费",
    bookingTypeLabel:"运输方式", carrierLabel:"承运人", referenceLabel:"参考号(分提单、航次号等)", saveBooking:"保存订舱信息",
    materialTypeLabel:"货物/物料类型", clearanceNotesLabel:"清关流程备注", approveClearance:"批准清关并标记完成",
    dueDateLabel:"截止日期", saveDueDate:"保存截止日期", markDone:"标记完成",
    documentsTitle:"单证", issued:"已签发", draft:"草稿", viewPrint:"查看/打印", issue:"签发",
    bonusTitle:"奖金备注 — 内部绩效激励(散杂货BB)", bonusHint:"仅供内部员工记录 — 不会显示在任何客户文件中。",
    noNotesYet:"暂无备注", descriptionLabel:"描述", amountOptional:"金额(可选)", addNote:"添加备注",
    approve:"批准", recordPayment:"登记支付",
    expertTitle:"专业货运专家", noExpertYet:"尚未指派专家", expertNameLabel:"专家姓名", contactMethod:"联系方式", saveAssignment:"保存指派",
    accountsTitle:"账务", noInvoiceRef:"无发票编号", noAccountsYet:"暂无账务记录",
    invoiceRefLabel:"发票编号", amountLabel:"金额", paymentStatusLabel:"付款状态", addRecord:"添加记录",
    treasuryTitle:"资金", inbound:"收入", outbound:"支出", noTreasuryYet:"暂无资金往来",
    directionLabel:"方向", addTransaction:"添加交易",
    incotermsRefTitle:"2020国际贸易术语解释通则与责任矩阵", termColumn:"术语",
    warehouseHeading:"仓库", noWarehouseAccess:"您没有查看仓库的权限。",
    qtyPrefix:" · 数量:", orderPrefix:" · 订单:", stored:"已入库", released:"已出库", releaseBtn:"出库",
    noGoodsStored:"暂无入库货物", noOrderOption:"不关联订单", addToWarehouse:"添加入库",
    settingsHeading:"系统设置", noSettingsAccess:"您没有访问设置的权限。",
    fsAutoSaveTitle:"自动保存到设备文件夹", fsAutoSaveDesc:"将系统连接到您设备上的一个文件夹(例如「Hamouda」文件夹)——每个客户和订单的数据在创建或修改时会自动保存到该文件夹内的一个文件中,按订单号索引,无需手动下载。",
    fsAutoSaveNote:"这是浏览器之外的额外永久记录——不能替代下方的完整备份。",
    notifTitle:"截关日期临近提醒", notifDesc:"当订单截关日期临近或已过期时,在您设备屏幕上立即提醒——在您决定开通WhatsApp Business之前的快速替代方案。",
    notifNote:"只要系统在您设备上保持打开(即使在后台)就会生效——如果应用完全关闭则无法送达提醒,这点与WhatsApp不同。",
    notifNotSupported:"您的浏览器不支持桌面通知。", notifNotSupportedShort:"不支持",
    notifDeniedNote:"您之前在浏览器设置中拒绝了通知权限——需要从网站设置中手动重新启用。", notifDeniedShort:"已拒绝",
    notifEnableBtn:"启用提醒", notifDisableBtn:"关闭提醒",
    notifEnabledShort:"已启用", notifDisabledShort:"未启用",
    notifEnabled:"提醒已成功启用。", notifDenied:"未获得通知权限。",
    notifCutoffPassedTitle:"⚠ 截关日期已过!", notifCutoffSoonTitle:"⏰ 截关日期临近",
    notifQuickOnTitle:"截关提醒已开启 — 点击关闭", notifQuickOffTitle:"截关提醒已关闭 — 点击开启",
    notifQuickOnToast:"提醒已开启 — 会一直保持开启,直到您用同一按钮关闭。", notifQuickOffToast:"提醒已关闭。",
    fsConnectedShort:"已连接·自动保存中", fsNotConnectedShort:"未连接", fsNeedsPermission:"等待访问权限",
    fsConnectBtn:"选择保存文件夹", fsReconnectBtn:"重新授权", fsDisconnectBtn:"断开连接",
    fsNotSupported:"您的浏览器不支持自动保存到磁盘(适用于桌面版Chrome或Edge)。",
    fsConnected:"已连接——自动保存已启用。", fsConnectFailed:"无法连接到该文件夹。",
    fsLastSyncTemplate:"上次自动保存: {date}",
    backupTitle:"数据备份", backupDesc:"数据集中保存在系统服务器上，由所有部门共享。您可以下载完整备份或导入之前的备份（导入会替换服务器数据，需要管理员权限）。",
    exportBackupBtn:"导出备份", importBackupBtn:"导入备份",
    backupNote:"同时建议定期复制服务器上的数据库文件 (data/hamouda.db) 和附件文件夹 (data/uploads)。",
    backupExportFailedAlert:"导出备份失败，请重试。",
    backupImportInvalidAlert:"所选文件不是本系统的有效备份文件。",
    backupImportConfirmWarning:"导入操作将用所选文件的内容替换本设备上的所有当前数据，且无法撤销。是否继续？",
    backupImportSuccessAlert:"备份导入成功。",
    currentStageLabel:"当前阶段",
    assistantTitle:"حمودة助手", assistantSubtitle:"询问任何订单或货运状态",
    assistantPlaceholder:"例如: ORD-0012订单在哪?", assistantSend:"发送", close:"关闭",
    assistantWelcome:"你好 👋 我可以按订单号回答任何订单情况,或给你现成清单(延误、接近截关、已完成、危险品)。试试看。",
    assistantNotFoundTemplate:"未找到编号为{no}的订单,请确认编号后重试。",
    assistantLateIntroTemplate:"找到{count}个延误订单:", assistantLateIntroEmpty:"目前没有延误订单。",
    assistantCutoffIntroTemplate:"{count}个订单接近截关日期:", assistantCutoffIntroEmpty:"目前没有接近截关的订单。",
    assistantDoneIntroTemplate:"您有{count}个已完成订单:", assistantDoneIntroEmpty:"暂无已完成订单。",
    assistantDgIntroTemplate:"{count}个订单标记为危险品:", assistantDgIntroEmpty:"目前没有危险品订单。",
    assistantCustomerIntroTemplate:"找到{count}个匹配订单:",
    assistantCountAnswerTemplate:"您共有{count}个订单。",
    assistantGreeting:"你好!问我任何订单信息,或告诉我你想了解什么。",
    assistantFallback:"我没太明白 🤔 试试输入订单号(如ORD-0012),或询问:延误订单、接近截关的订单、已完成订单、危险品。",
    assistantMoreSuffixTemplate:"...还有{count}个",
    assistantSuggestLate:"延误订单", assistantSuggestCutoff:"接近截关", assistantSuggestDone:"已完成",
    servicesCostsTitle:"服务费用(Services Costs)", servicesCostsDesc:"物流部据此汇总计算发给客户的完整报价的费用明细。",
    otherServicesNoteLabel:"附加服务说明(Others)", otherServicesNotePlaceholder:"例如:特殊包装、额外人工卸货...",
    servicesCostsSurchargeNote:"此订单包含需要在运费基础上加收附加费的货物 — 请根据货物性质为每一项设置合适的金额。",
    optionalSuffix:"(可选)", saveServicesCostsBtn:"保存服务费用", servicesCostsTotalLabel:"总计:",
    servicesCostsAutoFillNote:"这些费用项的总和会自动计算，并作为完整运费用于工作流程阶段和最终发票。",
    thresholdTitle:"货运状态颜色", thresholdDesc:"截止日期前显示黄色标记的天数。",
    daysLabel:"天数", save:"保存",
    auditLogTitle:"审计日志(最近50条)", noAuditYet:"暂无记录",
    printOrderNo:"订单号: ", printDate:"日期: ", printCustomerData:"客户信息",
    printContact:"联系人: ", printPhone:"电话: ", printGoodsData:"货物信息", printQtyPrefix:" — 数量:",
    printTermsData:"交货与运输条款", printShipmentType:"运输方式: ", printCarrier:" · 承运人: ", printReference:" · 参考号: ",
    printPrices:"价格", printExworks:"工厂交货价(EX WORK)", printShipping:"运费", printTotal:"总计",
    printIssuerSig:"出具人签名", printRecipientSig:"收件人签名",
    requiredNameAlert:"客户名称为必填项",
    requiredPhoneAlert:"电话号码为必填项",
    requiredContactAlert:"联系人姓名为必填项", requiredEmailAlert:"电子邮箱为必填项",
    requiredGoodsArAlert:"货物描述(阿拉伯语)为必填项", requiredGoodsEnAlert:"货物描述(英语)为必填项",
    requiredSupplierAddrAlert:"中国供应商/工厂地址为必填项", requiredChinaTrackingAlert:"中国内部跟踪号为必填项",
    requiredPackagesAlert:"件数为必填项", requiredNetWeightAlert:"净重为必填项", requiredGrossWeightAlert:"毛重为必填项",
    requiredDimAlert:"包装尺寸(长×宽×高)均为必填项", requiredLaydaysAlert:"货物备妥日期为必填项",
    requiredCancellingAlert:"订单截止/取消日期为必填项", requiredExwAlert:"工厂出厂单价为必填项",
    formIncompleteNote:"此表单中的所有字段均为必填项 — 未全部填写前无法提交订单。",
    orderInfoTitle:"订单信息",
    sectionBasicInfo:"客户与订单基本信息", sectionCargoSupplier:"货物与供应商信息",
    sectionLogisticsSpecs:"物流与规格信息", sectionShippingTerms:"运输条款与日期(LAYCAN)", sectionFinancials:"财务与价格",
    phoneRequired:"电话号码(含国家代码) *",
    orderRefLabel:"订单编号/参考号", orderRefAutoNote:"保存后自动生成",
    goodsDescriptionArLabel:"货物描述(阿拉伯语)", goodsDescriptionEnLabel:"货物描述(英语)",
    hsCodeLabel:"海关编码HS Code(可选)",
    supplierAddressLabel:"中国供应商/工厂地址", chinaTrackingLabel:"中国国内跟踪单号",
    packagesCountLabel:"件数/箱数", netWeightLabel:"净重(kg)", grossWeightLabel:"毛重(kg)",
    dimensionsLabel:"尺寸(长×宽×高,cm)", dimLPlaceholder:"长", dimWPlaceholder:"宽", dimHPlaceholder:"高",
    cbmLabel:"总体积CBM(自动计算)", cbmUnit:"立方米",
    shippingMethodLabel:"运输方式",
    laydaysStartLabel:"货物备妥日期(Laydays)", cancellingDateLabel:"订单截止/取消日期(Cancelling Date)",
    exwPriceLabel:"工厂出厂单价(EXW)", currencySelectLabel:"采购货币", orderTypeLabel:"订单类型/负责部门",
    vatApplicableLabel:"工厂最终发票是否包含增值税(VAT)?", vatAmountLabel:"增值税(VAT)金额",
    sectionSpecialCargo:"货物特殊要求",
    isDangerousGoodsLabel:"该货物是否为危险品?(Dangerous Goods)", msdsNumberLabel:"安全数据表编号/参考号(MSDS)",
    isSpecialCargoLabel:"是否为需特殊处理的货物?(Special Cargo)", specialCargoNoteLabel:"请描述该特殊货物的性质及要求",
    needsReeferLabel:"该货物是否需要冷藏?(Reefer)", reeferTempLabel:"所需温度 (°C)",
    yesOption:"是", noOption:"否",
    dgBadge:"危险品", specialBadge:"特殊货物", reeferBadge:"冷藏",
    cutOffSoonKpi:"截关临近",
    dgDeclarationTitle:"危险品申报 — DANGEROUS GOODS DECLARATION",
    dgDeclarationNote:"本批货物含有已分类的危险物质。MSDS编号/参考号:",
    specialCargoDeclarationTitle:"需特殊处理的货物 — SPECIAL CARGO",
    reeferDeclarationTitle:"冷藏货物 — REEFER CARGO",
    reeferDeclarationNote:"运输所需温度:",
    msdsRequiredAlert:"该货物已标记为危险品 — 必须填写MSDS编号/参考号。",
    specialCargoNoteRequiredAlert:"该货物已标记为特殊货物 — 必须填写其要求说明。",
    reeferTempRequiredAlert:"该货物需要冷藏 — 必须填写所需温度。",
    vatAmountRequiredAlert:"已标记包含增值税 — 必须填写增值税金额。",
    printPackagesPrefix:" — 件数:", printNetWeightPrefix:" — 净重:", printGrossWeightPrefix:" — 毛重:",
    printCbmPrefix:" — 体积:", printHsCodePrefix:" — HS编码:",
    blSectionTitle:"House提单信息 (House Bill of Lading)",
    blDocTypeLabel:"货运单据类型", blDocTypeHBL:"分提单 (House B/L)", blDocTypeCWB:"电子提单 (Cargo Waybill - CWB)",
    blDocTypeCwbNote:"电子提单无需纸质正本或背书 — 收货人凭身份证明即可在到货时直接提货。",
    blShipperNameLabel:"发货人名称(工厂/供应商)", blShipperAddressNote:"地址: {address}",
    blConsigneeNameLabel:"收货人名称", blConsigneeAddressLabel:"收货人地址",
    blNotifyNameLabel:"被通知人名称", blNotifyAddressLabel:"被通知人地址",
    blContainerSealLabel:"集装箱号/封条号", blMarksNosLabel:"唛头及件号",
    blPackageKindLabel:"包装类型", blPackageKindPlaceholder:"例如: CTNS",
    blVesselNameLabel:"船名", blVoyageNoLabel:"航次号",
    blVesselEtaLabel:"船舶预计到港日期(Vessel ETA)",
    blCutOffLabel:"截关日期(Cut-off,货物须到港)", blCutOffAutoNote:"自动计算:船舶预计到港日期前3天。",
    blCutOffPassedWarning:"提醒: 截关日期已过,货物尚未到港!",
    blCutOffApproachingWarning:"提醒: 截关日期临近 — 货物须在此之前到港。",
    blVgmSectionTitle:"核定总重量(VGM)",
    blVgmWeightLabel:"核定总重量 VGM (公斤)", blVgmVerifiedByLabel:"核实方/港口", blVgmDateLabel:"核实日期",
    blVgmMissingNote:"尚未收到港口提供的VGM重量 — 提单签发前须填写。",
    blVgmNotYetIssuedAlert:"在填写港口核定总重量(VGM)之前,无法签署并签发提单。",
    blPortLoadingLabel:"装货港", blPortDischargeLabel:"卸货港",
    blFreightPayableLabel:"运费支付方式", blFreightPrepaid:"预付 (PREPAID)", blFreightCollect:"到付 (COLLECT)",
    blNumberLabel:"提单号 (B/L No.)", blPlaceOfIssueLabel:"签发地点",
    blIssuedByLabel:"签发人", blIssueDateLabel:"签发日期", saveBLBtn:"保存提单信息",
    blPaymentHeldShort:"扣留 - 待付款", blPaymentClearedShort:"已确认付款",
    blPaymentHeldNote:"该货运为预付款(PREPAID)，物流财务尚未记录全额付款 — 财务部门在确认付款前不能签发提单或放行货物。",
    blPaymentClearedNote:"物流财务已确认付款 — 财务部门可以签发提单并放行货物。",
    blIssueBlockedAlert:"无法签发提单：预付款尚未结清。请先在财务(物流财务)中确认付款。",
    blIssuedShort:"已签发", blIssuedNote:"提单已由财务部门正式签发 — 物流部门现在可以继续办理货物放行手续。",
    blIssuedCodeLabel:"验证码", blIssuedByRoleLabel:"签发人",
    blLockedAfterIssueNote:"该提单已由财务部门批准并签署 — 运输信息现已锁定，无法再编辑。",
    procOrderSeeCardNote:"此阶段通过上方的「客户确认最终发票」卡片完成。",
    customerConfirmationTitle:"客户确认最终发票",
    customerConfirmedShort:"已确认", awaitingCustomerConfirmation:"等待客户确认", customerInvoiceNotSentShort:"尚未发送",
    awaitingLogisticsAckShort:"等待物流接收", logisticsAckedShort:"物流已接收",
    logisticsAckBtn:"接收批准并继续发货手续",
    logisticsAckedNoteTemplate:"物流部门已接收此批准并继续办理发货手续 — 操作人：{by} — 日期：{date}",
    awaitingLogisticsAckNote:"已记录客户批准，等待物流部门接收以继续办理发货手续。",
    awaitingDeptConfirmationNote:"等待{dept}在发送发票后输入客户的确认码。",
    awaitingDeptInvoiceNote:"等待{dept}先签发最终发票并发送给客户。",
    customerConfirmationExplainerNote:"此卡片为内部流程记录：由{dept}生成带有唯一确认码的最终发票并发送给客户，随后由该部门输入客户回复的确认码(通过电话、邮件或WhatsApp)以记录其批准。之后物流部门接收此确认以继续办理发货手续。这是一项流程记录和凭证，并非客户在系统上的直接电子签名。",
    generateCustomerInvoiceBtn:"生成并发送最终发票给客户", regenerateInvoiceBtn:"重新生成发票(新确认码)",
    invoiceSentNoteTemplate:"发票已于{date}由{by}生成并发送给客户。",
    enterConfirmCodeLabel:"客户回复的确认码", enterConfirmCodePlaceholder:"例如: CNF-XXXXXX",
    recordCustomerConfirmationBtn:"记录客户确认", confirmCodeMismatchAlert:"输入的确认码与发送给客户的发票确认码不匹配，请核实后重试。",
    customerConfirmedNote:"已记录客户对最终发票的批准 — 物流部门现在可以继续订舱安排。",
    confirmCodeLabel:"确认码", confirmedByLabel:"记录人",
    finalInvoiceCodeInstructions:"请核对本发票详情，如同意，请通过电话、邮件或WhatsApp回复此确认码以确认批准并继续发货流程 — ORDER CONFIRMATION CODE",
    blNumberFilledByFinanceNote:"由财务部门在签署并签发提单时填写。",
    blNumberPlaceholder:"请输入已签发的提单号", blSignAndIssueBtn:"签署并签发提单",
    blSignAndIssueExplainerNote:"在此输入提单号并点击「签署并签发」即视为财务部门对提单的正式签署 — 此后所有货运数据将被锁定，并通知物流部门可以继续办理放货手续。",
    blAwaitingLogisticsDataNote:"等待物流部门先填写货运详情，财务部门才能签署并签发提单。",
    blNumberRequiredAlert:"请在签署并签发前输入提单号。",
    blSeeCardNote:"已就绪，等待财务签署 — 请查看上方的提单卡片"
  }
}
};
/* ============================================================
   مفاتيح الواجهة المضافة (بحث، تصفية، تبويبات، تنبيهات، سمة)
   تُدمج داخل I18N أعلاه حتى تبقى الترجمات الثلاث في مكان واحد
   ============================================================ */
var I18N_EXTRA = {
ar:{
  kpi:{total:"إجمالي الطلبيات", active:"شحنات نشطة", late:"متأخرة عن الموعد", completed:"مكتملة"},
  tabs:{overview:"نظرة عامة", workflow:"سير العمل", docs:"المستندات", finance:"المالية", ref:"مراجع"},
  toast:{
    saved:"تم الحفظ", stageDone:"تم تعليم المرحلة كمكتملة", orderCreated:"تم إنشاء الطلبية {no}",
    invoiceGenerated:"تم إصدار الفاتورة — كود التأكيد: {code}", confirmRecorded:"تم تسجيل تأكيد الزبون",
    logisticsAcked:"تم استلام الموافقة في اللوجستيك", blSaved:"تم حفظ بيانات البوليصة",
    blIssued:"تم توقيع وإصدار البوليصة", docIssued:"تم إصدار المستند", customsCleared:"تم اعتماد التخليص الجمركي",
    backupExported:"تم تنزيل النسخة الاحتياطية", overrideApplied:"تم تطبيق التجاوز اليدوي",
    reverted:"رجعت الحالة إلى التلوين التلقائي", entryAdded:"تمت الإضافة إلى المخزن", entryReleased:"تم صرف البضاعة",
    recordAdded:"تمت إضافة السجل", bonusAdded:"تمت إضافة الملاحظة", bonusApproved:"تم اعتماد الحافز", bonusPaid:"تم تسجيل الصرف",
    thresholdSaved:"تم حفظ الإعداد", priceSaved:"تم حفظ السعر", dueSaved:"تم حفظ الموعد النهائي",
    demoSeeded:"تم توليد {n} طلبيات تجريبية", demoRemoved:"تم حذف {n} طلبيات تجريبية"
  },
  modal:{confirmTitle:"تأكيد الإجراء", confirm:"نعم، تابع", cancel:"إلغاء"},
  ui:{
    searchPlaceholder:"ابحث برقم الطلبية، اسم العميل، وصف البضاعة، رقم التتبع...",
    filterAll:"الكل", filterPreShipment:"قبل الشحن", filterActive:"الشحن نشط", filterCompleted:"مكتملة", filterLate:"متأخرة",
    resultCountTemplate:"عرض {shown} من {total} طلبية", noResults:"لا توجد طلبيات مطابقة لبحثك.", clearFilters:"مسح التصفية",
    progressTemplate:"{done}/{total} مرحلة",
    themeToggleLabel:"تبديل الوضع الليلي/النهاري", scrollHint:"مرّر أفقيًا لعرض باقي المحطات",
    loginDemoNotice:"البيانات محفوظة على خادم المنظومة. غيّر كلمة المرور الافتراضية بعد أول دخول من صفحة الإعدادات.",
    loginQuickSelectHint:"وضع التجربة: يملأ اسم المستخدم (وكلمة المرور الافتراضية إن كانت مفعّلة على الخادم).",
    tabEmptyNote:"لا توجد بيانات في هذا القسم ضمن صلاحياتك الحالية.",
    demoDataTitle:"بيانات تجريبية للتجربة",
    demoDataDesc:"يضيف 4 طلبيات جاهزة تغطي كل الحالات: طلبية متأخرة (أحمر)، طلبية اقترب موعدها (أصفر)، طلبية قبل الشحن (رمادي)، وطلبية مكتملة (أخضر) — مع حجوزات وبوليصة شحن وتكاليف خدمات وحسابات وحركات خزينة وبضاعة في المخزن.",
    seedDemoBtn:"توليد 4 طلبيات تجريبية",
    demoDataNote:"تُضاف إلى بياناتك الحالية ولا تحذف شيئًا. لإزالتها لاحقًا استورد نسخة احتياطية سابقة.",
    demoDataConfirm:"سيتم إنشاء 4 طلبيات تجريبية وإضافتها إلى قائمة الطلبيات الحالية. هل تريد المتابعة؟",
    warehouseAllowedRoles:"الأدوار التي تستطيع عرض المخازن:",
    heroHeadline1:"لكل طلبية مهمة.",
    heroHeadline2:"ولكل مهمة تحت عينك.",
    heroLede:"مساحة واحدة تربط التصنيع والتجارة واللوجستيك والحسابات والخزينة — من مكالمة العميل الأولى حتى توقيع بوليصة الشحن وتسليم البضاعة.",
    heroStatRoles:"دورًا وظيفيًا", heroStatStages:"مراحل لكل طلبية", heroStatIncoterms:"مصطلح Incoterm", heroStatLangs:"لغات واجهة",
    breadcrumbWorkspace:"مساحة العمل",
    ordersSubtitle:"تتبّع كل شحنة من التجهيز حتى التسليم",
    warehouseSubtitle:"البضائع المخزّنة والمصروفة وربطها بالطلبيات",
    settingsSubtitle:"النسخ الاحتياطي وإعدادات التلوين وسجل التدقيق",
    incotermsSubtitle:"مرجع مسؤوليات البائع والمشتري في التسليم",
    heroPanelTitle:"نظرة العمليات",
    heroPanelEmpty:"ابدأ بإنشاء طلبية أو توليد بيانات تجريبية من الإعدادات.",
    heroOldestLate:"أقدم طلبية متأخرة:",
    heroNextDue:"أقرب موعد قادم:",
    heroAllClear:"لا توجد طلبيات متأخرة — كل المواعيد ضمن الجدول.",
    heroOpenIt:"افتحها",
    demoBarText:"بيانات افتراضية للتجربة فقط",
    demoBarRemove:"حذف البيانات التجريبية",
    demoRemoveConfirm:"سيتم حذف كل الطلبيات التجريبية وسجلات المخزن المرتبطة بها. بياناتك الحقيقية لن تُمس. هل تريد المتابعة؟"
  }
},
en:{
  kpi:{total:"Total orders", active:"Active shipments", late:"Past due", completed:"Completed"},
  tabs:{overview:"Overview", workflow:"Workflow", docs:"Documents", finance:"Finance", ref:"Reference"},
  toast:{
    saved:"Saved", stageDone:"Stage marked complete", orderCreated:"Order {no} created",
    invoiceGenerated:"Invoice issued — confirmation code: {code}", confirmRecorded:"Customer confirmation recorded",
    logisticsAcked:"Confirmation acknowledged by logistics", blSaved:"Bill of lading data saved",
    blIssued:"Bill of lading signed and issued", docIssued:"Document issued", customsCleared:"Customs clearance approved",
    backupExported:"Backup downloaded", overrideApplied:"Manual override applied",
    reverted:"Reverted to automatic status", entryAdded:"Added to warehouse", entryReleased:"Goods released",
    recordAdded:"Record added", bonusAdded:"Note added", bonusApproved:"Bonus approved", bonusPaid:"Payment recorded",
    thresholdSaved:"Setting saved", priceSaved:"Price saved", dueSaved:"Due date saved",
    demoSeeded:"{n} demo orders generated", demoRemoved:"{n} demo orders deleted"
  },
  modal:{confirmTitle:"Confirm action", confirm:"Yes, continue", cancel:"Cancel"},
  ui:{
    searchPlaceholder:"Search order no., customer, goods, tracking no...",
    filterAll:"All", filterPreShipment:"Pre-shipment", filterActive:"Active", filterCompleted:"Completed", filterLate:"Past due",
    resultCountTemplate:"Showing {shown} of {total} orders", noResults:"No orders match your search.", clearFilters:"Clear filters",
    progressTemplate:"{done}/{total} stages",
    themeToggleLabel:"Toggle dark/light mode", scrollHint:"Scroll sideways to see remaining stops",
    loginDemoNotice:"Data is stored on the system server. Change the default password after your first login (Settings).",
    loginQuickSelectHint:"Test mode: fills the username (and the default password if the server allows it).",
    tabEmptyNote:"Nothing in this section is available to your current role.",
    demoDataTitle:"Demo data",
    demoDataDesc:"Adds 4 ready-made orders covering every state: past due (red), approaching deadline (yellow), pre-shipment (grey) and completed (green) — with bookings, a bill of lading, service costs, accounts, treasury movements and warehouse entries.",
    seedDemoBtn:"Generate 4 demo orders",
    demoDataNote:"They are added to your existing data and delete nothing. To remove them later, import an earlier backup.",
    demoDataConfirm:"This will create 4 demo orders and add them to your current order list. Continue?",
    warehouseAllowedRoles:"Roles that can view warehouses:",
    heroHeadline1:"Every order has a route.",
    heroHeadline2:"Every route stays in sight.",
    heroLede:"One workspace connecting manufacturing, commercial, logistics, accounts and treasury — from the first customer call to the signed bill of lading and final delivery.",
    heroStatRoles:"job roles", heroStatStages:"stages per order", heroStatIncoterms:"Incoterms", heroStatLangs:"interface languages",
    breadcrumbWorkspace:"Workspace",
    ordersSubtitle:"Track every shipment from preparation to delivery",
    warehouseSubtitle:"Stored and released goods linked to their orders",
    settingsSubtitle:"Backup, status-colour settings and the audit log",
    incotermsSubtitle:"Seller and buyer responsibilities at a glance",
    heroPanelTitle:"Operations overview",
    heroPanelEmpty:"Start by creating an order, or generate demo data from Settings.",
    heroOldestLate:"Oldest overdue order:",
    heroNextDue:"Next deadline:",
    heroAllClear:"No overdue orders — every deadline is on schedule.",
    heroOpenIt:"Open it",
    demoBarText:"Demo data — for trial use only",
    demoBarRemove:"Delete demo data",
    demoRemoveConfirm:"All demo orders and their warehouse entries will be deleted. Your real data is untouched. Continue?"
  }
},
zh:{
  kpi:{total:"订单总数", active:"运输中", late:"已逾期", completed:"已完成"},
  tabs:{overview:"概览", workflow:"工作流程", docs:"单证", finance:"财务", ref:"参考"},
  toast:{
    saved:"已保存", stageDone:"阶段已标记为完成", orderCreated:"订单 {no} 已创建",
    invoiceGenerated:"发票已签发 — 确认码：{code}", confirmRecorded:"已记录客户确认",
    logisticsAcked:"物流部门已接收确认", blSaved:"提单数据已保存",
    blIssued:"提单已签署并签发", docIssued:"单证已签发", customsCleared:"清关已批准",
    backupExported:"备份已下载", overrideApplied:"已应用手动覆盖",
    reverted:"已恢复为自动状态", entryAdded:"已入库", entryReleased:"货物已放行",
    recordAdded:"记录已添加", bonusAdded:"备注已添加", bonusApproved:"奖金已批准", bonusPaid:"付款已记录",
    thresholdSaved:"设置已保存", priceSaved:"价格已保存", dueSaved:"截止日期已保存",
    demoSeeded:"已生成 {n} 个演示订单", demoRemoved:"已删除 {n} 个演示订单"
  },
  modal:{confirmTitle:"确认操作", confirm:"是，继续", cancel:"取消"},
  ui:{
    searchPlaceholder:"搜索订单号、客户、货物、追踪号…",
    filterAll:"全部", filterPreShipment:"装运前", filterActive:"运输中", filterCompleted:"已完成", filterLate:"已逾期",
    resultCountTemplate:"显示 {total} 个订单中的 {shown} 个", noResults:"没有符合搜索条件的订单。", clearFilters:"清除筛选",
    progressTemplate:"{done}/{total} 阶段",
    themeToggleLabel:"切换深色/浅色模式", scrollHint:"横向滚动查看其余节点",
    loginDemoNotice:"数据保存在系统服务器上。首次登录后请在设置中修改默认密码。",
    loginQuickSelectHint:"测试模式：自动填充用户名（若服务器允许，同时填充默认密码）。",
    tabEmptyNote:"您当前的角色在此部分没有可用内容。",
    demoDataTitle:"演示数据",
    demoDataDesc:"添加 4 个涵盖所有状态的订单：已逾期（红色）、临近截止（黄色）、装运前（灰色）和已完成（绿色） — 包含订舱、提单、服务费用、账目、资金流水和仓库记录。",
    seedDemoBtn:"生成 4 个演示订单",
    demoDataNote:"这些数据会添加到现有数据中，不会删除任何内容。如需移除，请导入之前的备份。",
    demoDataConfirm:"将创建 4 个演示订单并添加到当前订单列表中。是否继续？",
    warehouseAllowedRoles:"可查看仓库的角色：",
    heroHeadline1:"每个订单都有航线。",
    heroHeadline2:"每条航线尽在掌握。",
    heroLede:"一个工作空间连接生产、贸易、物流、账务与资金 — 从客户的第一通电话，到提单签署与货物交付。",
    heroStatRoles:"个职能角色", heroStatStages:"个订单阶段", heroStatIncoterms:"个贸易术语", heroStatLangs:"种界面语言",
    breadcrumbWorkspace:"工作区",
    ordersSubtitle:"从备货到交付，跟踪每一票货",
    warehouseSubtitle:"已入库与已放行货物及其关联订单",
    settingsSubtitle:"备份、状态颜色设置与审计日志",
    incotermsSubtitle:"买卖双方交付责任一览",
    heroPanelTitle:"运营概览",
    heroPanelEmpty:"请先创建订单，或从设置中生成演示数据。",
    heroOldestLate:"最早逾期订单：",
    heroNextDue:"最近截止日期：",
    heroAllClear:"没有逾期订单 — 所有期限均按计划进行。",
    heroOpenIt:"打开",
    demoBarText:"演示数据 · 仅供试用",
    demoBarRemove:"删除演示数据",
    demoRemoveConfirm:"将删除所有演示订单及其仓库记录。您的真实数据不受影响。是否继续？"
  }
}
};
(function mergeExtraI18N(){
  Object.keys(I18N_EXTRA).forEach(function(lang){
    var src = I18N_EXTRA[lang], dest = I18N[lang];
    if(!dest) return;
    Object.keys(src).forEach(function(group){
      dest[group] = dest[group] || {};
      Object.keys(src[group]).forEach(function(k){ dest[group][k] = src[group][k]; });
    });
  });
})();

var LANG_KEY = "alamiya-ops-shipping-lang";
function loadLang(){
  try{ var l = localStorage.getItem(LANG_KEY); if(l && I18N[l]) return l; }catch(e){}
  return "ar";
}
function saveLang(l){ try{ localStorage.setItem(LANG_KEY, l); }catch(e){} }
function t(path){
  var dict = I18N[state.lang] || I18N.ar;
  var v = path.split(".").reduce(function(o,k){ return (o && o[k]!==undefined) ? o[k] : undefined; }, dict);
  if(v===undefined){ v = path.split(".").reduce(function(o,k){ return (o && o[k]!==undefined) ? o[k] : undefined; }, I18N.ar); }
  return v!==undefined ? v : path;
}
function tpl(str, vars){ return str.replace(/\{(\w+)\}/g, function(_,k){ return (vars[k]!==undefined && vars[k]!==null) ? vars[k] : ""; }); }
function applyDocumentLang(){
  document.documentElement.lang = t("htmlLang");
  document.documentElement.dir = t("dirName");
  document.title = t("appTitle");
}

/* ============================================================
   السمة (نهاري/ليلي) — اختيار المستخدم يُحفظ ويتقدّم على إعداد الجهاز
   ============================================================ */
var THEME_KEY = "alamiya-ops-shipping-theme";
var SUN_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>';
var MOON_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path></svg>';
function loadTheme(){ try{ var v = localStorage.getItem(THEME_KEY); return (v==="dark"||v==="light") ? v : null; }catch(e){ return null; } }
function systemPrefersDark(){ return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches); }
function effectiveTheme(){ return loadTheme() || (systemPrefersDark() ? "dark" : "light"); }
function applyTheme(){
  var chosen = loadTheme();
  if(chosen) document.documentElement.setAttribute("data-theme", chosen);
  else document.documentElement.removeAttribute("data-theme");
  renderThemeToggles();
}
function toggleTheme(){
  var next = effectiveTheme()==="dark" ? "light" : "dark";
  try{ localStorage.setItem(THEME_KEY, next); }catch(e){}
  applyTheme();
}
function renderThemeToggles(){
  var isDark = effectiveTheme()==="dark";
  ["themeToggle","themeToggleLogin"].forEach(function(id){
    var el = document.getElementById(id);
    if(!el) return;
    el.innerHTML = isDark ? SUN_ICON : MOON_ICON;
    el.title = t("ui.themeToggleLabel");
    el.setAttribute("aria-label", t("ui.themeToggleLabel"));
  });
}

/* ============================================================
   تنبيهات لحظية وحوار تأكيد مصمَّمان داخل النظام
   (بديل عن alert/confirm الأصلية: لا تحجب الصفحة وتتبع هوية النظام)
   ============================================================ */
var TOAST_ICONS = {
  success:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M8 12.5l2.5 2.5L16 9.5"></path></svg>',
  warning:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"></path><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"></path></svg>',
  critical:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M15 9l-6 6M9 9l6 6"></path></svg>',
  info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 11v5M12 8h.01"></path></svg>'
};
function toast(message, kind){
  var wrap = document.getElementById("toastWrap");
  if(!wrap){ return; }
  kind = kind || "success";
  var el = document.createElement("div");
  el.className = "toast " + kind;
  el.innerHTML = (TOAST_ICONS[kind] || TOAST_ICONS.info) + '<span class="toast-msg"></span>';
  el.querySelector(".toast-msg").textContent = message;
  wrap.appendChild(el);
  var timer = setTimeout(dismiss, kind==="critical" ? 6000 : 3600);
  function dismiss(){
    clearTimeout(timer);
    el.classList.add("is-out");
    setTimeout(function(){ if(el.parentNode) el.parentNode.removeChild(el); }, 220);
  }
  el.onclick = dismiss;
}
function confirmDialog(message, onConfirm, opts){
  opts = opts || {};
  var host = document.getElementById("modalHost");
  var lastFocus = document.activeElement;
  var backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = '<div class="modal-card" role="alertdialog" aria-modal="true">'
    + '<h3>' + TOAST_ICONS.warning + '<span class="modal-title"></span></h3>'
    + '<p class="modal-body"></p>'
    + '<div class="modal-actions">'
    + '<button type="button" class="btn" data-modal="cancel"></button>'
    + '<button type="button" class="btn danger" data-modal="ok"></button>'
    + '</div></div>';
  backdrop.querySelector(".modal-title").textContent = opts.title || t("modal.confirmTitle");
  backdrop.querySelector(".modal-body").textContent = message;
  var cancelBtn = backdrop.querySelector('[data-modal="cancel"]');
  var okBtn = backdrop.querySelector('[data-modal="ok"]');
  cancelBtn.textContent = opts.cancelText || t("modal.cancel");
  okBtn.textContent = opts.confirmText || t("modal.confirm");
  function close(){
    document.removeEventListener("keydown", onKey);
    if(backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
    if(lastFocus && lastFocus.focus){ try{ lastFocus.focus(); }catch(e){} }
  }
  function cancel(){ close(); if(opts.onCancel) opts.onCancel(); }
  function onKey(e){
    if(e.key==="Escape"){ cancel(); return; }
    if(e.key==="Tab"){ /* حصر التنقل داخل الحوار */
      var f = [cancelBtn, okBtn];
      var i = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(i + (e.shiftKey ? f.length-1 : 1)) % f.length].focus();
    }
  }
  cancelBtn.onclick = cancel;
  okBtn.onclick = function(){ close(); onConfirm(); };
  backdrop.onclick = function(e){ if(e.target===backdrop) cancel(); };
  document.addEventListener("keydown", onKey);
  host.appendChild(backdrop);
  okBtn.focus();
}

/* ============================================================
   حفظ سياق الواجهة عبر إعادة الرسم
   (كل عملية حفظ تُعيد بناء الصفحة — هذه الدوال تُرجع موضع التمرير
    والتركيز والمؤشر داخل الحقل حتى لا يفقد المستخدم مكانه)
   ============================================================ */
function safeAttr(v){ return String(v||"").replace(/[^A-Za-z0-9_:\-]/g, ""); }
function captureUiContext(){
  var ae = document.activeElement;
  var ctx = {scrollY: window.scrollY || window.pageYOffset || 0, focusId:null, selStart:null, selEnd:null, act:null};
  if(!ae || ae === document.body) return ctx;
  if(ae.id && /^(INPUT|SELECT|TEXTAREA)$/.test(ae.tagName)){
    ctx.focusId = ae.id;
    try{ ctx.selStart = ae.selectionStart; ctx.selEnd = ae.selectionEnd; }catch(e){}
  } else if(ae.getAttribute && ae.getAttribute("data-act")){
    ctx.act = {
      act: ae.getAttribute("data-act"),
      id: ae.getAttribute("data-id") || "",
      stage: ae.getAttribute("data-stage") || "",
      doc: ae.getAttribute("data-doc") || ""
    };
  }
  return ctx;
}
function restoreUiContext(ctx){
  if(!ctx) return;
  var target = null;
  if(ctx.focusId){
    target = document.getElementById(ctx.focusId);
    if(target){
      try{ target.focus({preventScroll:true}); }catch(e){ target.focus(); }
      if(ctx.selStart!==null && target.setSelectionRange){
        try{ target.setSelectionRange(ctx.selStart, ctx.selEnd); }catch(e){}
      }
    }
  } else if(ctx.act){
    var sel = '[data-act="'+safeAttr(ctx.act.act)+'"]';
    if(ctx.act.id) sel += '[data-id="'+safeAttr(ctx.act.id)+'"]';
    if(ctx.act.stage) sel += '[data-stage="'+safeAttr(ctx.act.stage)+'"]';
    if(ctx.act.doc) sel += '[data-doc="'+safeAttr(ctx.act.doc)+'"]';
    try{ target = document.querySelector(sel); }catch(e){ target = null; }
    if(target){ try{ target.focus({preventScroll:true}); }catch(e){} }
  }
  window.scrollTo(0, ctx.scrollY);
}

/* ============================================================
   الثوابت والأدوار والصلاحيات
   ============================================================ */
var ROLES = [
  {key:"manufacturing_staff", dep:"MANUFACTURING"},
  {key:"commercial_staff", dep:"COMMERCIAL"},
  {key:"logistics_team", dep:"LOGISTICS"},
  {key:"finance_team", dep:"FINANCE"},
  {key:"senior_management", dep:"SENIOR_MANAGEMENT"}
];

var PERMISSIONS = {
  manufacturing_staff: ["order:create","manufacturing:edit_stage"],
  commercial_staff: ["order:create","order:record_quote","commercial:edit_stage"],
  /* اللوجستيك (مستخدم واحد): مكاتب الحجز FCL/LCL/BB/الجوي + المستندات + المخازن + خبير الشحن + مدير اللوجستيك */
  logistics_team: ["logistics:edit_booking","logistics:manage_booking_stage","logistics:record_procedure_order","logistics:customs_decision","logistics:mark_delivery","documentation:edit","warehouse:view","warehouse:edit","bonus_note:view","bonus_note:create","bonus_note:approve","expert:assign","order:manual_status_override","bl:release"],
  /* الإدارة المالية (مستخدم واحد = مدير المالية): حسابات التصنيع والتجارة واللوجستيك + الخزينة + إصدار كود البوليصة وتوقيعها */
  finance_team: ["accounts:edit:MANUFACTURING","accounts:edit:COMMERCIAL","accounts:edit:LOGISTICS","treasury:edit","bonus_note:view","bonus_note:mark_paid","finance:manage","bl:issue","customer_payments:edit"],
  /* حمودة (المدير): إشراف كامل + الإعدادات وسجل التدقيق + التسعير الداخلي (التكلفة/VAT/نسبة الربح) — يراه حمودة وحده.
     إصدار البوليصة انتقل لمدير المالية */
  senior_management: ["logistics:customs_decision","logistics:mark_delivery","order:manual_status_override","expert:assign","documentation:edit","warehouse:view","bonus_note:view","system:manage_settings","system:view_audit_log","finance:manage","manufacturing:edit_stage","commercial:edit_stage","pricing:view","pricing:set_profit","customer_payments:view","bl:release"]
};
function can(perm){ var r=state.currentRole; return (PERMISSIONS[r]||[]).indexOf(perm)>-1; }

/* ============================================================
   بيانات الدخول — التحقق الحقيقي يتم على الخادم (Python).
   LOGIN_ACCOUNTS تُملأ من الخادم لقائمة الاختيار السريع (أسماء المستخدمين والأدوار فقط).
   ============================================================ */
var LOGIN_ACCOUNTS = {};
var LOGIN_DEMO_PASSWORD = null;
var __authed = false;
function isAuthed(){ return __authed; }
function setAuthed(v){
  __authed = !!v;
  document.body.classList.toggle("authed", !!v);
}

/* كل طلبية تسلك أحد مسارين منفصلين حسب القسم الذي أنشأها (تجاري = منتج جاهز، تصنيع = تصميم خاص)،
   ثم يلتقي المساران عند تسليم اللوجيستك (بعد تحديد سعر ووسيلة الشحن) وحتى التسليم النهائي. */
var COMMERCIAL_STAGE_KEYS = ["COMMERCIAL_RECEIVE_SPECS","COMMERCIAL_SOURCE_PRICE","COMMERCIAL_SEND_SPECS_TO_LOGISTICS","COMMERCIAL_REQUEST_SHIPPING_PRICE","COMMERCIAL_RECEIVE_SHIPPING_PRICE"];
var MANUFACTURING_STAGE_KEYS = ["MFG_RECEIVE_SPECS","MFG_EXWORKS_PRICE","MFG_SEND_SPECS_TO_LOGISTICS","MFG_REQUEST_SHIPPING_PRICE","MFG_RECEIVE_SHIPPING_PRICE"];
var SHARED_STAGE_KEYS = ["LOGISTICS_PROCEDURE_ORDER","LOGISTICS_BOOKING","DOCUMENTATION_PREPARE","CUSTOMS_CLEARANCE","DELIVERY"];
function stageKeysForOrderType(orderType){
  return (orderType==="COMMERCIAL" ? COMMERCIAL_STAGE_KEYS : MANUFACTURING_STAGE_KEYS).concat(SHARED_STAGE_KEYS);
}
var STAGE_KEYS = MANUFACTURING_STAGE_KEYS.concat(SHARED_STAGE_KEYS); // مرجع عام (تصنيع) — للاستخدامات التي لا ترتبط بطلبية محددة
var STAGE_PERM = {
  COMMERCIAL_QUOTE:"commercial:edit_stage", /* مفتاح قديم متروك للتوافق مع طلبيات أُنشئت قبل هذا التحديث */
  COMMERCIAL_RECEIVE_SPECS:"commercial:edit_stage", COMMERCIAL_SOURCE_PRICE:"commercial:edit_stage",
  COMMERCIAL_SEND_SPECS_TO_LOGISTICS:"commercial:edit_stage", COMMERCIAL_REQUEST_SHIPPING_PRICE:"commercial:edit_stage",
  COMMERCIAL_RECEIVE_SHIPPING_PRICE:"commercial:edit_stage",
  MFG_RECEIVE_SPECS:"manufacturing:edit_stage", MFG_EXWORKS_PRICE:"manufacturing:edit_stage",
  MFG_SEND_SPECS_TO_LOGISTICS:"manufacturing:edit_stage", MFG_REQUEST_SHIPPING_PRICE:"manufacturing:edit_stage",
  MFG_RECEIVE_SHIPPING_PRICE:"manufacturing:edit_stage",
  LOGISTICS_PROCEDURE_ORDER:"logistics:record_procedure_order",
  LOGISTICS_BOOKING:"logistics:manage_booking_stage", DOCUMENTATION_PREPARE:"documentation:edit",
  CUSTOMS_CLEARANCE:"logistics:customs_decision", DELIVERY:"logistics:mark_delivery"
};

var DOCUMENT_TYPES = ["FINAL_INVOICE","PACKING_LIST","CERTIFICATE_OF_ORIGIN","BILL_OF_LADING","CARGO_MANIFEST"];
var BOOKING_TYPE_KEYS = ["FCL","LCL","BB","AIR","REEFER"];
/* بنود تكاليف الخدمات التي يبني عليها اللوجستيك السعر الكامل المُرسل إلى الزبون */
var SERVICES_COST_KEYS = ["inspection","roadTransportOrigin","customsClearingOrigin","stevedoringOrigin","insurance","marineTransport","stevedoringDischarge","customsClearingDestination","roadTransportDestination","dangerousGoodsSurcharge","specialCargoSurcharge","reeferSurcharge","otherServices"];
var SERVICES_COST_OPTIONAL = {inspection:true, insurance:true, otherServices:true};
/* البنود الشرطية: تُعرض فقط إذا كانت الطلبية تحمل الصفة المقابلة (بضاعة خطرة/خاصة/تبريد) — يحددها اللوجستيك لأنها ترفع سعر الشحن */
var SERVICES_COST_CONDITIONAL = {
  dangerousGoodsSurcharge: function(o){ return !!o.isDangerousGoods; },
  specialCargoSurcharge: function(o){ return !!o.isSpecialCargo; },
  reeferSurcharge: function(o){ return !!o.needsReefer; }
};
var SHIPPING_METHOD_KEYS = ["SEA_LCL","SEA_FCL","AIR_EXPRESS","AIR_REGULAR"];
var FORM_INCOTERM_CODES = ["EXW","FOB","CIF","DDP"];
var CURRENCY_KEYS = ["USD","CNY","LYD"];
function computeCBM(l,w,h,count){
  if(!l || !w || !h || !count) return null;
  var v = (l*w*h*count)/1000000;
  return Math.round(v*1000)/1000;
}
var INCOTERM_ELEMENTS = ["INSPECTION","LOCAL_TRANSPORT","CUSTOMS_CLEARING","LOADING_DISCHARGING","SEA_TRANSPORT","INSURANCE"];
var INCOTERM_CODES = ["EXW","FCA","FAS","FOB","CFR","CIF","CPT","CIP","DAP","DPU","DDP"];
var INCOTERM_MATRIX = {
  EXW:{INSPECTION:"BUYER",LOCAL_TRANSPORT:"BUYER",CUSTOMS_CLEARING:"BUYER",LOADING_DISCHARGING:"BUYER",SEA_TRANSPORT:"BUYER",INSURANCE:"BUYER"},
  FCA:{INSPECTION:"SELLER",LOCAL_TRANSPORT:"SELLER",CUSTOMS_CLEARING:"SELLER",LOADING_DISCHARGING:"SELLER",SEA_TRANSPORT:"BUYER",INSURANCE:"BUYER"},
  FAS:{INSPECTION:"SELLER",LOCAL_TRANSPORT:"SELLER",CUSTOMS_CLEARING:"SELLER",LOADING_DISCHARGING:"BUYER",SEA_TRANSPORT:"BUYER",INSURANCE:"BUYER"},
  FOB:{INSPECTION:"SELLER",LOCAL_TRANSPORT:"SELLER",CUSTOMS_CLEARING:"SELLER",LOADING_DISCHARGING:"SELLER",SEA_TRANSPORT:"BUYER",INSURANCE:"BUYER"},
  CFR:{INSPECTION:"SELLER",LOCAL_TRANSPORT:"SELLER",CUSTOMS_CLEARING:"SELLER",LOADING_DISCHARGING:"SELLER",SEA_TRANSPORT:"SELLER",INSURANCE:"BUYER"},
  CIF:{INSPECTION:"SELLER",LOCAL_TRANSPORT:"SELLER",CUSTOMS_CLEARING:"SELLER",LOADING_DISCHARGING:"SELLER",SEA_TRANSPORT:"SELLER",INSURANCE:"SELLER"},
  CPT:{INSPECTION:"SELLER",LOCAL_TRANSPORT:"SELLER",CUSTOMS_CLEARING:"SELLER",LOADING_DISCHARGING:"SELLER",SEA_TRANSPORT:"SELLER",INSURANCE:"BUYER"},
  CIP:{INSPECTION:"SELLER",LOCAL_TRANSPORT:"SELLER",CUSTOMS_CLEARING:"SELLER",LOADING_DISCHARGING:"SELLER",SEA_TRANSPORT:"SELLER",INSURANCE:"SELLER"},
  DAP:{INSPECTION:"SELLER",LOCAL_TRANSPORT:"SELLER",CUSTOMS_CLEARING:"SELLER",LOADING_DISCHARGING:"BUYER",SEA_TRANSPORT:"SELLER",INSURANCE:"BUYER"},
  DPU:{INSPECTION:"SELLER",LOCAL_TRANSPORT:"SELLER",CUSTOMS_CLEARING:"SELLER",LOADING_DISCHARGING:"SELLER",SEA_TRANSPORT:"SELLER",INSURANCE:"BUYER"},
  DDP:{INSPECTION:"SELLER",LOCAL_TRANSPORT:"SELLER",CUSTOMS_CLEARING:"SELLER",LOADING_DISCHARGING:"BUYER",SEA_TRANSPORT:"SELLER",INSURANCE:"BUYER"}
};

var JOURNEY_STOP_COUNT = 5;
var STAGE_TO_STOP = {COMMERCIAL_QUOTE:0,COMMERCIAL_RECEIVE_SPECS:0,COMMERCIAL_SOURCE_PRICE:0,COMMERCIAL_SEND_SPECS_TO_LOGISTICS:0,COMMERCIAL_REQUEST_SHIPPING_PRICE:0,COMMERCIAL_RECEIVE_SHIPPING_PRICE:0,MFG_RECEIVE_SPECS:0,MFG_EXWORKS_PRICE:0,MFG_SEND_SPECS_TO_LOGISTICS:0,MFG_REQUEST_SHIPPING_PRICE:0,MFG_RECEIVE_SHIPPING_PRICE:0,LOGISTICS_PROCEDURE_ORDER:1,LOGISTICS_BOOKING:2,DOCUMENTATION_PREPARE:3,CUSTOMS_CLEARANCE:3,DELIVERY:4};
/* أيقونات خريطة رحلة الطلبية (محطة لكل نقطة في STAGE_TO_STOP أعلاه) */
/* أيقونات SVG بديلة عن الإيموجي — بمعيار تصميم احترافي (لا إيموجي كأيقونات وظيفية، Heroicons/Lucide-style outline) */
function svgIcon(paths, extraClass){
  return '<svg class="inline-ic'+(extraClass?(' '+extraClass):'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+paths+'</svg>';
}
var ICON_WARNING = '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>';
var ICON_PACKAGE = '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73Z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>';
var ICON_SNOWFLAKE = '<line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line><path d="m20 16-4-4 4-4"></path><path d="m4 8 4 4-4 4"></path><path d="m16 4-4 4-4-4"></path><path d="m8 20 4-4 4 4"></path>';
var ICON_CLOCK = '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>';
var ICON_HOURGLASS = '<path d="M6 2h12M6 22h12M6 2c0 5 4 6 6 8-2 2-6 3-6 8M18 2c0 5-4 6-6 8 2 2 6 3 6 8"></path>';
var ICON_CHECK = '<path d="M5 13l4 4L19 7"></path>';

var JOURNEY_ICONS = [
  '<path d="M3 8l9-5 9 5-9 5-9-5z"></path><path d="M3 8v8l9 5 9-5V8"></path><path d="M12 13v8"></path>',
  '<circle cx="12" cy="12" r="9"></circle><path d="M8 12.5l2.5 2.5L16 9.5"></path>',
  '<rect x="1" y="7" width="12" height="9" rx="1"></rect><path d="M13 10h4l4 3.2V16h-8z"></path><circle cx="5.5" cy="18" r="1.6"></circle><circle cx="17" cy="18" r="1.6"></circle>',
  '<circle cx="12" cy="5" r="2"></circle><path d="M12 7v14"></path><path d="M6 13a6 6 0 0 0 12 0"></path><path d="M4 13h4M16 13h4"></path>',
  '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"></path><circle cx="12" cy="9.5" r="2.5"></circle>'
];

/* ============================================================
   الحالة والتخزين المحلي
   ============================================================ */
var STORAGE_KEY = "alamiya-ops-shipping-v1";
var uid = function(){ return "id" + Date.now().toString(36) + Math.random().toString(36).slice(2,8); };
var nowIso = function(){ return new Date().toISOString(); };
function genConfirmationCode(){
  /* نتجنب هنا الأحرف/الأرقام المتشابهة بصريًا (0/O، 1/I/L) لتقليل خطأ الكتابة اليدوية عند تسجيل تأكيد الزبون */
  var alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  var code = "";
  for(var i=0;i<6;i++){ code += alphabet.charAt(Math.floor(Math.random()*alphabet.length)); }
  return "CNF-" + code;
}
function normalizeConfirmCode(s){ return (s||"").toUpperCase().replace(/[^A-Z0-9]/g, "").replace(/^CNF/, ""); }

function defaultState(){
  return {
    currentRole: "senior_management",
    currentUsername: "",
    lang: loadLang(),
    yellowThresholdDays: 3,
    view: {name:"orders", orderId:null, tab:"overview"},
    ordersFilter: {q:"", phase:"ALL"},
    orders: [],
    warehouses: [{id:uid(), name:"المخزن الرئيسي", location:"جدة", entries:[]}],
    auditLog: [],
    orderCounter: 0,
    defaultProfitPct: null,
    finance: finDefault()
  };
}
var state;
function loadState(){
  /* البيانات المشتركة (الطلبيات/المخازن/المالية...) تأتي من الخادم عبر Server.loadAll؛
     هنا نسترجع فقط تفضيلات الواجهة المحلية لهذا الجهاز */
  state = defaultState();
  state.warehouses = [];
  Server.applyPrefs(state);
}
/* بيانات محفوظة من إصدارات سابقة قد تفتقد الحقول الجديدة */
function migrateState(){
  if(!state.view) state.view = {name:"orders", orderId:null, tab:"overview"};
  if(!state.view.tab) state.view.tab = "overview";
  if(!state.ordersFilter) state.ordersFilter = {q:"", phase:"ALL"};
  if(!Array.isArray(state.orders)) state.orders = [];
  if(!Array.isArray(state.auditLog)) state.auditLog = [];
  finEnsure();
  var OLD_ROLE_MAP = {logistics_fcl:"logistics_team", logistics_lcl:"logistics_team", logistics_bb:"logistics_team", logistics_air:"logistics_team", logistics_documentation:"logistics_team", logistics_warehouse:"logistics_team", logistics_expert:"logistics_team", logistics_manager:"logistics_team", accounts_manufacturing:"finance_team", accounts_commercial:"finance_team", accounts_logistics:"finance_team", treasury:"finance_team", system_admin:"senior_management"};
  if(OLD_ROLE_MAP[state.currentRole]) state.currentRole = OLD_ROLE_MAP[state.currentRole];
  if(!PERMISSIONS[state.currentRole]) state.currentRole = "senior_management";
  /* بيانات محفوظة تالفة أو ناقصة كانت تُسقط شاشة المخازن بالكامل */
  if(!Array.isArray(state.warehouses) || state.warehouses.length===0){
    state.warehouses = [{id:uid(), name:"المخزن الرئيسي", location:"جدة", entries:[]}];
  }
  state.warehouses.forEach(function(w){ if(!Array.isArray(w.entries)) w.entries = []; });
  /* طلبيات قديمة محفوظة قبل إضافة بيان الحمولة (Manifest) وخانات البضاعة الخاصة — نكمّلها بقيم افتراضية آمنة */
  state.orders.forEach(function(o){
    if(!Array.isArray(o.documents)) o.documents = [];
    if(!o.documents.some(function(d){ return d.type==="CARGO_MANIFEST"; })){
      o.documents.push({type:"CARGO_MANIFEST", status:"DRAFT", issuedAt:null});
    }
    if(o.isDangerousGoods===undefined) o.isDangerousGoods = false;
    if(o.msdsNumber===undefined) o.msdsNumber = "";
    if(o.isSpecialCargo===undefined) o.isSpecialCargo = false;
    if(o.specialCargoNote===undefined) o.specialCargoNote = "";
    if(o.needsReefer===undefined) o.needsReefer = false;
    if(o.reeferTempC===undefined) o.reeferTempC = "";
    if(o.vatApplicable===undefined) o.vatApplicable = "NO";
    if(o.vatAmount===undefined) o.vatAmount = null;
    if(o.profitPct===undefined) o.profitPct = null;
    if(!Array.isArray(o.customDocs)) o.customDocs = [];
    if(!Array.isArray(o.customerPayments)) o.customerPayments = []; /* لا تحويل تلقائي لسجلات الخزينة القديمة */
    if(!Array.isArray(o.treasuryRecords)) o.treasuryRecords = [];
    if(!o.customsAgents || typeof o.customsAgents!=="object") o.customsAgents = {};
  });
  /* أُلغيت النسبة الافتراضية: الطلبيات اللي كانت ماشية عليها تأخذ نفس النسبة كنسبة خاصة بها (بدون تغيير أي سعر) */
  if(xHas(state.defaultProfitPct)){
    var oldDefault = Number(state.defaultProfitPct);
    state.orders.forEach(function(o){ if(!xHas(o.profitPct)) o.profitPct = oldDefault; });
  }
  state.defaultProfitPct = null;
}
function saveState(){
  Server.savePrefs();
  Server.scheduleSync();
  scheduleDiskSync();
}

/* ============================================================
   الحفظ التلقائي على القرص — سجل دائم للعملاء والطلبيات خارج المتصفح
   يستخدم File System Access API (Chrome/Edge) ليكتب تلقائيًا في مجلد
   يختاره المستخدم مرة واحدة (مثلاً مجلد "حمودة")، فيه ملف واحد يحوي
   كل طلبية مفهرسة برقمها — يتحدّث بنفسه مع كل تغيير، بدون تنزيل يدوي.
   ============================================================ */
var DISK_SYNC_FILENAME = "سجل_الطلبيات_والعملاء.json";
var DISK_SYNC_IDB_NAME = "alamiya-disk-sync";
var diskSyncTimer = null;
var diskSyncHandle = null; /* يُملأ من IndexedDB عند بدء التشغيل إن وُجد اتصال سابق */

function fsSupported(){ return typeof window.showDirectoryPicker === "function"; }

function idbOpen(){
  return new Promise(function(resolve, reject){
    var req = indexedDB.open(DISK_SYNC_IDB_NAME, 1);
    req.onupgradeneeded = function(){ req.result.createObjectStore("handles"); };
    req.onsuccess = function(){ resolve(req.result); };
    req.onerror = function(){ reject(req.error); };
  });
}
function idbSet(key, val){
  return idbOpen().then(function(db){
    return new Promise(function(resolve, reject){
      var tx = db.transaction("handles", "readwrite");
      tx.objectStore("handles").put(val, key);
      tx.oncomplete = function(){ resolve(); };
      tx.onerror = function(){ reject(tx.error); };
    });
  });
}
function idbGet(key){
  return idbOpen().then(function(db){
    return new Promise(function(resolve, reject){
      var tx = db.transaction("handles", "readonly");
      var req = tx.objectStore("handles").get(key);
      req.onsuccess = function(){ resolve(req.result || null); };
      req.onerror = function(){ reject(req.error); };
    });
  });
}
function idbDel(key){
  return idbOpen().then(function(db){
    return new Promise(function(resolve){
      var tx = db.transaction("handles", "readwrite");
      tx.objectStore("handles").delete(key);
      tx.oncomplete = function(){ resolve(); };
    });
  });
}

/* تُستدعى مرة عند تحميل الصفحة لاستعادة الاتصال بمجلد الحفظ إن كان محفوظًا مسبقًا */
function restoreDiskSyncConnection(){
  if(!fsSupported()) return;
  idbGet("dirHandle").then(function(handle){
    if(!handle) return;
    diskSyncHandle = handle;
    state.diskSyncConnected = true;
    /* لا نطلب الإذن تلقائيًا هنا (المتصفح يمنع طلب الإذن دون تفاعل مستخدم) —
       فقط نُعلم الواجهة أن هناك اتصالًا سابقًا، ونطلب الإذن الفعلي عند أول تغيير أو نقرة زر */
  }).catch(function(){});
}

function connectDiskSyncFolder(){
  if(!fsSupported()){ toast(t("ui.fsNotSupported"), "critical"); return; }
  window.showDirectoryPicker({id:"alamiya-ops", mode:"readwrite"}).then(function(handle){
    diskSyncHandle = handle;
    state.diskSyncConnected = true;
    return idbSet("dirHandle", handle);
  }).then(function(){
    return syncOrdersToDisk(true);
  }).then(function(ok){
    if(ok){ toast(t("ui.fsConnected"), "success"); }
    renderMain();
  }).catch(function(e){
    if(e && e.name==="AbortError") return; /* المستخدم ألغى الاختيار */
    toast(t("ui.fsConnectFailed"), "critical");
  });
}

function disconnectDiskSyncFolder(){
  diskSyncHandle = null;
  state.diskSyncConnected = false;
  state.diskSyncLastSync = null;
  idbDel("dirHandle").then(function(){ toast(t("toast.saved"), "success"); renderMain(); });
}

/* تُجدول كتابة الملف بعد توقف قصير عن التعديل (debounce) بدل كتابته مع كل نقرة صغيرة */
function scheduleDiskSync(){
  if(!diskSyncHandle) return;
  if(diskSyncTimer) clearTimeout(diskSyncTimer);
  diskSyncTimer = setTimeout(function(){ syncOrdersToDisk(false); }, 800);
}

function orderDiskRecord(o){
  var bl = o.billOfLading || {};
  return {
    رقم_الطلبية: o.orderNumber,
    العميل: {الاسم:o.customer.name, جهة_الاتصال:o.customer.contactPerson, الهاتف:o.customer.phone, البريد:o.customer.email},
    نوع_الطلبية: o.orderType, المرحلة: o.phase, incoterm: o.incotermCode,
    وصف_البضاعة: o.goodsDescriptionAr || o.goodsDescriptionEn || "",
    بضاعة_خطرة: !!o.isDangerousGoods, بضاعة_خاصة: !!o.isSpecialCargo, تبريد: !!o.needsReefer,
    سعر_EXW: o.exWorksPrice, سعر_الشحن: o.shippingPrice, العملة: o.currency,
    رقم_البوليصة: bl.blNumber || null, اسم_السفينة: bl.vesselName || null,
    رقم_الحجز: (o.booking||{}).bookingNumber || null, تاريخ_الاستلام: (o.booking||{}).pickupDate || null,
    موعد_الكت_اوف: effectiveCutoffDate(o) || null, تاريخ_الشحن: (o.booking||{}).shippingDate || null,
    المستندات_المخصصة: (o.customDocs||[]).map(function(d){ return d.name; }),
    مدفوعات_الزبون: {المدفوع: customerPaidTotal(o), المتبقي: customerRemaining(o), الحالة: customerPayStatus(o)},
    تسليم_البوليصة: blIsCwb(o) ? "CWB" : (blIsReleased(o) ? {سُلّمت_بتاريخ: o.billOfLading.releasedToCustomerAt, المستلم: o.billOfLading.releasedToName} : null),
    تاريخ_الإنشاء: o.createdAt, حالة_مكتملة: o.phase==="COMPLETED"
  };
}

function syncOrdersToDisk(isFirstConnect){
  if(!diskSyncHandle) return Promise.resolve(false);
  return diskSyncHandle.queryPermission({mode:"readwrite"}).then(function(perm){
    if(perm==="granted") return true;
    if(isFirstConnect) return diskSyncHandle.requestPermission({mode:"readwrite"}).then(function(p){ return p==="granted"; });
    return false; /* لا نطلب إذنًا بصمت خارج نقرة مستخدم مباشرة — نترك الحالة "بانتظار الإذن" بالواجهة */
  }).then(function(granted){
    if(!granted){ state.diskSyncNeedsPermission = true; return false; }
    state.diskSyncNeedsPermission = false;
    var records = {};
    state.orders.forEach(function(o){ records[o.orderNumber] = orderDiskRecord(o); });
    var payload = {
      اسم_الملف: DISK_SYNC_FILENAME,
      آخر_تحديث: nowIso(),
      عدد_الطلبيات: state.orders.length,
      الطلبيات: records
    };
    return diskSyncHandle.getFileHandle(DISK_SYNC_FILENAME, {create:true}).then(function(fileHandle){
      return fileHandle.createWritable();
    }).then(function(writable){
      return writable.write(JSON.stringify(payload, null, 2)).then(function(){ return writable.close(); });
    }).then(function(){
      state.diskSyncLastSync = nowIso();
      Server.savePrefs();
      return true;
    });
  }).catch(function(){ return false; });
}

/* ============================================================
   تنبيهات المتصفح لاقتراب موعد الـ Cut-off — بديل فوري لا يحتاج خدمة
   خارجية (على عكس واتساب اللي يحتاج حساب بزنس رسمي + سيرفر دائم).
   تعمل طالما التبويب/التطبيق مفتوح على الجهاز (حتى بالخلفية).
   ============================================================ */
function notificationsSupported(){ return "Notification" in window; }
function notifStatusPillClass(){
  if(!notificationsSupported()) return "neutral";
  if(Notification.permission==="denied") return "critical";
  return state.cutoffNotifEnabled ? "success" : "neutral";
}
function notifStatusLabelKey(){
  if(!notificationsSupported()) return "ui.notifNotSupportedShort";
  if(Notification.permission==="denied") return "ui.notifDeniedShort";
  return state.cutoffNotifEnabled ? "ui.notifEnabledShort" : "ui.notifDisabledShort";
}
function enableCutoffNotif(){
  if(!notificationsSupported()){ toast(t("ui.notifNotSupported"), "critical"); return; }
  Notification.requestPermission().then(function(perm){
    if(perm==="granted"){
      state.cutoffNotifEnabled = true;
      saveState();
      toast(t("ui.notifEnabled"), "success");
      checkCutoffNotifications();
    } else {
      toast(t("ui.notifDenied"), "critical");
    }
    renderMain();
    renderNotifToggle();
  });
}
function disableCutoffNotif(){
  state.cutoffNotifEnabled = false;
  saveState();
  renderMain();
  renderNotifToggle();
}
/* زر سريع بالتوب بار — تشغيل/إيقاف التنبيهات بنقرة وحدة من أي صفحة، بدون المرور بالإعدادات في كل مرة.
   الحالة (مفعّلة/متوقفة) محفوظة تلقائيًا في المتصفح، فتبقى على وضعها بين الجلسات حتى لو ما رجعت تلمسها. */
function toggleCutoffNotifQuick(){
  if(!notificationsSupported()){ toast(t("ui.notifNotSupported"), "critical"); return; }
  if(state.cutoffNotifEnabled){
    disableCutoffNotif();
    toast(t("ui.notifQuickOffToast"), "info");
    return;
  }
  if(Notification.permission==="denied"){ toast(t("ui.notifDeniedNote"), "critical"); return; }
  Notification.requestPermission().then(function(perm){
    if(perm==="granted"){
      state.cutoffNotifEnabled = true;
      saveState();
      checkCutoffNotifications();
      toast(t("ui.notifQuickOnToast"), "success");
    } else {
      toast(t("ui.notifDenied"), "critical");
    }
    renderNotifToggle();
    if(state.view && (state.view.name==="settings")) renderMain();
  });
}
function renderNotifToggle(){
  var btn = document.getElementById("notifToggleBtn");
  if(!btn) return;
  var on = !!state.cutoffNotifEnabled && notificationsSupported() && Notification.permission==="granted";
  btn.classList.toggle("on", on);
  btn.innerHTML = on ? BELL_ICON : BELL_OFF_ICON;
  btn.title = t(on ? "ui.notifQuickOnTitle" : "ui.notifQuickOffTitle");
  btn.setAttribute("aria-label", btn.title);
  btn.onclick = toggleCutoffNotifQuick;
}
/* تفحص كل الطلبيات وترسل تنبيهًا حقيقيًا (مرة واحدة فقط لكل طلبية/حالة/يوم) لأي طلبية اقترب أو فات موعد الـ Cut-off فيها */
function checkCutoffNotifications(){
  if(!notificationsSupported() || Notification.permission!=="granted" || !state.cutoffNotifEnabled) return;
  state.notifiedCutoffKeys = state.notifiedCutoffKeys || {};
  var today = new Date().toISOString().slice(0,10);
  var changed = false;
  /* كل مواعيد الشحن: الاستلام والـ Cut-off والشحن — تنبيه واحد لكل طلبية/موعد/حالة/يوم */
  state.orders.forEach(function(o){
    orderLogAlerts(o).forEach(function(a){
      var key = o.orderNumber + ":" + a.key + ":" + a.status + ":" + today;
      if(state.notifiedCutoffKeys[key]) return;
      try{
        var n = new Notification(tpl(t(a.status==="PASSED" ? "ui.notifPassedTpl" : "ui.notifSoonTpl"), {ms: t("ui.ms_"+a.key)}), {
          body: o.orderNumber + " — " + o.customer.name + " · " + a.date,
          icon: "icon-192.png",
          tag: o.orderNumber + ":" + a.key
        });
        n.onclick = function(){ window.focus(); };
      }catch(e){}
      state.notifiedCutoffKeys[key] = true;
      changed = true;
    });
  });
  if(changed) saveState();
}

function log(entity, entityId, action, diff){
  var entry = {entity:entity, entityId:entityId, action:action, byRole:roleLabel(state.currentRole), byUser:state.currentUsername, at:nowIso(), diff:diff||""};
  state.auditLog.unshift(entry);
  Server.queueAudit(entry);
  if(state.auditLog.length>300) state.auditLog.length=300;
}

/* ============================================================
   منطق الحالة/الألوان
   ============================================================ */
function currentStage(order){
  for(var i=0;i<order.stages.length;i++){ if(order.stages[i].status!=="DONE") return order.stages[i]; }
  return null;
}
function autoColor(order){
  if(order.phase==="PRE_SHIPMENT") return "NEUTRAL";
  if(order.phase==="COMPLETED") return "GREEN";
  var cur = currentStage(order);
  if(!cur || !cur.dueDate) return "NEUTRAL";
  var days = (new Date(cur.dueDate).getTime() - Date.now()) / 86400000;
  if(days<0) return "RED";
  if(days<=state.yellowThresholdDays) return "YELLOW";
  return "GREEN";
}
function displayColor(order){ return order.manualStatusColor || autoColor(order); }
var COLOR_CLASS = {GREEN:"c-green",YELLOW:"c-yellow",RED:"c-red",NEUTRAL:""};
var COLOR_PILL = {GREEN:"success",YELLOW:"warning",RED:"critical",NEUTRAL:"neutral"};

function journeyStopIndex(order){
  if(order.phase==="PRE_SHIPMENT") return null;
  if(order.phase==="COMPLETED") return 3;
  var cur = currentStage(order);
  if(!cur) return 3;
  var s = STAGE_TO_STOP[cur.key];
  return (s===undefined)?null:s;
}
function maybeComplete(order){
  var allDone = order.stages.every(function(s){ return s.status==="DONE"; });
  if(allDone) order.phase = "COMPLETED";
}

/* ============================================================
   إنشاء طلبية جديدة
   ============================================================ */
function newOrder(data){
  state.orderCounter++;
  var order = {
    id: uid(),
    orderNumber: "ORD-" + String(state.orderCounter).padStart(4,"0"),
    customer: {name:data.name, contactPerson:data.contactPerson, phone:data.phone, email:data.email},
    incotermCode: data.incotermCode,
    orderType: data.orderType || "MANUFACTURING",
    phase: "PRE_SHIPMENT",
    procedureOrderReceivedAt: null,
    customerConfirmation: null,
    exWorksPrice: data.exWorksPrice || null,
    shippingPrice: null,
    currency: data.currency || "USD",
    goodsDescriptionAr: data.goodsDescriptionAr || "",
    goodsDescriptionEn: data.goodsDescriptionEn || "",
    hsCode: data.hsCode || "",
    supplierAddressCn: data.supplierAddressCn || "",
    chinaTrackingNo: data.chinaTrackingNo || "",
    packagesCount: data.packagesCount || null,
    netWeightKg: data.netWeightKg || null,
    grossWeightKg: data.grossWeightKg || null,
    dimLengthCm: data.dimLengthCm || null,
    dimWidthCm: data.dimWidthCm || null,
    dimHeightCm: data.dimHeightCm || null,
    cbm: data.cbm || null,
    shippingMethod: data.shippingMethod || null,
    laydaysStart: data.laydaysStart || null,
    cancellingDate: data.cancellingDate || null,
    isDangerousGoods: !!data.isDangerousGoods, msdsNumber: data.msdsNumber || "",
    isSpecialCargo: !!data.isSpecialCargo, specialCargoNote: data.specialCargoNote || "",
    needsReefer: !!data.needsReefer, reeferTempC: data.reeferTempC || "",
    vatApplicable: data.vatApplicable || "NO", vatAmount: data.vatAmount || null,
    profitPct: null, /* نسبة ربح يحددها حمودة لهذه الطلبية — فارغ = النسبة الافتراضية */
    customDocs: [], customsAgents: {},
    customerPayments: [],
    manualStatusColor: null, manualOverrideBy:null, manualOverrideReason:null,
    stages: stageKeysForOrderType(data.orderType || "MANUFACTURING").map(function(k){ return {key:k, status:"PENDING", dueDate:null, completedAt:null, completedBy:null}; }),
    booking: null,
    servicesCosts: null,
    documents: DOCUMENT_TYPES.map(function(ty){ return {type:ty, status:"DRAFT", issuedAt:null}; }),
    expertAssignment: null,
    customsClearance: null,
    accountsRecords: [],
    treasuryRecords: [],
    createdBy: state.currentRole,
    createdAt: nowIso()
  };
  state.orders.unshift(order);
  log("Order", order.orderNumber, "CREATE");
  saveState();
  return order;
}

/* ============================================================
   بيانات تجريبية — لتجربة النظام بطلبيات واقعية في كل الحالات
   (تُضاف إلى البيانات الحالية ولا تحذف شيئًا)
   ============================================================ */
function seedDemoData(){
  function day(n){ return new Date(Date.now() + n*86400000).toISOString().slice(0,10); }
  function iso(n){ return new Date(Date.now() + n*86400000).toISOString(); }

  var specs = [
    {
      data:{name:"شركة النخبة للتجارة العامة", contactPerson:"أحمد سالم", phone:"+218 91 234 5678", email:"ahmed@nakhba.ly",
        goodsDescriptionAr:"مضخات مياه صناعية", goodsDescriptionEn:"Industrial water pumps", hsCode:"8413.70",
        supplierAddressCn:"No. 88 Jiangnan Rd, Ningbo, Zhejiang", chinaTrackingNo:"CN-889231",
        packagesCount:120, netWeightKg:4200, grossWeightKg:4600, dimLengthCm:120, dimWidthCm:80, dimHeightCm:110,
        shippingMethod:"SEA_FCL", incotermCode:"CIF", exWorksPrice:48000, currency:"USD", orderType:"MANUFACTURING",
        laydaysStart:day(-20), cancellingDate:day(5)},
      done:7, phase:"SHIPMENT_ACTIVE", dueOffset:-3, /* متأخرة — أحمر */
      booking:{type:"FCL", carrier:"COSCO Shipping", detailValue:"HBL-2291", bookingNumber:"COSU6231457890",
        pickup:-8, pickupDone:true, cutoff:-1, shipping:2}, /* الـ Cut-off فات (أحمر) والشحن قريب (أصفر) */
      profit:15,
      customs:{EXPORT:{name:"Li Wei", company:"Ningbo Hengda Customs Brokers", phone:"+86 574 8888 1234", email:"liwei@hengda-cb.cn", declarationNo:"310420260987654", declarationDate:null}},
      services:{inspection:450, roadTransportOrigin:1200, customsClearingOrigin:800, stevedoringOrigin:950,
        insurance:600, marineTransport:3800, stevedoringDischarge:700, customsClearingDestination:1100, roadTransportDestination:900},
      bl:{shipperName:"Ningbo Pump Industry Co.", consigneeName:"شركة النخبة للتجارة العامة", consigneeAddress:"طرابلس - ليبيا",
        notifyName:"شركة النخبة للتجارة العامة", containerSealNo:"CSNU-7741220 / SL-9921", marksNos:"NAKHBA / TRIPOLI",
        packageKind:"كراتين CTNS", vesselName:"COSCO VENUS", voyageNo:"V-142E", portOfLoading:"Ningbo, China",
        portOfDischarge:"Misrata, Libya", freightPayableAt:"PREPAID", placeOfIssue:"Ningbo", issuedBy:"HAMMOUDA SEA TRANSPORT CO.", issueDate:day(-6)},
      confirmed:true, acked:true,
      accounts:[{section:"LOGISTICS", invoiceRef:"LOG-2291", amount:10500, paymentStatus:"PAID"},
                {section:"MANUFACTURING", invoiceRef:"MFG-8841", amount:48000, paymentStatus:"PARTIAL"}],
      treasury:[{description:"سداد أجرة النقل البحري", amount:3800, direction:"OUT"}],
      /* دفعة مقدمة فقط (مسدد جزئيًا) — البوليصة صادرة لكنها محجوزة عن الزبون حتى السداد الكامل */
      issueBL:true, payments:[{amount:25000, method:"BANK_TRANSFER", reference:"TRF-NKB-55120", day:-11, note:"دفعة مقدمة"}]
    },
    {
      data:{name:"مؤسسة البحر الأبيض للطاقة", contactPerson:"ليلى المبروك", phone:"+218 92 111 2222", email:"laila@abyad-energy.ly",
        goodsDescriptionAr:"ألواح طاقة شمسية 550 واط", goodsDescriptionEn:"Solar panels 550W", hsCode:"8541.43",
        supplierAddressCn:"Hefei, Anhui", chinaTrackingNo:"CN-104778",
        packagesCount:60, netWeightKg:1800, grossWeightKg:1950, dimLengthCm:230, dimWidthCm:115, dimHeightCm:35,
        shippingMethod:"SEA_LCL", incotermCode:"FOB", exWorksPrice:21500, currency:"USD", orderType:"COMMERCIAL",
        laydaysStart:day(10), cancellingDate:day(30)},
      done:2, phase:"PRE_SHIPMENT", dueOffset:null /* بلا موعد — رمادي */
    },
    {
      data:{name:"شركة الواحة لمواد البناء", contactPerson:"عمر الزوي", phone:"+218 94 555 7788", email:"omar@wahaa.ly",
        goodsDescriptionAr:"بلاط سيراميك أرضيات", goodsDescriptionEn:"Ceramic floor tiles", hsCode:"6907.21",
        supplierAddressCn:"Foshan, Guangdong", chinaTrackingNo:"CN-556310",
        packagesCount:840, netWeightKg:19500, grossWeightKg:20400, dimLengthCm:60, dimWidthCm:60, dimHeightCm:12,
        shippingMethod:"SEA_FCL", incotermCode:"DDP", exWorksPrice:36200, currency:"USD", orderType:"COMMERCIAL",
        laydaysStart:day(-4), cancellingDate:day(14)},
      done:6, phase:"SHIPMENT_ACTIVE", dueOffset:2, /* اقترب الموعد — أصفر */
      booking:{type:"LCL", carrier:"MSC", detailValue:"MSCU-88213", bookingNumber:"MSC-BK-771204",
        pickup:1, cutoff:5, shipping:8}, /* الاستلام بكرة (أصفر) */
      profit:12,
      services:{roadTransportOrigin:900, customsClearingOrigin:750, stevedoringOrigin:640, marineTransport:2900,
        stevedoringDischarge:580, customsClearingDestination:1250, roadTransportDestination:1400},
      confirmed:true, acked:true,
      accounts:[{section:"COMMERCIAL", invoiceRef:"COM-5512", amount:36200, paymentStatus:"PENDING"}]
    },
    {
      data:{name:"مصنع الجنوب للأعلاف", contactPerson:"سعاد بن علي", phone:"+218 91 777 9090", email:"souad@janoub.ly",
        goodsDescriptionAr:"خط إنتاج أعلاف مدمج", goodsDescriptionEn:"Compact feed production line", hsCode:"8436.10",
        supplierAddressCn:"Zhengzhou, Henan", chinaTrackingNo:"CN-771902",
        packagesCount:18, netWeightKg:7400, grossWeightKg:7900, dimLengthCm:300, dimWidthCm:140, dimHeightCm:180,
        shippingMethod:"SEA_FCL", incotermCode:"EXW", exWorksPrice:92000, currency:"USD", orderType:"MANUFACTURING",
        laydaysStart:day(-60), cancellingDate:day(-25)},
      done:99, phase:"COMPLETED", dueOffset:null, /* مكتملة — أخضر */
      booking:{type:"BB", carrier:"Evergreen", detailValue:"EGLV-3320", bookingNumber:"EGLV-BK-3320",
        pickup:-40, pickupDone:true, cutoff:-36, cutoffDone:true, shipping:-34, shipped:true},
      profit:18,
      customs:{EXPORT:{name:"Zhang Min", company:"Henan Global Clearance", phone:"+86 371 6666 2020", email:"", declarationNo:"460120260001122", declarationDate:null},
        IMPORT:{name:"محمود الفيتوري", company:"مكتب الفيتوري للتخليص الجمركي", phone:"+218 91 400 1122", email:"", declarationNo:"LY-MIS-2026-5521", declarationDate:null}},
      services:{inspection:800, roadTransportOrigin:2100, customsClearingOrigin:1500, stevedoringOrigin:2600,
        insurance:1150, marineTransport:7400, stevedoringDischarge:2300, customsClearingDestination:1900, roadTransportDestination:1700},
      confirmed:true, acked:true, issueAllDocs:true,
      accounts:[{section:"LOGISTICS", invoiceRef:"LOG-3320", amount:21450, paymentStatus:"PAID"},
                {section:"MANUFACTURING", invoiceRef:"MFG-9002", amount:92000, paymentStatus:"PAID"}],
      /* مسددة بالكامل (دفعتان) والبوليصة سُلّمت للزبون */
      payments:[{amount:60000, method:"BANK_TRANSFER", reference:"TRF-JNB-2201", day:-50, note:"دفعة مقدمة"},
                {amount:"REST", method:"CHEQUE", reference:"CHQ-004417", day:-33}],
      releaseBL:{name:"سعاد بن علي", day:-32},
      bonus:[{description:"متابعة شحنة غير قياسية خارج الدوام", amount:300, status:"APPROVED"}]
    }
  ];

  var created = [];
  specs.forEach(function(spec){
    var o = newOrder(spec.data);
    o.isDemo = true; /* وسم يسمح بحذفها لاحقًا دون المساس بالبيانات الحقيقية */
    o.phase = spec.phase;

    var limit = Math.min(spec.done, o.stages.length);
    o.stages.forEach(function(s, i){
      if(i < limit){ s.status = "DONE"; s.completedAt = iso(-(limit - i) * 2); s.completedBy = state.currentRole; }
    });
    var cur = currentStage(o);
    if(cur && spec.dueOffset !== null && spec.dueOffset !== undefined) cur.dueDate = day(spec.dueOffset);

    if(spec.booking){
      var sb = spec.booking;
      o.booking = {type:sb.type, carrier:sb.carrier, detailValue:sb.detailValue, bookingNumber:sb.bookingNumber||"",
        pickupDate: sb.pickup!==undefined ? day(sb.pickup) : null, cutoffDate: sb.cutoff!==undefined ? day(sb.cutoff) : null,
        shippingDate: sb.shipping!==undefined ? day(sb.shipping) : null,
        pickupDoneAt: sb.pickupDone ? iso(sb.pickup) : null, cutoffDoneAt: sb.cutoffDone ? iso(sb.cutoff) : null,
        shippedAt: sb.shipped ? iso(sb.shipping) : null, bonusNotes:[]};
    }
    if(spec.services){ o.servicesCosts = spec.services; o.shippingPrice = computeServicesCostsTotal(spec.services); }
    if(spec.bl) o.billOfLading = spec.bl;
    if(spec.profit!==undefined) o.profitPct = spec.profit;
    if(spec.customs) o.customsAgents = spec.customs;

    if(spec.confirmed){
      o.customerConfirmation = {
        code: genConfirmationCode(),
        finalPrice: orderFinalPrice(o), profitPct: effectiveProfitPct(o), costAtIssue: orderCost(o),
        invoiceSentAt: iso(-12), invoiceSentByUsername: state.currentUsername, invoiceSentByRole: state.currentRole,
        confirmedAt: iso(-10), confirmedByUsername: state.currentUsername, confirmedByRole: state.currentRole,
        logisticsAckAt: spec.acked ? iso(-9) : null,
        logisticsAckByUsername: spec.acked ? state.currentUsername : null,
        logisticsAckByRole: spec.acked ? state.currentRole : null
      };
      o.procedureOrderReceivedAt = iso(-9);
      var inv = o.documents.find(function(d){ return d.type==="FINAL_INVOICE"; });
      if(inv){ inv.status="ISSUED"; inv.issuedAt=iso(-12); inv.issuedByRole=state.currentRole; }
    }
    if(spec.issueAllDocs){
      o.documents.forEach(function(d){
        d.status="ISSUED"; d.issuedAt=iso(-5); d.issuedByRole=state.currentRole;
        if(d.type==="BILL_OF_LADING") d.verificationCode = "VER-" + Math.random().toString(36).slice(2,10).toUpperCase();
      });
      o.billOfLading = o.billOfLading || {};
      o.billOfLading.blNumber = "BL-" + o.orderNumber.replace("ORD-","") + "-LY";
    }
    (spec.accounts||[]).forEach(function(r){
      o.accountsRecords.push({section:r.section, invoiceRef:r.invoiceRef, amount:r.amount, paymentStatus:r.paymentStatus, createdAt:iso(-8)});
    });
    (spec.treasury||[]).forEach(function(r){
      o.treasuryRecords.push({description:r.description, amount:r.amount, direction:r.direction, recordedAt:iso(-7)});
    });
    if(spec.issueBL){
      var sbl = o.documents.find(function(d){ return d.type==="BILL_OF_LADING"; });
      sbl.status="ISSUED"; sbl.issuedAt=iso(-2); sbl.issuedByRole="finance_team"; sbl.issuedByUsername="finance@hamouda.local";
      sbl.verificationCode = "VER-" + Math.random().toString(36).slice(2,10).toUpperCase();
      o.billOfLading = o.billOfLading || {};
      o.billOfLading.blNumber = o.billOfLading.blNumber || ("BL-" + o.orderNumber.replace("ORD-","") + "-LY");
      o.billOfLading.vgmWeight = o.billOfLading.vgmWeight || o.grossWeightKg;
    }
    (spec.payments||[]).forEach(function(pd){
      var amount = pd.amount==="REST" ? customerRemaining(o) : pd.amount;
      if(!(amount > 0)) return;
      var p = addCustomerPayment(o, {amount:amount, date:day(pd.day), method:pd.method, reference:pd.reference, note:pd.note});
      p.recordedAt = iso(pd.day); p.recordedByRole = "finance_team"; p.recordedByUsername = "finance@hamouda.local";
    });
    if(spec.releaseBL && customerRemaining(o)===0){
      o.billOfLading = o.billOfLading || {};
      o.billOfLading.releasedToCustomerAt = iso(spec.releaseBL.day);
      o.billOfLading.releasedByRole = "logistics_team"; o.billOfLading.releasedByUsername = "logistics@hamouda.local";
      o.billOfLading.releasedToName = spec.releaseBL.name;
    }
    (spec.bonus||[]).forEach(function(n){
      o.booking.bonusNotes.push({id:uid(), staffName:roleLabel("logistics_team"), description:n.description, amount:n.amount, status:n.status});
    });
    created.push(o);
  });

  /* بضاعة في المخزن مرتبطة بأول طلبية */
  var wh = state.warehouses[0];
  if(wh){
    wh.entries.unshift({id:uid(), description:"مضخات مياه — دفعة أولى", quantity:40, orderId:created[0].id, status:"STORED", isDemo:true});
    wh.entries.unshift({id:uid(), description:"بلاط سيراميك — عينات", quantity:6, orderId:created[2].id, status:"RELEASED", isDemo:true});
  }

  log("System", "DEMO_DATA", "SEED");
  saveState();
  return created.length;
}
function hasDemoData(){ return state.orders.some(function(o){ return o.isDemo; }); }
function removeDemoData(){
  var removed = state.orders.filter(function(o){ return o.isDemo; }).length;
  var demoIds = {};
  state.orders.forEach(function(o){ if(o.isDemo) demoIds[o.id] = true; });
  state.orders = state.orders.filter(function(o){ return !o.isDemo; });
  state.warehouses.forEach(function(w){
    w.entries = w.entries.filter(function(e){ return !e.isDemo && !demoIds[e.orderId]; });
  });
  if(state.view.orderId && demoIds[state.view.orderId]) state.view = {name:"orders", orderId:null, tab:"overview"};
  log("System", "DEMO_DATA", "REMOVE");
  saveState();
  return removed;
}
function renderDemoBar(){
  var bar = document.getElementById("demoBar");
  var shell = document.getElementById("app-shell");
  if(!bar || !shell) return;
  var show = hasDemoData();
  bar.hidden = !show;
  shell.classList.toggle("no-demo", !show);
  if(!show){ bar.innerHTML = ""; return; }
  bar.innerHTML = '<span>' + esc(t("ui.demoBarText")) + ' · Demo data · 演示数据</span>'
    + '<button type="button" data-act="removeDemo">' + esc(t("ui.demoBarRemove")) + '</button>';
}

/* ============================================================
   أيقونات SVG بسيطة للتنقل
   ============================================================ */
var ICONS = {
  org:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="5" rx="1"></rect><rect x="2" y="16" width="6" height="5" rx="1"></rect><rect x="9" y="16" width="6" height="5" rx="1"></rect><rect x="16" y="16" width="6" height="5" rx="1"></rect><path d="M12 8v4M5 16v-4h14v4"></path></svg>',
  finance:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2.5"></circle><path d="M6 12h.01M18 12h.01"></path></svg>',
  orders:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6l1 3H8l1-3z"></path><rect x="4" y="6" width="16" height="15" rx="2"></rect><path d="M9 11h6M9 15h6"></path></svg>',
  warehouse:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10 12 4l9 6"></path><path d="M5 9v11h14V9"></path><path d="M9 20v-6h6v6"></path></svg>',
  settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
  incoterms:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 8h14M5 8 3 12l3.5 1.5c1-.6 1.7-1.7 1.7-3S6.5 7.4 5.5 6.8M19 8l2 4-3.5 1.5c-1-.6-1.7-1.7-1.7-3s1.2-3.1 2.2-3.7"></path></svg>'
};

/* ============================================================
   العرض (Rendering)
   ============================================================ */
function esc(s){ return (s===undefined||s===null)?"":String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function fmtDate(iso){ if(!iso) return ""; return iso.slice(0,10); }
/* يعزل الأرقام/الرموز/التواريخ داخل نص عربي (RTL) عشان ما تنعكسش بصريًا */
function bdi(s, dirMode){ return (s===undefined||s===null||s==="") ? "" : '<bdi dir="'+(dirMode||"ltr")+'">'+esc(s)+'</bdi>'; }

/* شعار المنظومة: حاوية شحن بأضلاعها المعدنية فوق موجة بحر — يُرسم بلون البطاقة الذهبية */
var LOGO_MARK = '<svg class="logo-mark" viewBox="0 0 40 40" role="img" aria-label="AFIC">'
  + '<g class="lm-container">'
  + '<path d="M6 11h28a1.6 1.6 0 0 1 1.6 1.6v12.8A1.6 1.6 0 0 1 34 27H6a1.6 1.6 0 0 1-1.6-1.6V12.6A1.6 1.6 0 0 1 6 11z" opacity=".92"></path>'
  + '</g>'
  + '<g class="lm-rib">'
  + '<path d="M10.5 13.4v11.2M15 13.4v11.2M20 13.4v11.2M25 13.4v11.2M29.5 13.4v11.2"></path>'
  + '</g>'
  + '<g class="lm-wave">'
  + '<path d="M3 31.4c2.6 0 2.6 1.9 5.2 1.9s2.6-1.9 5.2-1.9 2.6 1.9 5.2 1.9 2.6-1.9 5.2-1.9 2.6 1.9 5.2 1.9 2.6-1.9 5.2-1.9"></path>'
  + '</g></svg>';

/* مشهد سلسلة الشحن الكاملة: مصنع ← شاحنة ← ميناء (تحميل) ← سفن ← طائرة ← ميناء (تفريغ) ← شاحنة ← مستودع
   بنقاط ملوّنة معبأة بالكامل (بلا دوائر فارغة) تطفو فوق المسار لتمثيل الشحنات النشطة بكل مرحلة */
var HERO_SCENE = '<svg viewBox="0 0 900 200" role="img" aria-label="Multi-modal shipping chain">'
  /* خط الأرض/الرصيف الممتد بطول المشهد */
  + '<line x1="10" y1="150" x2="890" y2="150" stroke="var(--on-navy-muted)" stroke-width="1" opacity=".28"/>'
  /* شريط البحر تحت السفينتين — الماء نفسه يتدفق أفقيًا بحلقة مستمرة (مقصوص داخل حدود البحر فقط) */
  + '<defs><clipPath id="heroSeaClip"><rect x="245" y="150" width="215" height="34"/></clipPath></defs>'
  + '<rect x="245" y="150" width="215" height="34" fill="var(--ocean)" opacity=".14"/>'
  + '<g clip-path="url(#heroSeaClip)"><path class="hero-water" d="M197 150 q12 6 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0" fill="none" stroke="var(--ocean)" stroke-width="1.1" opacity=".45"/></g>'

  /* 1) المصنع + دخان متحرك */
  + '<g fill="none" stroke="var(--on-navy-muted)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity=".8">'
  + '<rect x="18" y="112" width="58" height="38" rx="1"/>'
  + '<path d="M30 112V88M48 112V80"/>'
  + '</g>'
  + '<circle class="hero-puff p1" cx="30" cy="84" r="3" fill="var(--critical)"/>'
  + '<circle class="hero-puff p2" cx="48" cy="76" r="3.4" fill="var(--critical)"/>'

  /* 2) الشاحنة الأولى (من المصنع إلى الميناء) */
  + '<g class="hero-truck1">'
  + '<rect x="108" y="128" width="34" height="18" rx="2" fill="var(--accent)"/>'
  + '<rect x="142" y="133" width="17" height="13" rx="2" fill="var(--accent)" opacity=".8"/>'
  + '<circle cx="118" cy="148" r="4" fill="var(--navy-2)"/><circle cx="150" cy="148" r="4" fill="var(--navy-2)"/>'
  + '</g>'

  /* 3) رافعة ميناء التحميل + عمال */
  + '<g fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round">'
  + '<path d="M205 150V104M205 104h28M227 104v14"/>'
  + '</g>'
  + '<g fill="var(--on-navy-muted)" opacity=".8"><circle cx="188" cy="143" r="3"/><circle cx="197" cy="143" r="3"/></g>'

  /* 4-5) السفينتان — تتمايل على الأمواج (دوران+ارتفاع غير متماثل حول خط الماء) وتخلّفان أثر رغوة متكرر خلفهما */
  + '<g class="hero-ship1"><path d="M255 138h48l-7 12h-43z" fill="var(--accent)"/><rect x="274" y="126" width="11" height="13" rx="1" fill="var(--accent)" opacity=".85"/></g>'
  + '<g class="hero-wake w1" style="animation-delay:.1s"><path d="M255 149 q-7 3 -14 0 q-7 3 -13 0" fill="none" stroke="var(--accent)" stroke-width="1.3" stroke-linecap="round"/></g>'
  + '<g class="hero-ship2"><path d="M345 140h52l-7 12h-47z" fill="var(--ocean)"/><rect x="365" y="127" width="11" height="14" rx="1" fill="var(--ocean)" opacity=".85"/></g>'
  + '<g class="hero-wake w2" style="animation-delay:1.1s"><path d="M345 151 q-7 3 -14 0 q-7 3 -13 0" fill="none" stroke="var(--ocean)" stroke-width="1.3" stroke-linecap="round"/></g>'

  /* 6) مسار الطائرة والطائرة نفسها */
  + '<path d="M410 88 C 490 28, 610 28, 690 88" fill="none" stroke="var(--info)" stroke-width="1.3" stroke-dasharray="3 6" opacity=".5"/>'
  + '<g class="hero-plane" fill="var(--info)">'
  + '<path d="M0 0 L34 3 L44 0 L34 -3 L4 -6 L-8 -10 L-13 -9 L-6 -3 L-16 -3 L-21 -6 L-25 -5 L-21 0 L-25 5 L-21 6 L-16 3 L-6 3 L-13 9 L-8 10 L4 6 Z"/>'
  + '</g>'

  /* 7) رافعة ميناء التفريغ + عمال (معكوسة الذراع) */
  + '<g fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round">'
  + '<path d="M695 150V104M695 104h-28M667 104v14"/>'
  + '</g>'
  + '<g fill="var(--on-navy-muted)" opacity=".8"><circle cx="703" cy="143" r="3"/><circle cx="712" cy="143" r="3"/></g>'

  /* 8) الشاحنة الثانية (من الميناء إلى المستودع) */
  + '<g class="hero-truck2">'
  + '<rect x="748" y="128" width="34" height="18" rx="2" fill="var(--success)"/>'
  + '<rect x="782" y="133" width="17" height="13" rx="2" fill="var(--success)" opacity=".8"/>'
  + '<circle cx="758" cy="148" r="4" fill="var(--navy-2)"/><circle cx="790" cy="148" r="4" fill="var(--navy-2)"/>'
  + '</g>'

  /* 9) المستودع */
  + '<g fill="none" stroke="var(--on-navy-muted)" stroke-width="1.6" stroke-linejoin="round" opacity=".8">'
  + '<path d="M818 150V118l38-16 38 16v32z"/><rect x="845" y="130" width="20" height="20"/>'
  + '</g>'

  /* نقاط الشحنات الملوّنة الطافية — كلها معبأة بالكامل بلا أي دائرة فارغة */
  + '<g class="hero-dot" style="animation-delay:.0s" fill="var(--critical)"><circle cx="60" cy="55" r="5"/></g>'
  + '<g class="hero-dot" style="animation-delay:.3s" fill="var(--critical)"><circle cx="95" cy="95" r="4"/></g>'
  + '<g class="hero-dot" style="animation-delay:.6s" fill="var(--critical)"><circle cx="165" cy="60" r="4.5"/></g>'
  + '<g class="hero-dot" style="animation-delay:.2s" fill="var(--accent)"><circle cx="230" cy="45" r="5"/></g>'
  + '<g class="hero-dot" style="animation-delay:.5s" fill="var(--accent)"><circle cx="320" cy="40" r="4.5"/></g>'
  + '<g class="hero-dot" style="animation-delay:.9s" fill="var(--accent)"><circle cx="450" cy="105" r="4"/></g>'
  + '<g class="hero-dot" style="animation-delay:.4s" fill="var(--info)"><circle cx="520" cy="55" r="5"/></g>'
  + '<g class="hero-dot" style="animation-delay:.7s" fill="var(--info)"><circle cx="600" cy="100" r="4.5"/></g>'
  + '<g class="hero-dot" style="animation-delay:1.1s" fill="var(--success)"><circle cx="640" cy="45" r="4.5"/></g>'
  + '<g class="hero-dot" style="animation-delay:.1s" fill="var(--success)"><circle cx="745" cy="60" r="5"/></g>'
  + '<g class="hero-dot" style="animation-delay:.8s" fill="var(--success)"><circle cx="800" cy="95" r="4"/></g>'
  + '<g class="hero-dot" style="animation-delay:1.3s" fill="var(--success)"><circle cx="855" cy="50" r="4.5"/></g>'
  + '</svg>';

var GLOBE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z"></path></svg>';
var CHEV_ICON = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>';
var CHECK_ICON = '<svg class="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg>';
var ASSISTANT_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>';
var ASSISTANT_CLOSE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"></path></svg>';
var ASSISTANT_SEND_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"></path><path d="M22 2 15 22l-4-9-9-4 20-7z"></path></svg>';
var BELL_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>';
var BELL_OFF_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><path d="M2 2l20 20"></path></svg>';

function closeAllLangMenus(){
  document.querySelectorAll(".lang-menu.open").forEach(function(m){ m.classList.remove("open"); });
}
document.addEventListener("click", closeAllLangMenus);

function renderLangSwitch(container, light){
  container.innerHTML = "";
  container.classList.remove("open");
  var toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "lang-toggle" + (light ? " on-light" : "");
  toggle.setAttribute("aria-label", "Language / اللغة / 语言");
  toggle.innerHTML = GLOBE_ICON + '<span class="lang-code">' + esc(t("langShort")) + '</span>' + CHEV_ICON;
  toggle.onclick = function(ev){
    ev.stopPropagation();
    var wasOpen = container.classList.contains("open");
    closeAllLangMenus();
    if(!wasOpen) container.classList.add("open");
  };

  var dropdown = document.createElement("div");
  dropdown.className = "lang-dropdown";
  ["ar","en","zh"].forEach(function(l){
    var opt = document.createElement("div");
    opt.className = "lang-option" + (state.lang===l ? " active":"");
    opt.innerHTML = "<span>" + esc(I18N[l].langName) + "</span>" + (state.lang===l ? CHECK_ICON : "");
    opt.onclick = function(ev){ ev.stopPropagation(); container.classList.remove("open"); setLang(l); };
    dropdown.appendChild(opt);
  });

  container.appendChild(toggle);
  container.appendChild(dropdown);
}

function setLang(l){
  if(!I18N[l]) return;
  state.lang = l;
  saveLang(l);
  saveState();
  applyDocumentLang();
  renderLoginTexts();
  renderShell();
}

function renderLoginTexts(){
  document.getElementById("loginBadge").innerHTML = LOGO_MARK;
  document.getElementById("heroHeadline").innerHTML = esc(t("ui.heroHeadline1")) + '<br><em>' + esc(t("ui.heroHeadline2")) + '</em>';
  document.getElementById("heroLede").textContent = t("ui.heroLede");
  document.getElementById("heroScene").innerHTML = HERO_SCENE;
  var stats = [["16", t("ui.heroStatRoles")], ["10", t("ui.heroStatStages")], ["11", t("ui.heroStatIncoterms")], ["3", t("ui.heroStatLangs")]];
  document.getElementById("heroStats").innerHTML = stats.map(function(s){
    return '<div class="hero-stat"><b>'+s[0]+'</b><span>'+esc(s[1])+'</span></div>';
  }).join("");
  document.getElementById("loginBrand").textContent = t("loginBrand");
  document.getElementById("loginSub").textContent = t("loginSub");
  document.getElementById("loginUsernameLabel").textContent = t("loginUsernameLabel");
  document.getElementById("loginPasswordLabel").textContent = t("loginPasswordLabel");
  document.getElementById("loginError").textContent = t("loginError");
  document.getElementById("loginBtnText").textContent = t("loginBtn");
  document.getElementById("loginDemoNotice").textContent = t("ui.loginDemoNotice");
  document.getElementById("loginQuickSelectHint").textContent = t("ui.loginQuickSelectHint");
  renderLangSwitch(document.getElementById("langSwitchLogin"), true);
  renderLoginQuickSelect();
  renderThemeToggles();
}

function renderLoginQuickSelect(){
  document.getElementById("loginQuickSelectLabel").textContent = t("loginQuickSelectLabel");
  document.getElementById("loginDividerText").textContent = t("loginDividerText");
  var sel = document.getElementById("loginQuickSelect");
  var prevValue = sel.value;
  var html = '<option value="">'+esc(t("loginQuickSelectPlaceholder"))+'</option>';
  Object.keys(LOGIN_ACCOUNTS).forEach(function(u){
    html += '<option value="'+esc(u)+'">'+esc(roleLabel(LOGIN_ACCOUNTS[u].role))+' — '+esc(u)+'</option>';
  });
  sel.innerHTML = html;
  sel.value = prevValue || "";
}

function renderShell(){
  renderAssistant();
  renderNotifToggle();
  document.getElementById("brandBadge").innerHTML = LOGO_MARK;
  document.getElementById("brandMark").textContent = t("brandMark");
  document.getElementById("brandSub").textContent = t("brandSub");
  document.getElementById("autosaveLabel").textContent = t("autosave");
  document.getElementById("railCredit").textContent = t("creditLine");
  var logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.title = t("logout");
  logoutBtn.setAttribute("aria-label", t("logout"));
  var roleEl = document.getElementById("currentUserRole");
  roleEl.textContent = roleLabel(state.currentRole);
  roleEl.title = t("loggedInAs") + " " + roleLabel(state.currentRole);
  var emailEl = document.getElementById("currentUserEmail");
  emailEl.textContent = state.currentUsername || "";
  emailEl.title = state.currentUsername || "";
  renderLangSwitch(document.getElementById("langSwitch"));
  renderThemeToggles();
  renderNav();
  renderMain();
}

var NAV_ITEMS = ["orders","warehouse","finance","org","settings","incoterms"];
/* لا نعرض قسمًا لا يملك المستخدم صلاحية فتحه — تجنّبًا لنقرة تنتهي برسالة منع */
function navVisible(name){
  if(name==="warehouse") return can("warehouse:view");
  if(name==="finance") return can("finance:manage");
  return true;
}
function renderNav(){
  var nav = document.getElementById("navList");
  nav.innerHTML = "";
  NAV_ITEMS.filter(navVisible).forEach(function(name){
    var li = document.createElement("li");
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-item" + (state.view.name===name ? " active":"");
    btn.innerHTML = ICONS[name] + "<span>" + esc(t("nav."+name)) + "</span>";
    if(state.view.name===name) btn.setAttribute("aria-current","page");
    btn.onclick = function(){ state.view = {name:name, orderId:null, tab:"overview"}; saveState(); renderNav(); renderMain(); };
    li.appendChild(btn);
    nav.appendChild(li);
  });
}

function renderMain(){
  var ctx = captureUiContext();
  var main = document.getElementById("mainArea");
  if(state.view.name==="orders" && !state.view.orderId) main.innerHTML = viewOrdersList();
  else if(state.view.name==="orderDetail" || state.view.orderId) main.innerHTML = viewOrderDetail(state.view.orderId);
  else if(state.view.name==="warehouse") main.innerHTML = viewWarehouse();
  else if(state.view.name==="finance") main.innerHTML = viewFinance();
  else if(state.view.name==="org") main.innerHTML = viewOrg();
  else if(state.view.name==="settings") main.innerHTML = viewSettings();
  else if(state.view.name==="incoterms") main.innerHTML = pageHeadHtml("incoterms","ui.incotermsSubtitle") + '<div class="card">'+viewIncotermsRef(null)+'</div>';
  renderDemoBar();
  wireEvents();
  linkOrphanLabels();
  markScrollableJourneys();
  restoreUiContext(ctx);
}
/* يُظهر تدرّجًا وتلميحًا عندما تكون خريطة الرحلة أوسع من الشاشة */
function markScrollableJourneys(){
  document.querySelectorAll(".journey-wrap").forEach(function(wrap){
    var track = wrap.querySelector(".journey");
    if(!track) return;
    wrap.classList.toggle("scrollable", track.scrollWidth > track.clientWidth + 4);
  });
}
window.addEventListener("resize", markScrollableJourneys);

/* ---------- قائمة الطلبيات ---------- */
function orderProgress(o){
  var total = (o.stages||[]).length;
  var done = (o.stages||[]).filter(function(s){ return s.status==="DONE"; }).length;
  return {done:done, total:total, pct: total ? Math.round(done/total*100) : 0};
}
function orderMatchesFilter(o){
  var f = state.ordersFilter || {q:"", phase:"ALL"};
  var q = (f.q||"").trim().toLowerCase();
  if(q){
    var bl = o.billOfLading || {}, bk = o.booking || {};
    var hay = [o.orderNumber, o.customer.name, o.customer.contactPerson, o.customer.phone, o.customer.email,
      o.goodsDescriptionAr, o.goodsDescriptionEn, o.chinaTrackingNo, o.hsCode, bl.blNumber, bl.vesselName, bk.carrier]
      .join(" ").toLowerCase();
    if(hay.indexOf(q) === -1) return false;
  }
  var p = f.phase || "ALL";
  if(p === "ALL") return true;
  if(p === "LATE") return displayColor(o) === "RED";
  if(p === "CUTOFF_SOON") return !!orderCutOffStatus(o);
  if(p === "LOG_ALERT") return orderLogAlerts(o).length > 0;
  return o.phase === p;
}
var SEARCH_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>';

/* مسار التنقل أعلى كل شاشة */
function crumbsHtml(pageKey){
  return '<div class="crumbs"><span class="live"><span class="pulse-dot"></span>'+esc(t("ui.breadcrumbWorkspace"))+'</span>'
    + '<span class="sep">/</span><span>'+esc(t("nav."+pageKey))+'</span></div>';
}
function pageHeadHtml(pageKey, subtitleKey, actionHtml){
  return crumbsHtml(pageKey)
    + '<div class="page-head"><div><h1>'+esc(t("nav."+pageKey))+'</h1><p class="page-subtitle">'+esc(t(subtitleKey))+'</p></div>'
    + (actionHtml||'') + '</div>';
}

/* لوحة العمليات: تلخّص الوضع وتقود مباشرة إلى الطلبية التي تحتاج تدخّلًا */
function opsHeroHtml(){
  var late = state.orders.filter(function(o){ return displayColor(o)==="RED"; });
  var body;
  if(state.orders.length === 0){
    body = '<p class="ops-hero-line">'+esc(t("ui.heroPanelEmpty"))+'</p>';
  } else if(late.length){
    /* أقدم متأخرة = الأبعد موعدًا في الماضي */
    var oldest = late.slice().sort(function(a,b){
      var da = (currentStage(a)||{}).dueDate || "9999", db = (currentStage(b)||{}).dueDate || "9999";
      return da < db ? -1 : 1;
    })[0];
    var st = currentStage(oldest) || {};
    body = '<p class="ops-hero-line"><span class="pulse-dot late"></span>'
      + esc(t("ui.heroOldestLate")) + ' <b>' + esc(oldest.orderNumber) + '</b> — ' + esc(oldest.customer.name)
      + (st.dueDate ? (' · ' + esc(t("stages."+st.key)) + ' ' + bdi(fmtDate(st.dueDate))) : '')
      + ' <button type="button" class="ops-hero-cta" data-act="openOrder" data-id="'+oldest.id+'">'+esc(t("ui.heroOpenIt"))+'</button></p>';
  } else {
    var upcoming = state.orders.map(function(o){ return {o:o, s:currentStage(o)}; })
      .filter(function(x){ return x.s && x.s.dueDate; })
      .sort(function(a,b){ return a.s.dueDate < b.s.dueDate ? -1 : 1; })[0];
    body = '<p class="ops-hero-line"><span class="pulse-dot"></span>' + esc(t("ui.heroAllClear"))
      + (upcoming ? (' <b>' + esc(t("ui.heroNextDue")) + '</b> ' + esc(upcoming.o.orderNumber) + ' · ' + bdi(fmtDate(upcoming.s.dueDate))
        + ' <button type="button" class="ops-hero-cta" data-act="openOrder" data-id="'+upcoming.o.id+'">'+esc(t("ui.heroOpenIt"))+'</button>') : '')
      + '</p>';
  }
  return '<section class="ops-hero"><div>'
    + '<div class="ops-hero-eyebrow">OPERATIONS OVERVIEW</div>'
    + '<h2>'+esc(t("ui.heroPanelTitle"))+'</h2>'
    + body
    + '</div><div class="ops-hero-art">' + HERO_SCENE + '</div></section>';
}

/* شارات بصرية سريعة لطبيعة البضاعة — تظهر في قائمة الطلبيات وأعلى تفاصيل الطلبية دون الحاجة لفتحها */
function cargoBadgesHtml(o){
  var html = "";
  if(o.isDangerousGoods) html += '<span class="pill critical" title="'+esc(t("ui.dgDeclarationTitle"))+'">'+svgIcon(ICON_WARNING)+esc(t("ui.dgBadge"))+'</span>';
  if(o.isSpecialCargo) html += '<span class="pill warning" title="'+esc(t("ui.specialCargoDeclarationTitle"))+'">'+svgIcon(ICON_PACKAGE)+esc(t("ui.specialBadge"))+'</span>';
  if(o.needsReefer) html += '<span class="pill info" title="'+esc(t("ui.reeferDeclarationTitle"))+'">'+svgIcon(ICON_SNOWFLAKE)+esc(t("ui.reeferBadge"))+'</span>';
  return html;
}
function kpiTile(kind, value, label, activeWhen){
  var f = state.ordersFilter || {phase:"ALL"};
  var on = (f.phase === activeWhen);
  return '<button type="button" class="kpi-tile k-'+kind+(on?" on":"")+'" data-act="filterPhase" data-phase="'+activeWhen+'"'+(on?' aria-pressed="true"':' aria-pressed="false"')+'>'
    + '<div class="kpi-value">'+value+'</div><div class="kpi-label">'+esc(label)+'</div></button>';
}

function viewOrdersList(){
  var canCreate = can("order:create");
  var f = state.ordersFilter || {q:"", phase:"ALL"};
  var html = pageHeadHtml("orders", "ui.ordersSubtitle",
    canCreate ? '<button class="btn primary" data-act="newOrderForm">'+esc(t("ui.newOrderBtn"))+'</button>' : '');

  html += opsHeroHtml();

  if(state.view.showNewForm){
    html += orderFormHtml();
  }

  if(state.orders.length === 0){
    html += '<p class="empty-state">'+esc(t("ui.noOrdersYet"))+'</p>';
    return html;
  }

  /* مؤشرات سريعة تعمل كأزرار تصفية */
  var counts = {all:state.orders.length, active:0, late:0, done:0, cutoffSoon:0};
  state.orders.forEach(function(o){
    if(o.phase === "SHIPMENT_ACTIVE") counts.active++;
    if(o.phase === "COMPLETED") counts.done++;
    if(displayColor(o) === "RED") counts.late++;
    if(orderLogAlerts(o).length) counts.cutoffSoon++;
  });
  html += '<div class="kpi-grid">'
    + kpiTile("all", counts.all, t("kpi.total"), "ALL")
    + kpiTile("active", counts.active, t("kpi.active"), "SHIPMENT_ACTIVE")
    + kpiTile("late", counts.late, t("kpi.late"), "LATE")
    + kpiTile("done", counts.done, t("kpi.completed"), "COMPLETED")
    + (counts.cutoffSoon ? kpiTile("cutoff", counts.cutoffSoon, t("ui.logAlertsKpi"), "LOG_ALERT") : "")
    + '</div>';

  /* بحث وتصفية */
  html += '<div class="filter-bar">'
    + '<div class="search-wrap">' + SEARCH_ICON
    + '<label for="ordersSearch" class="sr-only">'+esc(t("ui.searchPlaceholder"))+'</label>'
    + '<input id="ordersSearch" type="search" value="'+esc(f.q||"")+'" placeholder="'+esc(t("ui.searchPlaceholder"))+'">'
    + '</div><div class="chip-row">';
  [["ALL","ui.filterAll"],["PRE_SHIPMENT","ui.filterPreShipment"],["SHIPMENT_ACTIVE","ui.filterActive"],["COMPLETED","ui.filterCompleted"],["LATE","ui.filterLate"]].forEach(function(pair){
    var on = (f.phase||"ALL") === pair[0];
    html += '<button type="button" class="chip-filter'+(on?" on":"")+'" data-act="filterPhase" data-phase="'+pair[0]+'" aria-pressed="'+(on?"true":"false")+'">'+esc(t(pair[1]))+'</button>';
  });
  html += '</div></div>';

  var shown = state.orders.filter(orderMatchesFilter);
  html += '<p class="result-count">'+esc(tpl(t("ui.resultCountTemplate"), {shown:shown.length, total:state.orders.length}))+'</p>';

  if(shown.length === 0){
    html += '<div class="empty-state">'+esc(t("ui.noResults"))
      + '<div style="margin-top:.7rem;"><button class="btn small" data-act="clearFilters">'+esc(t("ui.clearFilters"))+'</button></div></div>';
    return html;
  }

  html += '<div class="order-table" role="table">';
  shown.forEach(function(o){
    var color = displayColor(o);
    var pr = orderProgress(o);
    var cur = currentStage(o);
    html += '<a class="order-row '+COLOR_CLASS[color]+'" data-act="openOrder" data-id="'+o.id+'" href="#" role="row">';
    html += '<span class="order-row-stripe"></span>';
    html += '<div class="order-row-id"><b>'+esc(o.orderNumber)+'</b><span class="muted">'+esc(o.customer.name)+'</span></div>';
    html += '<div class="order-row-pills"><span class="pill info">'+esc(o.incotermCode)+'</span><span class="pill neutral">'+esc(t("orderTypes."+(o.orderType||"MANUFACTURING")))+'</span><span class="pill '+COLOR_PILL[color]+'">'+esc(t("statusColor."+color))+'</span>'+(o.shippingMethod?('<span class="pill info">'+esc(t("shippingMethods."+o.shippingMethod))+'</span>'):'')+cargoBadgesHtml(o)+logAlertPillsHtml(o)+((customerRemaining(o)||0) > 0 ? '<span class="pill critical" style="font-size:.68rem;">'+esc(t("ui.remainingPill"))+'</span>' : '')+'</div>';
    html += '<div class="order-row-stage muted">'+(cur?(esc(t("stages."+cur.key))+(cur.dueDate?(esc(t("ui.dueDatePrefix"))+bdi(fmtDate(cur.dueDate))):'')):'—')+'</div>';
    html += '<div class="order-row-progress"><div class="progress-track"><div class="progress-fill" style="width:'+pr.pct+'%;"></div></div><span class="progress-text">'+esc(tpl(t("ui.progressTemplate"), {done:pr.done, total:pr.total}))+'</span></div>';
    html += '<svg class="order-row-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>';
    html += '</a>';
  });
  html += '</div>';
  return html;
}

function orderFormHtml(){
  var incotermOpts = FORM_INCOTERM_CODES.map(function(code){ return '<option value="'+code+'">'+code+' — '+esc(t("incoterms."+code))+'</option>'; }).join("");
  var shippingOpts = SHIPPING_METHOD_KEYS.map(function(k){ return '<option value="'+k+'">'+esc(t("shippingMethods."+k))+'</option>'; }).join("");
  var currencyOpts = CURRENCY_KEYS.map(function(k){ return '<option value="'+k+'">'+esc(t("currencies."+k))+'</option>'; }).join("");

  var html = '<div class="card">';
  html += '<h3>'+esc(t("ui.newOrderFormTitle"))+'</h3>';
  html += '<p class="muted" style="font-size:.78rem;background:var(--warning-bg,#fff8e1);border:1px solid var(--warning,#c99a06);border-radius:8px;padding:.5rem .7rem;display:flex;align-items:center;gap:.4rem;">'+svgIcon(ICON_WARNING)+esc(t("ui.formIncompleteNote"))+'</p>';

  html += '<h4 class="form-section-title">'+esc(t("ui.sectionBasicInfo"))+'</h4><div class="grid2">';
  html += field(t("ui.customerName"),"f_name");
  html += field(t("ui.contactPerson"),"f_contact");
  html += field(t("ui.phoneRequired"),"f_phone","tel",{placeholder:"+218 91 234 5678"});
  html += field(t("ui.email"),"f_email","email");
  html += '</div>';
  html += '<div class="field"><label>'+esc(t("ui.orderRefLabel"))+'</label><div class="muted" style="padding:.3rem 0;">'+esc(t("ui.orderRefAutoNote"))+'</div></div>';

  html += '<h4 class="form-section-title">'+esc(t("ui.sectionCargoSupplier"))+'</h4><div class="grid2">';
  html += field(t("ui.goodsDescriptionArLabel"),"f_goods_ar");
  html += field(t("ui.goodsDescriptionEnLabel"),"f_goods_en");
  html += field(t("ui.hsCodeLabel"),"f_hscode");
  html += field(t("ui.supplierAddressLabel"),"f_supplier_addr");
  html += field(t("ui.chinaTrackingLabel"),"f_china_tracking");
  html += '</div>';

  html += '<h4 class="form-section-title">'+esc(t("ui.sectionLogisticsSpecs"))+'</h4><div class="grid2">';
  html += field(t("ui.packagesCountLabel"),"f_packages","number",{oninput:"updateCbmPreview()"});
  html += field(t("ui.netWeightLabel"),"f_net_weight","number",{step:"0.01"});
  html += field(t("ui.grossWeightLabel"),"f_gross_weight","number",{step:"0.01"});
  html += '</div>';
  html += '<div class="field"><label>'+esc(t("ui.dimensionsLabel"))+'</label><div class="row" style="gap:.5rem;flex-wrap:nowrap;">'
    + '<input id="f_dim_l" type="number" step="0.1" placeholder="'+esc(t("ui.dimLPlaceholder"))+'" style="flex:1;min-width:0;" oninput="updateCbmPreview()">'
    + '<input id="f_dim_w" type="number" step="0.1" placeholder="'+esc(t("ui.dimWPlaceholder"))+'" style="flex:1;min-width:0;" oninput="updateCbmPreview()">'
    + '<input id="f_dim_h" type="number" step="0.1" placeholder="'+esc(t("ui.dimHPlaceholder"))+'" style="flex:1;min-width:0;" oninput="updateCbmPreview()">'
    + '</div></div>';
  html += '<div class="field"><label>'+esc(t("ui.cbmLabel"))+'</label><div id="cbmPreview" class="pill info" style="width:fit-content;">0 '+esc(t("ui.cbmUnit"))+'</div></div>';

  html += '<h4 class="form-section-title">'+esc(t("ui.sectionShippingTerms"))+'</h4><div class="grid2">';
  html += '<div class="field"><label>'+esc(t("ui.shippingMethodLabel"))+'</label><select id="f_shipping_method">'+shippingOpts+'</select></div>';
  html += '<div class="field"><label>'+esc(t("ui.incotermRequired"))+'</label><select id="f_incoterm">'+incotermOpts+'</select></div>';
  html += field(t("ui.laydaysStartLabel"),"f_laydays","date");
  html += field(t("ui.cancellingDateLabel"),"f_cancelling","date");
  html += '</div>';

  html += '<h4 class="form-section-title">'+esc(t("ui.sectionSpecialCargo"))+'</h4><div class="grid2">';
  html += '<div class="field"><label>'+esc(t("ui.isDangerousGoodsLabel"))+'</label><select id="f_dangerous" onchange="toggleConditionalField(\'f_dangerous\',\'f_msds_wrap\')">'
    + '<option value="NO">'+esc(t("ui.noOption"))+'</option><option value="YES">'+esc(t("ui.yesOption"))+'</option></select></div>';
  html += '<div class="field" id="f_msds_wrap" style="display:none;">'+field(t("ui.msdsNumberLabel"),"f_msds")+'</div>';
  html += '<div class="field"><label>'+esc(t("ui.isSpecialCargoLabel"))+'</label><select id="f_special" onchange="toggleConditionalField(\'f_special\',\'f_special_note_wrap\')">'
    + '<option value="NO">'+esc(t("ui.noOption"))+'</option><option value="YES">'+esc(t("ui.yesOption"))+'</option></select></div>';
  html += '<div class="field" id="f_special_note_wrap" style="display:none;">'+field(t("ui.specialCargoNoteLabel"),"f_special_note")+'</div>';
  html += '<div class="field"><label>'+esc(t("ui.needsReeferLabel"))+'</label><select id="f_reefer" onchange="toggleConditionalField(\'f_reefer\',\'f_reefer_temp_wrap\')">'
    + '<option value="NO">'+esc(t("ui.noOption"))+'</option><option value="YES">'+esc(t("ui.yesOption"))+'</option></select></div>';
  html += '<div class="field" id="f_reefer_temp_wrap" style="display:none;">'+field(t("ui.reeferTempLabel"),"f_reefer_temp","number",{step:"0.1"})+'</div>';
  html += '</div>';

  html += '<h4 class="form-section-title">'+esc(t("ui.sectionFinancials"))+'</h4><div class="grid2">';
  html += field(t("ui.exwPriceLabel"),"f_exw","number");
  html += '<div class="field"><label>'+esc(t("ui.currencySelectLabel"))+'</label><select id="f_currency">'+currencyOpts+'</select></div>';
  html += '<div class="field"><label>'+esc(t("ui.vatApplicableLabel"))+'</label><select id="f_vat" onchange="toggleConditionalField(\'f_vat\',\'f_vat_amount_wrap\')">'
    + '<option value="NO">'+esc(t("ui.noOption"))+'</option><option value="YES">'+esc(t("ui.yesOption"))+'</option></select></div>';
  html += '<div class="field" id="f_vat_amount_wrap" style="display:none;">'+field(t("ui.vatAmountLabel"),"f_vat_amount","number")+'</div>';
  html += '<p class="muted" style="font-size:.72rem;grid-column:1/-1;margin:0;display:flex;align-items:center;gap:.35rem;">'+svgIcon(ICON_LOCK)+esc(t("ui.vatInternalHint"))+'</p>';
  html += '</div>';

  html += '<button class="btn primary" data-act="submitNewOrder">'+esc(t("ui.createOrder"))+'</button> ';
  html += '<button class="btn" data-act="cancelNewOrder">'+esc(t("ui.cancel"))+'</button>';
  html += '</div>';
  return html;
}
function field(label,id,type,opts){
  opts = opts || {};
  var attrs = ' type="'+(type||"text")+'"';
  if(opts.placeholder) attrs += ' placeholder="'+esc(opts.placeholder)+'"';
  if(opts.step) attrs += ' step="'+opts.step+'"';
  if(opts.oninput) attrs += ' oninput="'+opts.oninput+'"';
  if(opts.value!==undefined && opts.value!==null && opts.value!=="") attrs += ' value="'+esc(opts.value)+'"';
  return '<div class="field"><label for="'+esc(id)+'">'+esc(label)+'</label><input id="'+esc(id)+'"'+attrs+'></div>';
}
/* يربط كل تسمية بحقلها تلقائيًا — يغطي أيضًا النماذج المكتوبة يدويًا عبر النظام */
function linkOrphanLabels(){
  document.querySelectorAll(".field > label:not([for])").forEach(function(lab){
    var ctl = lab.parentNode.querySelector("input,select,textarea");
    if(ctl && ctl.id) lab.setAttribute("for", ctl.id);
  });
}
function toggleConditionalField(triggerId, wrapId){
  var trigger = document.getElementById(triggerId);
  var wrap = document.getElementById(wrapId);
  if(!trigger || !wrap) return;
  wrap.style.display = trigger.value==="YES" ? "" : "none";
  if(trigger.value!=="YES"){
    var input = wrap.querySelector("input,textarea");
    if(input) input.value = "";
  }
}
function updateCbmPreview(){
  var l = parseFloat((document.getElementById("f_dim_l")||{}).value)||0;
  var w = parseFloat((document.getElementById("f_dim_w")||{}).value)||0;
  var h = parseFloat((document.getElementById("f_dim_h")||{}).value)||0;
  var c = parseFloat((document.getElementById("f_packages")||{}).value)||0;
  var cbm = computeCBM(l,w,h,c);
  var el = document.getElementById("cbmPreview");
  if(el) el.textContent = (cbm!==null ? cbm : 0) + " " + t("ui.cbmUnit");
}

/* ---------- تفاصيل الطلبية ---------- */
function findOrder(id){ for(var i=0;i<state.orders.length;i++) if(state.orders[i].id===id) return state.orders[i]; return null; }

function infoRow(label, value, dirMode, raw){
  var display;
  if(value===null||value===undefined||value===""){
    display = '<span class="muted">—</span>';
  } else if(dirMode==="ltr" || dirMode==="auto"){
    display = '<bdi class="info-value" dir="'+dirMode+'">'+(raw?value:esc(value))+'</bdi>';
  } else {
    display = '<span class="info-value">'+(raw?value:esc(value))+'</span>';
  }
  return '<div class="field" style="margin-bottom:.6rem;"><span class="info-label" style="margin-bottom:.15rem;">'+esc(label)+'</span>'+display+'</div>';
}

function orderInfoCardHtml(o){
  var html = '<div class="card"><h3>'+esc(t("ui.orderInfoTitle"))+'</h3>';

  html += '<h4 class="form-section-title">'+esc(t("ui.sectionBasicInfo"))+'</h4><div class="grid2">';
  html += infoRow(t("ui.orderTypeLabel"), t("orderTypes."+(o.orderType||"MANUFACTURING")));
  html += infoRow(t("ui.contactPerson"), o.customer.contactPerson, "auto");
  html += infoRow(t("ui.phoneRequired"), o.customer.phone, "ltr");
  html += infoRow(t("ui.email"), o.customer.email, "ltr");
  html += infoRow(t("ui.orderRefLabel"), o.orderNumber, "ltr");
  html += '</div>';

  html += '<h4 class="form-section-title">'+esc(t("ui.sectionCargoSupplier"))+'</h4><div class="grid2">';
  html += infoRow(t("ui.goodsDescriptionArLabel"), o.goodsDescriptionAr, "auto");
  html += infoRow(t("ui.goodsDescriptionEnLabel"), o.goodsDescriptionEn, "auto");
  html += infoRow(t("ui.hsCodeLabel"), o.hsCode, "ltr");
  html += infoRow(t("ui.supplierAddressLabel"), o.supplierAddressCn, "auto");
  html += infoRow(t("ui.chinaTrackingLabel"), o.chinaTrackingNo, "ltr");
  html += '</div>';

  html += '<h4 class="form-section-title">'+esc(t("ui.sectionLogisticsSpecs"))+'</h4><div class="grid2">';
  html += infoRow(t("ui.packagesCountLabel"), o.packagesCount, "ltr");
  html += infoRow(t("ui.netWeightLabel"), o.netWeightKg, "ltr");
  html += infoRow(t("ui.grossWeightLabel"), o.grossWeightKg, "ltr");
  html += infoRow(t("ui.dimensionsLabel"), (o.dimLengthCm && o.dimWidthCm && o.dimHeightCm) ? (o.dimLengthCm+' × '+o.dimWidthCm+' × '+o.dimHeightCm+' cm') : null, "ltr");
  html += infoRow(t("ui.cbmLabel"), (o.cbm!==null && o.cbm!==undefined) ? (o.cbm+' '+t("ui.cbmUnit")) : null, "ltr");
  html += '</div>';

  html += '<h4 class="form-section-title">'+esc(t("ui.sectionShippingTerms"))+'</h4><div class="grid2">';
  html += infoRow(t("ui.shippingMethodLabel"), o.shippingMethod ? t("shippingMethods."+o.shippingMethod) : null);
  html += infoRow(t("ui.laydaysStartLabel"), o.laydaysStart ? fmtDate(o.laydaysStart) : null, "ltr");
  html += infoRow(t("ui.cancellingDateLabel"), o.cancellingDate ? fmtDate(o.cancellingDate) : null, "ltr");
  html += '</div>';

  if(o.isDangerousGoods || o.isSpecialCargo || o.needsReefer){
    html += '<h4 class="form-section-title">'+esc(t("ui.sectionSpecialCargo"))+'</h4><div class="grid2">';
    if(o.isDangerousGoods){
      html += infoRow(t("ui.isDangerousGoodsLabel"), svgIcon(ICON_WARNING)+esc(t("ui.yesOption")), null, true);
      html += infoRow(t("ui.msdsNumberLabel"), o.msdsNumber, "ltr");
    }
    if(o.isSpecialCargo){
      html += infoRow(t("ui.isSpecialCargoLabel"), t("ui.yesOption"));
      html += infoRow(t("ui.specialCargoNoteLabel"), o.specialCargoNote, "auto");
    }
    if(o.needsReefer){
      html += infoRow(t("ui.needsReeferLabel"), svgIcon(ICON_SNOWFLAKE)+esc(t("ui.yesOption")), null, true);
      html += infoRow(t("ui.reeferTempLabel"), (o.reeferTempC!==null && o.reeferTempC!=="") ? (o.reeferTempC+' °C') : null, "ltr");
    }
    html += '</div>';
  }

  html += '<h4 class="form-section-title">'+esc(t("ui.sectionFinancials"))+'</h4><div class="grid2">';
  html += infoRow(t("ui.exwPriceLabel"), (o.exWorksPrice!==null && o.exWorksPrice!==undefined) ? (o.exWorksPrice+' '+o.currency) : null, "ltr");
  html += infoRow(t("ui.currencySelectLabel"), o.currency ? t("currencies."+o.currency) : null);
  /* الـ VAT سجل داخلي يراه حمودة فقط */
  if(can("pricing:view")){
    html += infoRow(t("ui.vatApplicableLabel"), o.vatApplicable==="YES" ? t("ui.yesOption") : t("ui.noOption"));
    if(o.vatApplicable==="YES") html += infoRow(t("ui.vatAmountLabel"), (o.vatAmount!==null && o.vatAmount!==undefined) ? (o.vatAmount+' '+o.currency) : null, "ltr");
  }
  html += '</div>';

  html += '</div>';
  return html;
}

function blPaymentConfirmed(o){
  return (o.accountsRecords||[]).some(function(r){ return r.section==="LOGISTICS" && r.paymentStatus==="PAID"; });
}
function blPaymentHeld(o){
  var bl = o.billOfLading || {};
  return (bl.freightPayableAt!=="COLLECT") && !blPaymentConfirmed(o);
}

function customerConfirmationCardHtml(o){
  var cc = o.customerConfirmation || {};
  var deptPerm = (o.orderType==="COMMERCIAL") ? "commercial:edit_stage" : "manufacturing:edit_stage";
  var deptLabel = t("departments."+(o.orderType==="COMMERCIAL" ? "COMMERCIAL" : "MANUFACTURING"));
  var canEditInvoice = can(deptPerm) || state.currentRole==="senior_management"; /* التصنيع/التجاري (بحسب نوع الطلبية) يرسل الفاتورة ويسجل موافقة الزبون */
  var canAckLogistics = can("logistics:record_procedure_order") || state.currentRole==="senior_management"; /* اللوجستيك يستلم الموافقة ليكمل شغله */
  var hasData = !!cc.code;
  if(!canEditInvoice && !canAckLogistics && !hasData) return "";

  var isConfirmed = !!cc.confirmedAt;
  var isAcked = !!cc.logisticsAckAt;
  var statusKey = isAcked ? "ui.logisticsAckedShort" : isConfirmed ? "ui.awaitingLogisticsAckShort" : hasData ? "ui.awaitingCustomerConfirmation" : "ui.customerInvoiceNotSentShort";
  var statusPill = isAcked ? "success" : isConfirmed ? "warning" : hasData ? "warning" : "neutral";
  var html = '<div class="card"><h3>'+esc(t("ui.customerConfirmationTitle"))+' <span class="pill '+statusPill+'" style="font-size:.68rem;">'+esc(t(statusKey))+'</span></h3>';
  html += '<p class="muted" style="font-size:.75rem;margin-top:-.4rem;">'+esc(tpl(t("ui.customerConfirmationExplainerNote"), {dept: deptLabel}))+'</p>';

  if(isConfirmed){
    html += '<div style="background:var(--success-bg,#e6f4ea);border:1px solid #1e7e34;border-radius:8px;padding:.6rem .8rem;margin-bottom:.6rem;font-size:.8rem;color:#1e7e34;line-height:1.6;">'
      + svgIcon(ICON_CHECK)+' '+esc(t("ui.customerConfirmedNote"))+'<br>'
      + esc(t("ui.confirmCodeLabel"))+': <b>'+bdi(cc.code||"—")+'</b><br>'
      + esc(t("ui.confirmedByLabel"))+': '+esc(roleLabel(cc.confirmedByRole))+' — '+esc(fmtDate(cc.confirmedAt))
      + '</div>';
    html += '<button class="btn small" data-act="printDoc" data-id="'+o.id+'" data-doc="FINAL_INVOICE">'+esc(t("ui.viewPrint"))+'</button>';
    if(isAcked){
      html += '<p class="muted" style="font-size:.75rem;margin-top:.6rem;">'+esc(tpl(t("ui.logisticsAckedNoteTemplate"), {by: roleLabel(cc.logisticsAckByRole), date: fmtDate(cc.logisticsAckAt)}))+'</p>';
    } else if(canAckLogistics){
      html += '<div style="margin-top:.6rem;"><button class="btn success" data-act="ackCustomerConfirmation" data-id="'+o.id+'">'+esc(t("ui.logisticsAckBtn"))+'</button></div>';
    } else {
      html += '<p class="muted" style="font-size:.75rem;margin-top:.6rem;">'+esc(t("ui.awaitingLogisticsAckNote"))+'</p>';
    }
  } else if(hasData){
    html += '<p style="font-size:.8rem;">'+esc(tpl(t("ui.invoiceSentNoteTemplate"), {date: fmtDate(cc.invoiceSentAt), by: roleLabel(cc.invoiceSentByRole)}))+'</p>';
    if(invoicePriceStale(o)) html += '<div class="pricing-note crit">'+svgIcon(ICON_WARNING)+'<span>'+esc(t("ui.priceChangedCardWarn"))+'</span></div>';
    html += '<button class="btn small" data-act="printDoc" data-id="'+o.id+'" data-doc="FINAL_INVOICE">'+esc(t("ui.viewPrint"))+'</button>';
    if(canEditInvoice){
      html += '<div class="extra row" style="margin-top:.6rem;">'
        + '<div class="field"><label>'+esc(t("ui.enterConfirmCodeLabel"))+'</label><input id="confirmCode_'+o.id+'" placeholder="'+esc(t("ui.enterConfirmCodePlaceholder"))+'"></div>'
        + '<button class="btn success" data-act="confirmCustomerCode" data-id="'+o.id+'">'+esc(t("ui.recordCustomerConfirmationBtn"))+'</button>'
        + '<button class="btn" data-act="generateCustomerInvoice" data-id="'+o.id+'">'+esc(t("ui.regenerateInvoiceBtn"))+'</button>'
        + '</div>';
    } else if(canAckLogistics){
      html += '<p class="muted" style="font-size:.75rem;margin-top:.5rem;">'+esc(tpl(t("ui.awaitingDeptConfirmationNote"), {dept: deptLabel}))+'</p>';
    }
  } else if(canEditInvoice){
    var blockKey = invoiceBlockReason(o);
    if(blockKey) html += '<div class="pricing-note warn">'+svgIcon(ICON_HOURGLASS)+'<span>'+esc(t(blockKey))+'</span></div>';
    html += '<button class="btn primary" data-act="generateCustomerInvoice" data-id="'+o.id+'"'+(blockKey?' disabled style="opacity:.55;cursor:not-allowed;"':'')+'>'+esc(t("ui.generateCustomerInvoiceBtn"))+'</button>';
  } else if(canAckLogistics){
    html += '<p class="muted" style="font-size:.8rem;">'+esc(tpl(t("ui.awaitingDeptInvoiceNote"), {dept: deptLabel}))+'</p>';
  }

  html += '</div>';
  return html;
}

function computeServicesCostsTotal(sc){
  if(!sc) return 0;
  var total = 0;
  SERVICES_COST_KEYS.forEach(function(k){ var v = parseFloat(sc[k]); if(!isNaN(v)) total += v; });
  return total;
}

function visibleServicesCostKeys(o){
  return SERVICES_COST_KEYS.filter(function(k){
    var cond = SERVICES_COST_CONDITIONAL[k];
    return !cond || cond(o);
  });
}
function servicesCostsCardHtml(o){
  var sc = o.servicesCosts || {};
  var canEdit = can("logistics:manage_booking_stage") || can("documentation:edit") || state.currentRole==="senior_management";
  var visibleKeys = visibleServicesCostKeys(o);
  var hasData = !!(o.servicesCosts && SERVICES_COST_KEYS.some(function(k){ return sc[k]!==undefined && sc[k]!==null && sc[k]!==""; }));
  if(!canEdit && !hasData) return "";

  var hasSurcharge = o.isDangerousGoods || o.isSpecialCargo || o.needsReefer;
  var total = computeServicesCostsTotal(sc);
  var html = '<div class="card"><h3>'+esc(t("ui.servicesCostsTitle"))+'</h3>';
  html += '<p class="muted" style="font-size:.75rem;margin-top:-.4rem;">'+esc(t("ui.servicesCostsDesc"))+'</p>';
  if(hasSurcharge) html += '<p style="font-size:.75rem;color:#c99a06;font-weight:600;display:flex;align-items:center;gap:.35rem;">'+svgIcon(ICON_WARNING)+esc(t("ui.servicesCostsSurchargeNote"))+'</p>';

  if(canEdit){
    html += '<div class="grid2">';
    visibleKeys.forEach(function(k){
      var label = t("servicesCostLabels."+k) + (SERVICES_COST_OPTIONAL[k] ? (" "+t("ui.optionalSuffix")) : "");
      html += field(label, "svc_"+k+"_"+o.id, "number", {step:"0.01", value: sc[k]!==undefined && sc[k]!==null ? sc[k] : ""});
    });
    html += '</div>';
    html += field(t("ui.otherServicesNoteLabel"), "svc_otherServicesNote_"+o.id, "text", {value: sc.otherServicesNote||"", placeholder: t("ui.otherServicesNotePlaceholder")});
    html += '<div class="row" style="align-items:center;margin-top:.6rem;gap:.7rem;">';
    html += '<button class="btn primary" data-act="saveServicesCosts" data-id="'+o.id+'">'+esc(t("ui.saveServicesCostsBtn"))+'</button>';
    html += '<span class="pill info" style="font-size:.78rem;">'+esc(t("ui.servicesCostsTotalLabel"))+' '+bdi(total+' '+o.currency)+'</span>';
    html += '</div>';
    html += '<p class="muted" style="font-size:.72rem;margin-top:.5rem;">'+esc(t("ui.servicesCostsAutoFillNote"))+'</p>';
  } else if(hasData){
    html += '<div class="grid2">';
    visibleKeys.forEach(function(k){
      var label = t("servicesCostLabels."+k) + (SERVICES_COST_OPTIONAL[k] ? (" "+t("ui.optionalSuffix")) : "");
      html += infoRow(label, (sc[k]!==undefined && sc[k]!==null && sc[k]!=="") ? (sc[k]+" "+o.currency) : null, "ltr");
    });
    html += '</div>';
    if(sc.otherServicesNote) html += infoRow(t("ui.otherServicesNoteLabel"), sc.otherServicesNote, "auto");
    html += '<p style="margin-top:.6rem;"><span class="pill info" style="font-size:.78rem;">'+esc(t("ui.servicesCostsTotalLabel"))+' '+bdi(total+' '+o.currency)+'</span></p>';
  }

  html += '</div>';
  return html;
}

function billOfLadingCardHtml(o){
  var bl = o.billOfLading || {};
  var blDoc = (o.documents||[]).filter(function(x){return x.type==="BILL_OF_LADING";})[0] || {};
  var isIssued = blDoc.status==="ISSUED";
  var canEditBL = can("logistics:manage_booking_stage") || can("documentation:edit") || state.currentRole==="senior_management";
  var canIssueBL = can("bl:issue");
  var hasData = !!(o.billOfLading && (bl.shipperName || bl.consigneeName || bl.vesselName || bl.voyageNo || bl.blNumber || bl.containerSealNo)) || isIssued;
  if(!canEditBL && !canIssueBL && !hasData) return "";

  var held = blPaymentHeld(o);
  var html = '<div class="card"><h3>'+esc(t("ui.blSectionTitle"))+' <span class="pill '+(isIssued?"success":(held?"critical":"success"))+'" style="font-size:.68rem;">'+esc(t(isIssued?"ui.blIssuedShort":(held?"ui.blPaymentHeldShort":"ui.blPaymentClearedShort")))+'</span></h3>';
  if(isIssued){
    html += '<div style="background:var(--success-bg,#e6f4ea);border:1px solid #1e7e34;border-radius:8px;padding:.6rem .8rem;margin-top:-.2rem;margin-bottom:.6rem;font-size:.8rem;color:#1e7e34;line-height:1.6;">'
      + svgIcon(ICON_CHECK)+' '+esc(t("ui.blIssuedNote"))+'<br>'
      + esc(t("ui.blNumberLabel"))+': '+bdi(bl.blNumber||"—")+' — '+esc(t("ui.blIssuedCodeLabel"))+': <b>'+bdi(blDoc.verificationCode||"—")+'</b><br>'
      + esc(t("ui.blIssuedByRoleLabel"))+': '+esc(roleLabel(blDoc.issuedByRole))+' — '+esc(fmtDate(blDoc.issuedAt))
      + '</div>';
  } else {
    html += '<p class="muted" style="font-size:.75rem;margin-top:-.4rem;">'+esc(t(held?"ui.blPaymentHeldNote":"ui.blPaymentClearedNote"))+'</p>';
  }

  if(canEditBL && isIssued){
    html += '<p class="muted" style="font-size:.75rem;">'+esc(t("ui.blLockedAfterIssueNote"))+'</p>';
  }
  if(canEditBL && !isIssued){
    html += '<div class="field"><label>'+esc(t("ui.blDocTypeLabel"))+'</label><select id="bl_doctype_'+o.id+'">'
      + '<option value="HBL"'+(bl.documentType!=="CWB"?" selected":"")+'>'+esc(t("ui.blDocTypeHBL"))+'</option>'
      + '<option value="CWB"'+(bl.documentType==="CWB"?" selected":"")+'>'+esc(t("ui.blDocTypeCWB"))+'</option>'
      + '</select><div class="muted" style="font-size:.72rem;margin-top:.25rem;">'+esc(t("ui.blDocTypeCwbNote"))+'</div></div>';
    html += '<div class="grid2">';
    html += '<div class="field"><label>'+esc(t("ui.blShipperNameLabel"))+'</label><input id="bl_shipper_'+o.id+'" value="'+esc(bl.shipperName||"")+'">'
      + (o.supplierAddressCn ? ('<div class="muted" style="font-size:.72rem;margin-top:.25rem;">'+esc(tpl(t("ui.blShipperAddressNote"),{address:o.supplierAddressCn}))+'</div>') : '')
      + '</div>';
    html += field(t("ui.blConsigneeNameLabel"), "bl_consignee_name_"+o.id, "text", {value: bl.consigneeName || o.customer.name || ""});
    html += field(t("ui.blConsigneeAddressLabel"), "bl_consignee_addr_"+o.id, "text", {value: bl.consigneeAddress||""});
    html += field(t("ui.blNotifyNameLabel"), "bl_notify_name_"+o.id, "text", {value: bl.notifyName||""});
    html += field(t("ui.blNotifyAddressLabel"), "bl_notify_addr_"+o.id, "text", {value: bl.notifyAddress||""});
    html += field(t("ui.blContainerSealLabel"), "bl_container_"+o.id, "text", {value: bl.containerSealNo||""});
    html += field(t("ui.blMarksNosLabel"), "bl_marks_"+o.id, "text", {value: bl.marksNos||""});
    html += field(t("ui.blPackageKindLabel"), "bl_pkgkind_"+o.id, "text", {value: bl.packageKind||"", placeholder: t("ui.blPackageKindPlaceholder")});
    html += field(t("ui.blVesselNameLabel"), "bl_vessel_"+o.id, "text", {value: bl.vesselName||""});
    html += field(t("ui.blVoyageNoLabel"), "bl_voyage_"+o.id, "text", {value: bl.voyageNo||""});
    html += field(t("ui.blPortLoadingLabel"), "bl_portload_"+o.id, "text", {value: bl.portOfLoading||""});
    html += field(t("ui.blPortDischargeLabel"), "bl_portdis_"+o.id, "text", {value: bl.portOfDischarge||""});
    html += '<div class="field"><label>'+esc(t("ui.blFreightPayableLabel"))+'</label><select id="bl_freight_'+o.id+'">'
      + '<option value="PREPAID"'+(bl.freightPayableAt!=="COLLECT"?" selected":"")+'>'+esc(t("ui.blFreightPrepaid"))+'</option>'
      + '<option value="COLLECT"'+(bl.freightPayableAt==="COLLECT"?" selected":"")+'>'+esc(t("ui.blFreightCollect"))+'</option>'
      + '</select></div>';
    html += field(t("ui.blPlaceOfIssueLabel"), "bl_place_"+o.id, "text", {value: bl.placeOfIssue||""});
    html += field(t("ui.blIssuedByLabel"), "bl_issuedby_"+o.id, "text", {value: bl.issuedBy||""});
    html += '<div class="field"><label>'+esc(t("ui.blIssueDateLabel"))+'</label><input id="bl_issuedate_'+o.id+'" type="date" value="'+(bl.issueDate?fmtDate(bl.issueDate):"")+'"></div>';
    html += '<div class="field"><label>'+esc(t("ui.blVesselEtaLabel"))+'</label><input id="bl_vesseleta_'+o.id+'" type="date" value="'+(bl.vesselEtaPort?fmtDate(bl.vesselEtaPort):"")+'"></div>';
    html += '</div>';
    html += '<p class="muted" style="font-size:.72rem;">'+esc(t("ui.blNumberFilledByFinanceNote"))+'</p>';

    html += '<h4 class="form-section-title">'+esc(t("ui.blVgmSectionTitle"))+'</h4><div class="grid2">';
    html += field(t("ui.blVgmWeightLabel"), "bl_vgmweight_"+o.id, "number", {value: bl.vgmWeight||""});
    html += field(t("ui.blVgmVerifiedByLabel"), "bl_vgmby_"+o.id, "text", {value: bl.vgmVerifiedBy||""});
    html += '<div class="field"><label>'+esc(t("ui.blVgmDateLabel"))+'</label><input id="bl_vgmdate_'+o.id+'" type="date" value="'+(bl.vgmDate?fmtDate(bl.vgmDate):"")+'"></div>';
    html += '</div>';
    if(!bl.vgmWeight) html += '<p class="muted" style="font-size:.72rem;color:#c99a06;display:flex;align-items:center;gap:.35rem;">'+svgIcon(ICON_HOURGLASS)+esc(t("ui.blVgmMissingNote"))+'</p>';

    html += '<button class="btn primary" data-act="saveBLData" data-id="'+o.id+'">'+esc(t("ui.saveBLBtn"))+'</button>';
  } else if(!isIssued && hasData){
    html += '<div class="grid2">';
    html += infoRow(t("ui.blDocTypeLabel"), bl.documentType==="CWB" ? t("ui.blDocTypeCWB") : t("ui.blDocTypeHBL"));
    html += infoRow(t("ui.blShipperNameLabel"), bl.shipperName, "auto");
    html += infoRow(t("ui.blConsigneeNameLabel"), bl.consigneeName, "auto");
    html += infoRow(t("ui.blNotifyNameLabel"), bl.notifyName, "auto");
    html += infoRow(t("ui.blContainerSealLabel"), bl.containerSealNo, "ltr");
    html += infoRow(t("ui.blVesselNameLabel"), bl.vesselName, "auto");
    html += infoRow(t("ui.blVoyageNoLabel"), bl.voyageNo, "ltr");
    html += infoRow(t("ui.blPortLoadingLabel"), bl.portOfLoading, "auto");
    html += infoRow(t("ui.blPortDischargeLabel"), bl.portOfDischarge, "auto");
    html += infoRow(t("ui.blFreightPayableLabel"), bl.freightPayableAt==="COLLECT"?t("ui.blFreightCollect"):t("ui.blFreightPrepaid"));
    html += infoRow(t("ui.blPlaceOfIssueLabel"), bl.placeOfIssue, "auto");
    html += infoRow(t("ui.blIssuedByLabel"), bl.issuedBy, "auto");
    html += '</div>';
    html += cutOffBannerHtml(bl, o);
    if(bl.vgmWeight) html += '<div class="grid2">'+infoRow(t("ui.blVgmWeightLabel"), bl.vgmWeight+' kg', "ltr")+infoRow(t("ui.blVgmVerifiedByLabel"), bl.vgmVerifiedBy, "auto")+'</div>';
  } else if(isIssued){
    html += '<div class="grid2">';
    html += infoRow(t("ui.blDocTypeLabel"), bl.documentType==="CWB" ? t("ui.blDocTypeCWB") : t("ui.blDocTypeHBL"));
    html += infoRow(t("ui.blShipperNameLabel"), bl.shipperName, "auto");
    html += infoRow(t("ui.blConsigneeNameLabel"), bl.consigneeName, "auto");
    html += infoRow(t("ui.blVesselNameLabel"), bl.vesselName, "auto");
    html += infoRow(t("ui.blVoyageNoLabel"), bl.voyageNo, "ltr");
    html += infoRow(t("ui.blPortLoadingLabel"), bl.portOfLoading, "auto");
    html += infoRow(t("ui.blPortDischargeLabel"), bl.portOfDischarge, "auto");
    html += infoRow(t("ui.blNumberLabel"), bl.blNumber, "ltr");
    html += infoRow(t("ui.blVgmWeightLabel"), bl.vgmWeight ? (bl.vgmWeight+' kg') : null, "ltr");
    html += '</div>';
  }

  if(canIssueBL && !isIssued){
    if(held){
      html += '<p class="muted" style="font-size:.75rem;">'+esc(t("ui.blPaymentHeldNote"))+'</p>';
    } else if(hasData && !bl.vgmWeight){
      html += '<p class="muted" style="font-size:.75rem;color:#b3261e;display:flex;align-items:center;gap:.35rem;">'+svgIcon(ICON_HOURGLASS)+esc(t("ui.blVgmMissingNote"))+'</p>';
    } else if(hasData){
      html += '<div class="extra row" style="margin-top:.6rem;border-top:1px dashed var(--border);padding-top:.6rem;">'
        + '<div class="field" style="min-width:220px;"><label><b>'+esc(t("ui.blNumberLabel"))+'</b></label><input id="bl_finance_number_'+o.id+'" placeholder="'+esc(t("ui.blNumberPlaceholder"))+'"></div>'
        + '<button class="btn success" data-act="signAndIssueBL" data-id="'+o.id+'">'+esc(t("ui.blSignAndIssueBtn"))+'</button>'
        + '</div>';
      html += '<p class="muted" style="font-size:.72rem;margin-top:.4rem;">'+esc(t("ui.blSignAndIssueExplainerNote"))+'</p>';
    } else {
      html += '<p class="muted" style="font-size:.75rem;">'+esc(t("ui.blAwaitingLogisticsDataNote"))+'</p>';
    }
  }
  if(isIssued) html += blReleaseSectionHtml(o);

  html += '</div>';
  return html;
}

/* الـ Cut-off = 3 أيام قبل وصول السفينة المتوقع للميناء؛ تنبيه لوني إذا اقترب أو فات دون وصول الشحنة */
function computeCutOffDate(vesselEtaPort){
  if(!vesselEtaPort) return null;
  var eta = new Date(vesselEtaPort);
  if(isNaN(eta.getTime())) return null;
  return new Date(eta.getTime() - 3*86400000).toISOString().slice(0,10);
}
/* حالة الـ Cut-off على مستوى الطلبية بالكامل — تُستخدم في مؤشر لوحة الطلبيات لتنبيه اللوجستيك قبل فوات موعد وصول الشحنة للميناء */
function orderCutOffStatus(o){
  /* موعد الـ Cut-off من بطاقة الحجز (أو محسوب من وصول السفينة)، ولا تنبيه بعد وصول الشحنة للميناء أو صدور البوليصة */
  var s = msStatus(o, "cutoff");
  return (s==="PASSED" || s==="SOON") ? s : null;
}
function cutOffBannerHtml(bl, o){
  var cutOff = o ? effectiveCutoffDate(o) : computeCutOffDate(bl.vesselEtaPort);
  if(!bl.vesselEtaPort && !cutOff) return "";
  if(o && msDone(o, "cutoff")) return '<div class="grid2">'+infoRow(t("ui.blVesselEtaLabel"), fmtDate(bl.vesselEtaPort), "ltr")+infoRow(t("ui.blCutOffLabel"), fmtDate(cutOff), "ltr")+'</div>';
  var html = '<div class="grid2">'+infoRow(t("ui.blVesselEtaLabel"), fmtDate(bl.vesselEtaPort), "ltr")+infoRow(t("ui.blCutOffLabel"), fmtDate(cutOff), "ltr")+'</div>';
  var today = new Date().toISOString().slice(0,10);
  if(cutOff && today > cutOff){
    html += '<p style="font-size:.75rem;color:#b3261e;font-weight:600;display:flex;align-items:center;gap:.35rem;">'+svgIcon(ICON_WARNING)+esc(t("ui.blCutOffPassedWarning"))+'</p>';
  } else if(cutOff){
    var daysLeft = Math.round((new Date(cutOff).getTime() - new Date(today).getTime())/86400000);
    if(daysLeft<=2) html += '<p style="font-size:.75rem;color:#c99a06;font-weight:600;display:flex;align-items:center;gap:.35rem;">'+svgIcon(ICON_CLOCK)+esc(t("ui.blCutOffApproachingWarning"))+'</p>';
  }
  html += '<p class="muted" style="font-size:.7rem;">'+esc(t("ui.blCutOffAutoNote"))+'</p>';
  return html;
}

var TAB_ICONS = {
  overview:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect></svg>',
  workflow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h10M4 12h16M4 18h7"></path><circle cx="18" cy="6" r="2"></circle><circle cx="15" cy="18" r="2"></circle></svg>',
  docs:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><path d="M14 3v5h5M9 13h6M9 17h4"></path></svg>',
  finance:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2.5"></circle><path d="M6 12h.01M18 12h.01"></path></svg>',
  ref:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v16H6.5A2.5 2.5 0 0 0 4 21.5z"></path><path d="M9 7h6M9 11h6"></path></svg>'
};

function orderSideSummaryHtml(o, color, isManual, pr){
  var cur = currentStage(o);
  var html = '<div class="order-side-card '+COLOR_CLASS[color]+'">';
  html += '<div class="order-side-stripe"></div>';
  html += '<div class="order-side-body">';
  html += '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:.5rem;"><h2 style="margin-bottom:.2rem;">'+esc(o.orderNumber)+'</h2><span class="pill info">'+esc(o.incotermCode)+'</span></div>';
  html += '<div class="muted" style="margin-bottom:.7rem;">'+esc(o.customer.name)+'</div>';
  html += '<div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:.9rem;">';
  html += '<span class="pill neutral">'+esc(t("orderTypes."+(o.orderType||"MANUFACTURING")))+'</span>';
  html += '<span class="pill neutral">'+esc(t("phase."+o.phase))+'</span>';
  html += '<span class="pill '+COLOR_PILL[color]+'">'+esc(t("statusColor."+color))+(isManual?esc(t("ui.manualOverrideSuffix")):"")+'</span>';
  html += cargoBadgesHtml(o);
  html += '</div>';
  html += '<div class="progress-row"><div class="progress-track"><div class="progress-fill" style="width:'+pr.pct+'%;"></div></div>'
    + '<span class="progress-text">'+esc(tpl(t("ui.progressTemplate"), {done:pr.done, total:pr.total}))+'</span></div>';
  if(cur){
    html += '<div class="order-side-row"><span class="order-side-label">'+esc(t("ui.currentStageLabel"))+'</span><span class="order-side-val">'+esc(t("stages."+cur.key))+'</span></div>';
  }
  if(o.booking && o.booking.bookingNumber) html += '<div class="order-side-row"><span class="order-side-label">'+esc(t("ui.bookingNumberLabel"))+'</span><span class="order-side-val">'+bdi(o.booking.bookingNumber)+'</span></div>';
  /* تفصيل الأسعار والسعر النهائي: لحمودة فقط */
  if(can("pricing:view")){
    if(o.exWorksPrice) html += '<div class="order-side-row"><span class="order-side-label">'+esc(t("ui.exworkPill"))+'</span><span class="order-side-val">'+bdi(o.exWorksPrice+' '+o.currency)+'</span></div>';
    if(o.shippingPrice) html += '<div class="order-side-row"><span class="order-side-label">'+esc(t("ui.shippingPill"))+'</span><span class="order-side-val">'+bdi(o.shippingPrice+' '+o.currency)+'</span></div>';
    var sideFp = invoicePrice(o);
    if(sideFp!==null) html += '<div class="order-side-row"><span class="order-side-label">'+esc(t("ui.finalPriceSide"))+'</span><span class="order-side-val" style="color:var(--success);">'+xMoney(sideFp, o.currency)+'</span></div>';
  }
  var sideRem = customerRemaining(o);
  if(canSeeCustomerBalance() && sideRem!==null && sideRem > 0){
    html += '<div class="order-side-row"><span class="order-side-label">'+esc(t("ui.remainingSide"))+'</span><span class="order-side-val" style="color:var(--critical);">'+xMoney(sideRem, o.currency)+'</span></div>';
  }
  if(orderLogAlerts(o).length) html += '<div style="display:flex;gap:.3rem;flex-wrap:wrap;margin-top:.6rem;">'+logAlertPillsHtml(o)+'</div>';
  html += '</div></div>';
  return html;
}

function viewOrderDetail(id){
  var o = findOrder(id);
  if(!o) return '<p>'+esc(t("ui.orderNotFound"))+'</p><button class="btn" data-act="backToOrders">'+esc(t("ui.backToOrders"))+'</button>';
  var color = displayColor(o);
  var isManual = !!o.manualStatusColor;
  var pr = orderProgress(o);
  var html = '<button class="btn small" data-act="backToOrders" style="margin-bottom:1rem;">'+esc(t("ui.backToOrders"))+'</button>';
  var sideHtml = orderSideSummaryHtml(o, color, isManual, pr);

  /* ---- يُبنى محتوى كل تبويب على حدة، ثم تُعرض التبويبات غير الفارغة فقط ---- */
  var tab = {overview:"", workflow:"", docs:"", finance:"", ref:""};

  var isLogisticsRole = !!(state.currentRole && state.currentRole.indexOf("logistics_")===0);
  if(can("manufacturing:edit_stage") || can("commercial:edit_stage") || isLogisticsRole || state.currentRole==="senior_management" || state.currentRole==="senior_management"){
    tab.overview += '<div class="card"><h3>'+esc(t("ui.journeyTitle"))+'</h3>' + journeyHtml(journeyStopIndex(o)) + '</div>';
  }
  tab.overview += orderInfoCardHtml(o);

  if(can("order:manual_status_override")){
    tab.workflow += '<div class="card"><h3>'+esc(t("ui.statusColorTitle"))+'</h3>';
    if(isManual){
      var reasonPart = o.manualOverrideReason ? tpl(t("ui.reasonSuffixTemplate"), {reason:esc(o.manualOverrideReason)}) : "";
      tab.workflow += '<p class="muted">'+tpl(t("ui.manualOverrideAppliedTemplate"), {color:esc(t("statusColor."+o.manualStatusColor)), by:esc(o.manualOverrideBy), reason:reasonPart})+'</p>';
      tab.workflow += '<button class="btn" data-act="revertOverride" data-id="'+o.id+'">'+esc(t("ui.revertToAuto"))+'</button><br><br>';
    }
    tab.workflow += '<div class="row"><div class="field"><label>'+esc(t("ui.forceColorLabel"))+'</label><select id="ov_color">';
    ["GREEN","YELLOW","RED","NEUTRAL"].forEach(function(c){ tab.workflow += '<option value="'+c+'">'+esc(t("statusColor."+c))+'</option>'; });
    tab.workflow += '</select></div>';
    tab.workflow += '<div class="field"><label>'+esc(t("ui.reasonOptional"))+'</label><input id="ov_reason"></div>';
    tab.workflow += '<button class="btn warning" data-act="applyOverride" data-id="'+o.id+'">'+esc(t("ui.applyOverride"))+'</button></div></div>';
  }

  tab.workflow += customerConfirmationCardHtml(o);
  tab.workflow += bookingCardHtml(o);

  tab.workflow += '<div class="card"><h3>'+esc(t("ui.stagesTitle"))+'</h3>';
  o.stages.forEach(function(s){
    var canEdit = can(STAGE_PERM[s.key]);
    var stateClass = s.status==="DONE" ? "success" : (s.status==="IN_PROGRESS" ? "info" : "neutral");
    tab.workflow += '<div class="stage-item"><div><b>'+esc(t("stages."+s.key))+'</b><div class="muted"><span class="pill '+stateClass+'" style="font-size:.68rem;">'+esc(t("stageStatus."+s.status))+'</span>'+(s.dueDate?(esc(t("ui.dueDatePrefix"))+bdi(fmtDate(s.dueDate))):"")+'</div></div>';
    var extra = "";
    if((s.key==="MFG_RECEIVE_SHIPPING_PRICE" || s.key==="COMMERCIAL_RECEIVE_SHIPPING_PRICE") && (can("manufacturing:edit_stage")||can("commercial:edit_stage")||can("logistics:manage_booking_stage"))){
      extra += '<div class="extra row"><div class="field"><label>'+esc(t("ui.shippingPriceLabel"))+'</label><input id="sp_'+o.id+'" type="number" value="'+(o.shippingPrice||"")+'"></div><button class="btn" data-act="saveShippingPrice" data-id="'+o.id+'">'+esc(t("ui.saveShippingPrice"))+'</button></div>';
    }
    if(s.key==="LOGISTICS_BOOKING" && s.status!=="DONE"){
      /* بيانات الحجز ومواعيده انتقلت لبطاقة «الحجز ومواعيد الشحن» أعلى هذا التبويب */
      extra += '<div class="extra"><p class="muted" style="font-size:.75rem;">'+esc(t("ui.bookingSeeCardNote"))+'</p>'+logAlertPillsHtml(o)+'</div>';
    }
    if(s.key==="CUSTOMS_CLEARANCE"){
      extra += '<div class="extra">'+customsStageNoteHtml(o)+'</div>';
    }
    if(s.key==="LOGISTICS_PROCEDURE_ORDER" && s.status!=="DONE"){
      extra += '<div class="extra"><p class="muted" style="font-size:.75rem;">'+esc(t("ui.procOrderSeeCardNote"))+'</p></div>';
    }
    if(s.key==="CUSTOMS_CLEARANCE" && can("logistics:customs_decision") && s.status!=="DONE"){
      var cc = o.customsClearance || {materialType:"",procedureNotes:""};
      extra += '<div class="extra row">'
        + '<div class="field"><label>'+esc(t("ui.materialTypeLabel"))+'</label><input id="cc_type_'+o.id+'" value="'+esc(cc.materialType)+'"></div>'
        + '<div class="field"><label>'+esc(t("ui.clearanceNotesLabel"))+'</label><input id="cc_notes_'+o.id+'" value="'+esc(cc.procedureNotes)+'"></div>'
        + '<button class="btn success" data-act="clearCustoms" data-id="'+o.id+'">'+esc(t("ui.approveClearance"))+'</button></div>';
    }
    if(canEdit && s.status!=="DONE"){
      extra += '<div class="extra row"><div class="field"><label>'+esc(t("ui.dueDateLabel"))+'</label><input id="due_'+o.id+'_'+s.key+'" type="date" value="'+(s.dueDate?fmtDate(s.dueDate):"")+'"></div>'
        + '<button class="btn" data-act="saveDueDate" data-id="'+o.id+'" data-stage="'+s.key+'">'+esc(t("ui.saveDueDate"))+'</button>';
      var stageBlock = (s.key==="DELIVERY") ? deliveryBlockReason(o) : null;
      if(s.key!=="CUSTOMS_CLEARANCE" && s.key!=="LOGISTICS_PROCEDURE_ORDER"){
        extra += ' <button class="btn success" data-act="markDone" data-id="'+o.id+'" data-stage="'+s.key+'"'+(stageBlock?' disabled style="opacity:.55;cursor:not-allowed;"':'')+'>'+esc(t("ui.markDone"))+'</button>';
      }
      extra += '</div>';
      if(stageBlock) extra += '<div class="pricing-note warn">'+svgIcon(ICON_HOURGLASS)+'<span>'+esc(t(stageBlock))+'</span></div>';
    }
    if(extra) tab.workflow += '<div class="extra" style="width:100%;">'+extra+'</div>';
    tab.workflow += '</div>';
  });
  tab.workflow += '</div>';

  tab.docs += billOfLadingCardHtml(o);
  tab.finance += pricingCardHtml(o);
  tab.finance += customerPaymentsCardHtml(o);
  tab.finance += servicesCostsCardHtml(o);

  tab.docs += '<div class="card"><h3>'+esc(t("ui.documentsTitle"))+'</h3>';
  /* ترتيب العرض: شهادة المنشأ ثم البوليصة في آخر القائمة، وتحتهما مباشرة المستندات المخصصة (نفس القسم) */
  var DOC_DISPLAY_ORDER = ["FINAL_INVOICE","PACKING_LIST","CARGO_MANIFEST","CERTIFICATE_OF_ORIGIN","BILL_OF_LADING"];
  o.documents.slice().sort(function(a,b){ return DOC_DISPLAY_ORDER.indexOf(a.type) - DOC_DISPLAY_ORDER.indexOf(b.type); }).forEach(function(d){
    tab.docs += '<div class="stage-item"><span>'+esc(t("documents."+d.type))+'</span><span>';
    tab.docs += '<span class="pill '+(d.status==="ISSUED"?"success":"neutral")+'">'+(d.status==="ISSUED"?esc(t("ui.issued")):esc(t("ui.draft")))+'</span> ';
    tab.docs += '<button class="btn small" data-act="printDoc" data-id="'+o.id+'" data-doc="'+d.type+'">'+esc(t("ui.viewPrint"))+'</button>';
    if(d.type==="BILL_OF_LADING"){
      if(d.status!=="ISSUED" && can("bl:issue")){
        tab.docs += ' <span class="pill '+(blPaymentHeld(o)?"critical":"warning")+'" title="'+esc(t("ui.blSeeCardNote"))+'">'+esc(t(blPaymentHeld(o)?"ui.blPaymentHeldShort":"ui.blSeeCardNote"))+'</span>';
      }
    } else if(d.type!=="FINAL_INVOICE" && can("documentation:edit")){
      tab.docs += ' <button class="btn small warning" data-act="issueDoc" data-id="'+o.id+'" data-doc="'+d.type+'">'+esc(t("ui.issue"))+'</button>';
    }
    tab.docs += '</span></div>';
  });
  tab.docs += customDocsHtml(o);
  tab.docs += '</div>';
  tab.docs += customsCardHtml(o);

  if(o.booking && o.booking.type==="BB" && can("bonus_note:view")){
    o.booking.bonusNotes = o.booking.bonusNotes || [];
    tab.finance += '<div class="card bonus-box"><h3>'+esc(t("ui.bonusTitle"))+'</h3><p class="muted" style="font-size:.72rem;">'+esc(t("ui.bonusHint"))+'</p>';
    o.booking.bonusNotes.forEach(function(n){
      tab.finance += '<div class="stage-item"><span><b>'+esc(n.staffName)+'</b> — '+esc(n.description)+(n.amount?(' — '+n.amount):'')+'</span><span>';
      tab.finance += '<span class="pill '+(n.status==="PAID"?"success":n.status==="APPROVED"?"info":"warning")+'">'+esc(t("bonusStatus."+n.status))+'</span> ';
      if(can("bonus_note:approve") && n.status==="PROPOSED") tab.finance += '<button class="btn small" data-act="approveBonus" data-id="'+o.id+'" data-note="'+n.id+'">'+esc(t("ui.approve"))+'</button> ';
      if(can("bonus_note:mark_paid") && n.status==="APPROVED") tab.finance += '<button class="btn small success" data-act="payBonus" data-id="'+o.id+'" data-note="'+n.id+'">'+esc(t("ui.recordPayment"))+'</button>';
      tab.finance += '</span></div>';
    });
    if(o.booking.bonusNotes.length===0) tab.finance += '<p class="muted">'+esc(t("ui.noNotesYet"))+'</p>';
    if(can("bonus_note:create")){
      tab.finance += '<div class="row"><div class="field"><label>'+esc(t("ui.descriptionLabel"))+'</label><input id="bn_desc_'+o.id+'"></div><div class="field"><label>'+esc(t("ui.amountOptional"))+'</label><input id="bn_amt_'+o.id+'" type="number"></div><button class="btn warning" data-act="addBonus" data-id="'+o.id+'">'+esc(t("ui.addNote"))+'</button></div>';
    }
    tab.finance += '</div>';
  }

  if(can("expert:assign") || o.expertAssignment){
    tab.ref += '<div class="card"><h3>'+esc(t("ui.expertTitle"))+'</h3>';
    tab.ref += o.expertAssignment ? ('<p class="muted">'+esc(o.expertAssignment.name)+(o.expertAssignment.contact?(' · '+esc(o.expertAssignment.contact)):'')+'</p>') : '<p class="muted">'+esc(t("ui.noExpertYet"))+'</p>';
    if(can("expert:assign")){
      tab.ref += '<div class="row"><div class="field"><label>'+esc(t("ui.expertNameLabel"))+'</label><input id="ex_name_'+o.id+'" value="'+(o.expertAssignment?esc(o.expertAssignment.name):"")+'"></div><div class="field"><label>'+esc(t("ui.contactMethod"))+'</label><input id="ex_contact_'+o.id+'" value="'+(o.expertAssignment?esc(o.expertAssignment.contact):"")+'"></div><button class="btn" data-act="saveExpert" data-id="'+o.id+'">'+esc(t("ui.saveAssignment"))+'</button></div>';
    }
    tab.ref += '</div>';
  }

  tab.finance += '<div class="card"><h3>'+esc(t("ui.accountsTitle"))+'</h3>';
  var accSections = ["MANUFACTURING","COMMERCIAL","LOGISTICS"];
  o.accountsRecords.forEach(function(r){
    tab.finance += '<div class="stage-item"><span><span class="pill neutral">'+esc(t("accSection."+r.section))+'</span> '+(r.invoiceRef?esc(r.invoiceRef):esc(t("ui.noInvoiceRef")))+' — '+(r.amount||"—")+' '+esc(o.currency)+'</span><span class="pill '+(r.paymentStatus==="PAID"?"success":r.paymentStatus==="PARTIAL"?"warning":"neutral")+'">'+esc(t("payStatus."+r.paymentStatus))+'</span></div>';
  });
  if(o.accountsRecords.length===0) tab.finance += '<p class="muted">'+esc(t("ui.noAccountsYet"))+'</p>';
  accSections.forEach(function(sec){
    if(!can("accounts:edit:"+sec)) return;
    tab.finance += '<div class="row"><span class="pill info">'+esc(t("accSection."+sec))+'</span><div class="field"><label>'+esc(t("ui.invoiceRefLabel"))+'</label><input id="ar_ref_'+o.id+'_'+sec+'"></div><div class="field"><label>'+esc(t("ui.amountLabel"))+'</label><input id="ar_amt_'+o.id+'_'+sec+'" type="number"></div><div class="field"><label>'+esc(t("ui.paymentStatusLabel"))+'</label><select id="ar_status_'+o.id+'_'+sec+'">';
    ["PENDING","PARTIAL","PAID"].forEach(function(ps){ tab.finance += '<option value="'+ps+'">'+esc(t("payStatus."+ps))+'</option>'; });
    tab.finance += '</select></div><button class="btn" data-act="addAccounts" data-id="'+o.id+'" data-sec="'+sec+'">'+esc(t("ui.addRecord"))+'</button></div>';
  });
  tab.finance += '</div>';

  /* سجلات الخزينة الناتجة عن مدفوعات الزبون (paymentId) تفاصيل دفعات — تظهر للمالية وحمودة فقط */
  var canSeePayRows = can("customer_payments:edit") || can("customer_payments:view");
  var treasuryShown = o.treasuryRecords.filter(function(r){ return !r.paymentId || canSeePayRows; });
  if(can("treasury:edit") || treasuryShown.length){
    tab.finance += '<div class="card"><h3>'+esc(t("ui.treasuryTitle"))+'</h3>';
    treasuryShown.forEach(function(r){
      tab.finance += '<div class="stage-item"><span class="pill '+(r.direction==="IN"?"success":"critical")+'">'+(r.direction==="IN"?esc(t("ui.inbound")):esc(t("ui.outbound")))+'</span> '+esc(r.description)+' — '+r.amount+' '+esc(o.currency)+'</div>';
    });
    if(treasuryShown.length===0) tab.finance += '<p class="muted">'+esc(t("ui.noTreasuryYet"))+'</p>';
    if(can("treasury:edit")){
      tab.finance += '<div class="row"><div class="field"><label>'+esc(t("ui.descriptionLabel"))+'</label><input id="tr_desc_'+o.id+'"></div><div class="field"><label>'+esc(t("ui.amountLabel"))+'</label><input id="tr_amt_'+o.id+'" type="number"></div><div class="field"><label>'+esc(t("ui.directionLabel"))+'</label><select id="tr_dir_'+o.id+'"><option value="IN">'+esc(t("ui.inbound"))+'</option><option value="OUT">'+esc(t("ui.outbound"))+'</option></select></div><button class="btn" data-act="addTreasury" data-id="'+o.id+'">'+esc(t("ui.addTransaction"))+'</button></div>';
    }
    tab.finance += '</div>';
  }

  tab.ref += '<div class="card">' + viewIncotermsRef(o.incotermCode) + '</div>';

  /* ---- شريط التبويبات: يعرض فقط الأقسام التي تحتوي محتوى ضمن صلاحية المستخدم ---- */
  var pendingStages = o.stages.filter(function(s){ return s.status!=="DONE"; }).length;
  var issuedDocs = o.documents.filter(function(d){ return d.status==="ISSUED"; }).length;
  var tabDefs = [
    {key:"overview"},
    {key:"workflow", count:pendingStages || null, alert:pendingStages>0},
    {key:"docs", count:issuedDocs+"/"+o.documents.length},
    {key:"finance"},
    {key:"ref"}
  ];
  var available = tabDefs.filter(function(d){ return tab[d.key] && tab[d.key].length; });
  if(!available.length) return html + '<div class="order-detail-layout"><div class="order-main"><p class="empty-state">'+esc(t("ui.tabEmptyNote"))+'</p></div><div class="order-side">'+sideHtml+'</div></div>';
  var activeKey = state.view.tab || "overview";
  if(!available.some(function(d){ return d.key===activeKey; })) activeKey = available[0].key;

  var mainHtml = logAlertsBannerHtml(o) + '<div class="tabs" role="tablist">';
  available.forEach(function(d){
    var on = d.key===activeKey;
    mainHtml += '<button type="button" role="tab" aria-selected="'+(on?"true":"false")+'" class="tab-btn'+(on?" on":"")+'" data-act="switchTab" data-tab="'+d.key+'" data-id="'+o.id+'">'
      + TAB_ICONS[d.key] + '<span>'+esc(t("tabs."+d.key))+'</span>'
      + ((d.count!==null && d.count!==undefined) ? '<span class="tab-count'+(d.alert?" alert":"")+'">'+esc(String(d.count))+'</span>' : '')
      + '</button>';
  });
  mainHtml += '</div>';
  mainHtml += '<div role="tabpanel">' + tab[activeKey] + '</div>';

  html += '<div class="order-detail-layout"><div class="order-main">'+mainHtml+'</div><div class="order-side">'+sideHtml+'</div></div>';
  return html;
}
function accLabel(s){ return t("accSection."+s); }

function journeyHtml(idx){
  var stops = t("journeyStops");
  var html = '<div class="journey-wrap"><div class="journey">';
  stops.forEach(function(label, i){
    var isCurrent = idx===i, isPassed = idx!==null && i<idx;
    if(i>0) html += '<div class="line'+((isPassed||isCurrent)?" on":"")+'"></div>';
    var iconSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+(JOURNEY_ICONS[i]||'')+'</svg>';
    html += '<div class="node"><div class="circle'+(isCurrent?" current":isPassed?" passed":"")+'"'+(isCurrent?' aria-current="step"':'')+'>'+(isPassed?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg>':iconSvg)+'</div><div class="label'+(isCurrent?" current":"")+'">'+esc(label)+'</div></div>';
  });
  html += '</div></div>';
  html += '<p class="scroll-hint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 5l-5 7 5 7M16 5l5 7-5 7"></path></svg>'+esc(t("ui.scrollHint"))+'</p>';
  if(idx===null) html += '<p class="muted" style="text-align:center;">'+esc(t("ui.journeyNotStarted"))+'</p>';
  return html;
}

/* ---------- مصفوفة Incoterms ---------- */
function viewIncotermsRef(highlightCode){
  var html = '<h3>'+esc(t("ui.incotermsRefTitle"))+'</h3><div style="overflow-x:auto;"><table><thead><tr><th>'+esc(t("ui.termColumn"))+'</th>';
  INCOTERM_ELEMENTS.forEach(function(e){ html += '<th>'+esc(t("incotermElements."+e))+'</th>'; });
  html += '</tr></thead><tbody>';
  INCOTERM_CODES.forEach(function(code){
    html += '<tr'+(code===highlightCode?' style="background:var(--info-bg);"':'')+'><td><b>'+code+'</b> · '+esc(t("incoterms."+code))+'</td>';
    INCOTERM_ELEMENTS.forEach(function(e){ html += '<td>'+esc(t("party."+INCOTERM_MATRIX[code][e]))+'</td>'; });
    html += '</tr>';
  });
  html += '</tbody></table></div>';
  return html;
}

/* ---------- المخازن ---------- */
function viewWarehouse(){
  if(!can("warehouse:view")){
    var allowed = ROLES.filter(function(r){ return (PERMISSIONS[r.key]||[]).indexOf("warehouse:view")>-1; })
      .map(function(r){ return roleLabel(r.key); }).join(" · ");
    return '<div class="page-head"><h1>'+esc(t("ui.warehouseHeading"))+'</h1></div>'
      + '<div class="empty-state">'+esc(t("ui.noWarehouseAccess"))
      + '<div class="muted" style="margin-top:.5rem;font-size:.78rem;">'+esc(t("ui.warehouseAllowedRoles"))+' '+esc(allowed)+'</div></div>';
  }
  var canEdit = can("warehouse:edit");
  var html = pageHeadHtml("warehouse", "ui.warehouseSubtitle");
  var orderOpts = '<option value="">'+esc(t("ui.noOrderOption"))+'</option>' + state.orders.map(function(o){ return '<option value="'+o.id+'">'+esc(o.orderNumber)+'</option>'; }).join("");
  state.warehouses.forEach(function(w){
    html += '<div class="card"><h3>'+esc(w.name)+'</h3><p class="muted">'+esc(w.location||"")+'</p>';
    w.entries.forEach(function(e){
      var ord = e.orderId ? findOrder(e.orderId) : null;
      html += '<div class="stage-item"><span>'+esc(e.description)+(e.quantity?(esc(t("ui.qtyPrefix"))+e.quantity):"")+(ord?(esc(t("ui.orderPrefix"))+esc(ord.orderNumber)):"")+'</span><span>';
      html += '<span class="pill '+(e.status==="STORED"?"warning":"success")+'">'+(e.status==="STORED"?esc(t("ui.stored")):esc(t("ui.released")))+'</span>';
      if(canEdit && e.status==="STORED") html += ' <button class="btn small" data-act="releaseEntry" data-w="'+w.id+'" data-e="'+e.id+'">'+esc(t("ui.releaseBtn"))+'</button>';
      html += '</span></div>';
    });
    if(w.entries.length===0) html += '<p class="empty-state">'+esc(t("ui.noGoodsStored"))+'</p>';
    if(canEdit){
      html += '<div class="row"><div class="field"><label>'+esc(t("ui.descriptionLabel"))+'</label><input id="we_desc_'+w.id+'"></div><div class="field"><label>'+esc(t("ui.quantity"))+'</label><input id="we_qty_'+w.id+'" type="number"></div><div class="field"><label>'+esc(t("ui.orderPrefix").replace(" · ",""))+'</label><select id="we_order_'+w.id+'">'+orderOpts+'</select></div><button class="btn" data-act="addEntry" data-w="'+w.id+'">'+esc(t("ui.addToWarehouse"))+'</button></div>';
    }
    html += '</div>';
  });
  return html;
}

/* ============================================================
   الإدارة المالية (بسيطة): المرتبات والسلف، والمصروفات والمشتريات
   بيانات محفوظة داخل state.finance مع بقية بيانات المنظومة (تُنسخ احتياطيًا معها)
   ============================================================ */
I18N.ar.nav.finance = "الإدارة المالية";
I18N.en.nav.finance = "Finance";
I18N.zh.nav.finance = "财务";
I18N.ar.fin = {
  subtitle:"المرتبات والسلف، والمصروفات والمشتريات",
  noAccess:"هذا القسم للإدارة المالية والخزينة فقط.",
  tabPayroll:"المرتبات والسلف", tabExpenses:"المصروفات والمشتريات",
  subSheet:"كشف الشهر", subEmployees:"الموظفون", subAdvances:"السلف",
  prev:"السابق", next:"التالي",
  noMonth:"لا يوجد كشف لهذا الشهر بعد.", openMonth:"فتح كشف الشهر", needEmployee:"أضف موظفًا واحدًا على الأقل من تبويب الموظفين أولًا.",
  monthExists:"كشف هذا الشهر موجود بالفعل.", monthOpened:"فُتح كشف الشهر",
  employee:"الموظف", job:"الوظيفة", phone:"الهاتف", salary:"المرتب", currency:"العملة", bonus:"مكافآت/بدلات", deductions:"خصومات",
  advanceDeduct:"خصم سلفة", note:"ملاحظة", net:"الصافي", save:"حفظ", saved:"حُفظ", delete:"حذف", print:"طباعة / حفظ PDF",
  draft:"مسودة — لم يُصرف", paid:"تم الصرف", paidOn:"صُرف بتاريخ", lockedNote:"الكشف مقفل؛ أي تصحيح يُكتب كمكافأة أو خصم في الشهر التالي.",
  totalNet:"إجمالي الصافي المطلوب صرفه", syncNew:"إضافة الموظفين الجدد للكشف", nothingToSync:"كل الموظفين موجودون في الكشف.", synced:"أُضيف {n} موظف للكشف",
  confirmPay:"بعد التأكيد يُقفل الكشف وتُخصم السلف نهائيًا. متابعة؟", confirmPayBtn:"تأكيد الصرف وإقفال الكشف", payDone:"سُجّل الصرف وأُقفل الكشف",
  deleteMonth:"حذف الكشف", confirmDeleteMonth:"حذف كشف هذا الشهر؟",
  negNet:"الصافي سالب: الخصومات والسلفة أكبر من المرتب.", advTooMuch:"المخصوم أكبر من رصيد سلف الموظف المتبقي.", negValue:"القيم لا يمكن أن تكون سالبة.",
  addEmployee:"إضافة موظف", name:"الاسم", monthlySalary:"المرتب الشهري", add:"إضافة", active:"يعمل", inactive:"موقوف", stop:"إيقاف", activate:"تفعيل",
  needName:"اكتب اسم الموظف.", needSalary:"اكتب المرتب (رقم أكبر من صفر).", empAdded:"أُضيف الموظف", empSaved:"حُفظت بيانات الموظف", noEmployees:"لا يوجد موظفون بعد.",
  addAdvance:"تسجيل سلفة", amount:"المبلغ", date:"التاريخ", installment:"القسط الشهري (اختياري)",
  installmentHint:"فارغ = تُخصم كاملة من أول مرتب بعد شهر السلفة", chooseEmployee:"اختر الموظف", needAmount:"اكتب مبلغ السلفة.", needDate:"اختر التاريخ.",
  badInstallment:"القسط رقم أكبر من صفر ولا يتجاوز مبلغ السلفة، أو اتركه فارغًا.", advAdded:"سُجّلت السلفة", advDeleted:"حُذفت السلفة",
  advCol:"الخصم", monthly:"شهريًا", full:"كاملة", repaid:"المسدَّد", remaining:"المتبقي", settled:"سُدِّدت", noAdvances:"لا توجد سلف.", unpaidAdv:"سلف غير مسدَّدة",
  cannotDeleteAdv:"لا يمكن حذف سلفة بدأ خصمها.", confirmDeleteAdv:"حذف هذه السلفة؟",
  newRecord:"تسجيل جديد", kind:"النوع", expense:"مصروف", purchase:"مشترى", description:"الوصف", supplier:"المورد / الجهة", payment:"الدفع", cash:"نقدًا", bank:"بنك",
  linkOrder:"ربط بطلبية (اختياري)", none:"بدون", notes:"ملاحظات", all:"الكل", expenses:"المصروفات", purchases:"المشتريات",
  needDesc:"اكتب الوصف.", needExpAmount:"اكتب المبلغ (رقم أكبر من صفر).", expAdded:"سُجّل", expDeleted:"حُذف السجل", confirmDeleteExp:"حذف هذا السجل؟",
  monthTotal:"إجمالي الشهر", noExpenses:"لا توجد سجلات في هذا الشهر.", order:"الطلبية",
  overviewHint:"كل عملة تُجمع منفصلة (لا تحويل بين العملات)."
};
I18N.en.fin = {
  subtitle:"Salaries & advances, expenses & purchases",
  noAccess:"This section is for Finance and Treasury only.",
  tabPayroll:"Salaries & Advances", tabExpenses:"Expenses & Purchases",
  subSheet:"Month sheet", subEmployees:"Employees", subAdvances:"Advances",
  prev:"Previous", next:"Next",
  noMonth:"No sheet for this month yet.", openMonth:"Open month sheet", needEmployee:"Add at least one employee first (Employees tab).",
  monthExists:"This month's sheet already exists.", monthOpened:"Month sheet opened",
  employee:"Employee", job:"Job title", phone:"Phone", salary:"Salary", currency:"Currency", bonus:"Bonus / allowances", deductions:"Deductions",
  advanceDeduct:"Advance deduction", note:"Note", net:"Net", save:"Save", saved:"Saved", delete:"Delete", print:"Print / Save PDF",
  draft:"Draft — not paid", paid:"Paid", paidOn:"Paid on", lockedNote:"The sheet is locked; corrections go in next month as a bonus or deduction.",
  totalNet:"Total net to pay", syncNew:"Add new employees to the sheet", nothingToSync:"All employees are already in the sheet.", synced:"{n} employee(s) added",
  confirmPay:"After confirming, the sheet is locked and advances are deducted for good. Continue?", confirmPayBtn:"Confirm payment & lock", payDone:"Payment recorded and sheet locked",
  deleteMonth:"Delete sheet", confirmDeleteMonth:"Delete this month's sheet?",
  negNet:"Net is negative: deductions and advance exceed the salary.", advTooMuch:"Deduction is more than the employee's remaining advance balance.", negValue:"Values cannot be negative.",
  addEmployee:"Add employee", name:"Name", monthlySalary:"Monthly salary", add:"Add", active:"Active", inactive:"Inactive", stop:"Deactivate", activate:"Activate",
  needName:"Enter the employee name.", needSalary:"Enter the salary (a number above zero).", empAdded:"Employee added", empSaved:"Employee saved", noEmployees:"No employees yet.",
  addAdvance:"Record an advance", amount:"Amount", date:"Date", installment:"Monthly installment (optional)",
  installmentHint:"Empty = deducted in full from the first salary after the advance month", chooseEmployee:"Choose employee", needAmount:"Enter the advance amount.", needDate:"Choose a date.",
  badInstallment:"Installment must be above zero and not exceed the advance, or leave it empty.", advAdded:"Advance recorded", advDeleted:"Advance deleted",
  advCol:"Deduction", monthly:"per month", full:"in full", repaid:"Repaid", remaining:"Remaining", settled:"Settled", noAdvances:"No advances.", unpaidAdv:"Unpaid advances",
  cannotDeleteAdv:"An advance already being deducted cannot be deleted.", confirmDeleteAdv:"Delete this advance?",
  newRecord:"New record", kind:"Type", expense:"Expense", purchase:"Purchase", description:"Description", supplier:"Supplier / party", payment:"Payment", cash:"Cash", bank:"Bank",
  linkOrder:"Link to an order (optional)", none:"None", notes:"Notes", all:"All", expenses:"Expenses", purchases:"Purchases",
  needDesc:"Enter a description.", needExpAmount:"Enter the amount (a number above zero).", expAdded:"Recorded", expDeleted:"Record deleted", confirmDeleteExp:"Delete this record?",
  monthTotal:"Month total", noExpenses:"No records this month.", order:"Order",
  overviewHint:"Each currency is totalled separately (no conversion)."
};


/* الأدوار الخمسة الفعلية */
I18N.ar.roles.logistics_team = "اللوجستيك"; I18N.ar.roles.finance_team = "الإدارة المالية"; I18N.ar.roles.senior_management = "حمودة (المدير)";
I18N.en.roles.logistics_team = "Logistics"; I18N.en.roles.finance_team = "Finance"; I18N.en.roles.senior_management = "Hamouda (Manager)";
I18N.zh.roles.logistics_team = "物流"; I18N.zh.roles.finance_team = "财务"; I18N.zh.roles.senior_management = "哈穆达（经理）";
I18N.ar.departments.FINANCE = "الإدارة المالية"; I18N.ar.departments.SENIOR_MANAGEMENT = "الإدارة العليا — حمودة";
I18N.en.departments.FINANCE = "Finance"; I18N.en.departments.SENIOR_MANAGEMENT = "Senior Management — Hamouda";
I18N.zh.departments.FINANCE = "财务"; I18N.zh.departments.SENIOR_MANAGEMENT = "高层管理 — 哈穆达";
var FIN_KINDS = ["EXPENSE","PURCHASE"];
function finRound(n){ return Math.round((Number(n)+Number.EPSILON)*100)/100; }
function finNum(v){ var n = parseFloat(String(v==null?"":v).replace(/,/g,"")); return isFinite(n) ? n : null; }
function finFmt(n){ return Number(n||0).toLocaleString("en-US",{minimumFractionDigits:2, maximumFractionDigits:2}); }
function finMoney(n, cur){ return bdi(finFmt(n)+" "+cur); }
function finToday(){ return new Date().toISOString().slice(0,10); }
function finShift(period, delta){
  var p = period.split("-"); var d = new Date(Date.UTC(+p[0], +p[1]-1+delta, 1));
  return d.toISOString().slice(0,7);
}
function finDefault(){
  var m = finToday().slice(0,7);
  return {tab:"payroll", sub:"sheet", period:m, expPeriod:m, expKind:"ALL", employees:[], months:{}, advances:[], expenses:[]};
}
function finEnsure(){
  if(!state.finance || typeof state.finance!=="object") state.finance = finDefault();
  var f = state.finance, d = finDefault();
  ["employees","advances","expenses"].forEach(function(k){ if(!Array.isArray(f[k])) f[k] = []; });
  if(!f.months || typeof f.months!=="object") f.months = {};
  ["tab","sub","period","expPeriod","expKind"].forEach(function(k){ if(!f[k]) f[k] = d[k]; });
  return f;
}
function fin(){ return finEnsure(); }
/* رئيس واحد لكل قسم: تعيين رئيس جديد ينزع الصفة عن السابق ويُخبر المستخدم */
function finSetHead(emp){
  var replaced = null;
  fin().employees.forEach(function(x){ if(x.id!==emp.id && x.dept===emp.dept && x.head){ x.head = false; replaced = x; } });
  if(replaced) toast(emp.name+" — "+tpl(t("fin.headReplaced"), {name:replaced.name}), "info");
}
function finEmp(id){ var e = fin().employees; for(var i=0;i<e.length;i++) if(e[i].id===id) return e[i]; return null; }
function finCurOptions(sel){
  return CURRENCY_KEYS.map(function(c){ return '<option value="'+c+'"'+(c===sel?" selected":"")+'>'+esc(t("currencies."+c))+'</option>'; }).join("");
}
function finSumBy(rows){
  var m = {};
  rows.forEach(function(r){ m[r.cur] = finRound((m[r.cur]||0) + r.amt); });
  return CURRENCY_KEYS.filter(function(c){ return m[c]!==undefined; }).map(function(c){ return {cur:c, total:m[c]}; });
}
function finTotalsHtml(totals, labelKey, kpiClass){
  if(!totals.length) return "";
  return '<div class="kpi-grid">' + totals.map(function(x){
    return '<div class="kpi-tile '+(kpiClass||"k-all")+'" style="cursor:default;"><div class="kpi-value fin-num">'+esc(finFmt(x.total))+' <small>'+esc(x.cur)+'</small></div><div class="kpi-label">'+esc(t(labelKey))+'</div></div>';
  }).join("") + '</div>';
}
/* رصيد السلف المتبقي، والمستحق خصمه في شهر معيّن (السلف المسجّلة في شهر أسبق فقط) */
function finAdvRemaining(empId){
  return finRound(fin().advances.filter(function(a){ return a.empId===empId; }).reduce(function(s,a){ return s + Math.max(finRound(a.amount-a.repaid),0); }, 0));
}
function finAdvDue(empId, period){
  var due = 0;
  fin().advances.forEach(function(a){
    if(a.empId!==empId) return;
    var rem = finRound(a.amount - a.repaid);
    if(rem<=0) return;
    if(a.date.slice(0,7) >= period) return;
    due += Math.min(rem, a.installment || rem);
  });
  return finRound(due);
}
function finMakeEntry(e, period){
  var adv = Math.min(finAdvDue(e.id, period), e.salary);
  return {empId:e.id, currency:e.currency, base:e.salary, bonus:0, deductions:0, advance:adv, net:finRound(e.salary-adv), note:""};
}

/* ---------- العرض ---------- */
function viewFinance(){
  if(!can("finance:manage")){
    return '<div class="page-head"><h1>'+esc(t("nav.finance"))+'</h1></div><div class="empty-state">'+esc(t("fin.noAccess"))+'</div>';
  }
  var f = fin();
  var html = pageHeadHtml("finance", "fin.subtitle");
  html += '<div class="tabs" role="tablist">';
  [["payroll","fin.tabPayroll"],["expenses","fin.tabExpenses"]].forEach(function(d){
    var on = f.tab===d[0];
    html += '<button type="button" role="tab" aria-selected="'+(on?"true":"false")+'" class="tab-btn'+(on?" on":"")+'" data-act="fin_tab" data-tab="'+d[0]+'">'+TAB_ICONS.finance+'<span>'+esc(t(d[1]))+'</span></button>';
  });
  html += '</div>';
  html += '<div role="tabpanel">' + (f.tab==="expenses" ? finExpensesHtml() : finPayrollHtml()) + '</div>';
  return html;
}
function finPayrollHtml(){
  var f = fin();
  var html = '<div class="row no-print" style="gap:.5rem;margin-bottom:1rem;">';
  [["sheet","fin.subSheet"],["employees","fin.subEmployees"],["advances","fin.subAdvances"]].forEach(function(d){
    html += '<button type="button" class="btn small'+(f.sub===d[0]?" primary":"")+'" data-act="fin_sub" data-sub="'+d[0]+'">'+esc(t(d[1]))+'</button>';
  });
  html += '</div>';
  if(f.sub==="employees") return html + finEmployeesHtml();
  if(f.sub==="advances") return html + finAdvancesHtml();
  return html + finSheetHtml();
}
function finPeriodBar(period, which, extra){
  return '<div class="row no-print" style="gap:.5rem;margin-bottom:1rem;align-items:center;">'
    + '<button type="button" class="btn small" data-act="fin_period" data-which="'+which+'" data-d="-1">'+esc(t("fin.prev"))+'</button>'
    + '<b class="fin-num" style="font-size:1.1rem;padding:0 .5rem;">'+esc(period)+'</b>'
    + '<button type="button" class="btn small" data-act="fin_period" data-which="'+which+'" data-d="1">'+esc(t("fin.next"))+'</button>'
    + (extra||"") + '</div>';
}
function finSheetHtml(){
  var f = fin(), month = f.months[f.period];
  var paidPill = month ? '<span class="pill '+(month.status==="PAID"?"success":"warning")+'">'+esc(t(month.status==="PAID"?"fin.paid":"fin.draft"))+'</span>' : "";
  var printBtn = month ? '<button type="button" class="btn small" data-act="fin_print" style="margin-inline-start:auto;">'+esc(t("fin.print"))+'</button>' : "";
  var html = finPeriodBar(f.period, "payroll", paidPill + printBtn);
  if(!month){
    html += '<div class="card"><p class="empty-state">'+esc(t("fin.noMonth"))+'</p><div class="row" style="justify-content:center;"><button type="button" class="btn primary" data-act="fin_openMonth">'+esc(t("fin.openMonth"))+'</button></div></div>';
    return html;
  }
  var draft = month.status==="DRAFT";
  html += '<div class="card" style="overflow-x:auto;"><table><thead><tr>'
    + '<th>'+esc(t("fin.employee"))+'</th><th>'+esc(t("fin.salary"))+'</th><th>'+esc(t("fin.bonus"))+'</th><th>'+esc(t("fin.deductions"))+'</th><th>'+esc(t("fin.advanceDeduct"))+'</th><th>'+esc(t("fin.note"))+'</th><th>'+esc(t("fin.net"))+'</th><th class="no-print"></th></tr></thead><tbody>';
  month.entries.forEach(function(en){
    var emp = finEmp(en.empId);
    var name = emp ? emp.name : "—";
    var id = en.empId;
    html += '<tr><td><b>'+esc(name)+'</b></td><td class="fin-num">'+esc(finFmt(en.base))+' <small>'+esc(en.currency)+'</small></td>';
    if(draft){
      html += '<td><input class="fin-in" id="fin_b_'+id+'" type="number" step="0.01" min="0" value="'+esc(en.bonus)+'"></td>'
        + '<td><input class="fin-in" id="fin_d_'+id+'" type="number" step="0.01" min="0" value="'+esc(en.deductions)+'"></td>'
        + '<td><input class="fin-in" id="fin_a_'+id+'" type="number" step="0.01" min="0" value="'+esc(en.advance)+'"></td>'
        + '<td><input class="fin-in" id="fin_n_'+id+'" value="'+esc(en.note)+'"></td>';
    } else {
      html += '<td class="fin-num">'+esc(finFmt(en.bonus))+'</td><td class="fin-num">'+esc(finFmt(en.deductions))+'</td><td class="fin-num">'+esc(finFmt(en.advance))+'</td><td>'+esc(en.note)+'</td>';
    }
    html += '<td class="fin-num"><b>'+esc(finFmt(en.net))+'</b> <small>'+esc(en.currency)+'</small></td>';
    html += '<td class="no-print">' + (draft ? '<button type="button" class="btn small" data-act="fin_saveEntry" data-emp="'+id+'">'+esc(t("fin.save"))+'</button>' : '') + '</td></tr>';
  });
  html += '</tbody></table></div>';
  html += finTotalsHtml(finSumBy(month.entries.map(function(en){ return {cur:en.currency, amt:en.net}; })), "fin.totalNet", "k-done");
  if(!draft){
    html += '<p class="muted">'+esc(t("fin.paidOn"))+' '+bdi(fmtDate(month.paidAt))+'. '+esc(t("fin.lockedNote"))+'</p>';
  } else {
    var have = {}; month.entries.forEach(function(en){ have[en.empId]=true; });
    var missing = fin().employees.filter(function(e){ return e.active && !have[e.id]; }).length;
    html += '<div class="row no-print" style="gap:.6rem;">';
    if(missing) html += '<button type="button" class="btn" data-act="fin_syncMonth">'+esc(t("fin.syncNew"))+' ('+missing+')</button>';
    html += '<button type="button" class="btn primary" data-act="fin_markPaid">'+esc(t("fin.confirmPayBtn"))+'</button>';
    html += '<button type="button" class="btn" data-act="fin_deleteMonth">'+esc(t("fin.deleteMonth"))+'</button></div>';
  }
  return html;
}
function finEmployeesHtml(){
  var f = fin();
  var html = '<div class="card"><h3>'+esc(t("fin.addEmployee"))+'</h3><div class="row">'
    + '<div class="field"><label>'+esc(t("fin.name"))+' *</label><input id="fin_en_name"></div>'
    + '<div class="field"><label>'+esc(t("fin.job"))+'</label><input id="fin_en_job"></div>'
    + '<div class="field"><label>'+esc(t("fin.dept"))+'</label><select id="fin_en_dept">'+orgDeptOptions("")+'</select><label style="flex-direction:row;align-items:center;gap:.4rem;margin-top:.3rem;font-size:.75rem;"><input type="checkbox" id="fin_en_head" style="width:auto;"> '+esc(t("fin.isHead"))+'</label></div>'
    + '<div class="field"><label>'+esc(t("fin.monthlySalary"))+' *</label><input id="fin_en_salary" type="number" step="0.01" min="0"></div>'
    + '<div class="field"><label>'+esc(t("fin.currency"))+'</label><select id="fin_en_cur">'+finCurOptions("LYD")+'</select></div>'
    + '<div class="field"><label>'+esc(t("fin.phone"))+'</label><input id="fin_en_phone" dir="ltr"></div>'
    + '<button type="button" class="btn primary" data-act="fin_addEmp">'+esc(t("fin.add"))+'</button></div></div>';
  if(!f.employees.length) return html + '<p class="empty-state">'+esc(t("fin.noEmployees"))+'</p>';
  html += '<div class="card" style="overflow-x:auto;"><table><thead><tr><th>'+esc(t("fin.name"))+'</th><th>'+esc(t("fin.job"))+'</th><th>'+esc(t("fin.dept"))+'</th><th>'+esc(t("fin.salary"))+'</th><th>'+esc(t("fin.currency"))+'</th><th>'+esc(t("fin.phone"))+'</th><th></th></tr></thead><tbody>';
  f.employees.forEach(function(e){
    html += '<tr style="'+(e.active?"":"opacity:.55;")+'">'
      + '<td><input class="fin-in" id="fin_ee_name_'+e.id+'" value="'+esc(e.name)+'"></td>'
      + '<td><input class="fin-in" id="fin_ee_job_'+e.id+'" value="'+esc(e.job||"")+'"></td>'
      + '<td><select class="fin-in" id="fin_ee_dept_'+e.id+'">'+orgDeptOptions(e.dept||"")+'</select><label style="display:flex;align-items:center;gap:.35rem;margin-top:.3rem;font-size:.72rem;"><input type="checkbox" id="fin_ee_head_'+e.id+'"'+(e.head?" checked":"")+'> '+esc(t("fin.isHead"))+'</label></td>'
      + '<td><input class="fin-in" id="fin_ee_salary_'+e.id+'" type="number" step="0.01" min="0" value="'+esc(e.salary)+'"></td>'
      + '<td><select class="fin-in" id="fin_ee_cur_'+e.id+'">'+finCurOptions(e.currency)+'</select></td>'
      + '<td><input class="fin-in" id="fin_ee_phone_'+e.id+'" dir="ltr" value="'+esc(e.phone||"")+'"></td>'
      + '<td style="white-space:nowrap;"><button type="button" class="btn small" data-act="fin_saveEmp" data-emp="'+e.id+'">'+esc(t("fin.save"))+'</button> '
      + '<button type="button" class="btn small" data-act="fin_toggleEmp" data-emp="'+e.id+'">'+esc(t(e.active?"fin.stop":"fin.activate"))+'</button></td></tr>';
  });
  return html + '</tbody></table></div>';
}
function finAdvancesHtml(){
  var f = fin();
  var actives = f.employees.filter(function(e){ return e.active; });
  var html = '<div class="card"><h3>'+esc(t("fin.addAdvance"))+'</h3><div class="row">'
    + '<div class="field"><label>'+esc(t("fin.employee"))+' *</label><select id="fin_ad_emp"><option value="">'+esc(t("fin.chooseEmployee"))+'</option>'
    + actives.map(function(e){ return '<option value="'+e.id+'">'+esc(e.name)+' ('+esc(e.currency)+')</option>'; }).join("") + '</select></div>'
    + '<div class="field"><label>'+esc(t("fin.amount"))+' *</label><input id="fin_ad_amount" type="number" step="0.01" min="0"></div>'
    + '<div class="field"><label>'+esc(t("fin.date"))+' *</label><input id="fin_ad_date" type="date" value="'+finToday()+'"></div>'
    + '<div class="field"><label>'+esc(t("fin.installment"))+'</label><input id="fin_ad_inst" type="number" step="0.01" min="0"><span class="muted" style="font-size:.7rem;">'+esc(t("fin.installmentHint"))+'</span></div>'
    + '<div class="field"><label>'+esc(t("fin.note"))+'</label><input id="fin_ad_note"></div>'
    + '<button type="button" class="btn primary" data-act="fin_addAdv">'+esc(t("fin.add"))+'</button></div></div>';
  var open = f.advances.filter(function(a){ return finRound(a.amount-a.repaid)>0; });
  html += finTotalsHtml(finSumBy(open.map(function(a){ var e = finEmp(a.empId); return {cur:e?e.currency:"LYD", amt:finRound(a.amount-a.repaid)}; })), "fin.unpaidAdv", "k-late");
  if(!f.advances.length) return html + '<p class="empty-state">'+esc(t("fin.noAdvances"))+'</p>';
  html += '<div class="card" style="overflow-x:auto;"><table><thead><tr><th>'+esc(t("fin.employee"))+'</th><th>'+esc(t("fin.date"))+'</th><th>'+esc(t("fin.amount"))+'</th><th>'+esc(t("fin.advCol"))+'</th><th>'+esc(t("fin.repaid"))+'</th><th>'+esc(t("fin.remaining"))+'</th><th>'+esc(t("fin.note"))+'</th><th class="no-print"></th></tr></thead><tbody>';
  f.advances.slice().sort(function(a,b){ return a.date < b.date ? 1 : -1; }).forEach(function(a){
    var e = finEmp(a.empId), cur = e ? e.currency : "";
    var rem = finRound(a.amount - a.repaid);
    html += '<tr><td>'+esc(e?e.name:"—")+'</td><td class="fin-num">'+esc(a.date)+'</td><td class="fin-num">'+esc(finFmt(a.amount))+' <small>'+esc(cur)+'</small></td>'
      + '<td>'+(a.installment ? esc(finFmt(a.installment))+' '+esc(t("fin.monthly")) : esc(t("fin.full")))+'</td>'
      + '<td class="fin-num">'+esc(finFmt(a.repaid))+'</td>'
      + '<td class="fin-num">'+(rem>0 ? '<b>'+esc(finFmt(rem))+'</b>' : '<span class="pill success">'+esc(t("fin.settled"))+'</span>')+'</td>'
      + '<td>'+esc(a.note||"")+'</td>'
      + '<td class="no-print">'+(a.repaid===0 ? '<button type="button" class="btn small" data-act="fin_delAdv" data-adv="'+a.id+'">'+esc(t("fin.delete"))+'</button>' : '')+'</td></tr>';
  });
  return html + '</tbody></table></div>';
}
function finExpensesHtml(){
  var f = fin();
  var orderOpts = '<option value="">'+esc(t("fin.none"))+'</option>' + state.orders.map(function(o){ return '<option value="'+o.id+'">'+esc(o.orderNumber)+' — '+esc(o.customer.name)+'</option>'; }).join("");
  var html = '<div class="card no-print"><h3>'+esc(t("fin.newRecord"))+'</h3><div class="row">'
    + '<div class="field"><label>'+esc(t("fin.kind"))+' *</label><select id="fin_x_kind"><option value="EXPENSE">'+esc(t("fin.expense"))+'</option><option value="PURCHASE">'+esc(t("fin.purchase"))+'</option></select></div>'
    + '<div class="field"><label>'+esc(t("fin.date"))+' *</label><input id="fin_x_date" type="date" value="'+finToday()+'"></div>'
    + '<div class="field" style="flex:2;min-width:14rem;"><label>'+esc(t("fin.description"))+' *</label><input id="fin_x_desc"></div>'
    + '<div class="field"><label>'+esc(t("fin.supplier"))+'</label><input id="fin_x_supplier"></div>'
    + '<div class="field"><label>'+esc(t("fin.amount"))+' *</label><input id="fin_x_amount" type="number" step="0.01" min="0"></div>'
    + '<div class="field"><label>'+esc(t("fin.currency"))+'</label><select id="fin_x_cur">'+finCurOptions("LYD")+'</select></div>'
    + '<div class="field"><label>'+esc(t("fin.payment"))+'</label><select id="fin_x_pay"><option value="">—</option><option value="CASH">'+esc(t("fin.cash"))+'</option><option value="BANK">'+esc(t("fin.bank"))+'</option></select></div>'
    + '<div class="field"><label>'+esc(t("fin.linkOrder"))+'</label><select id="fin_x_order">'+orderOpts+'</select></div>'
    + '<div class="field" style="flex:2;min-width:14rem;"><label>'+esc(t("fin.notes"))+'</label><input id="fin_x_notes"></div>'
    + '<button type="button" class="btn primary" data-act="fin_addExp">'+esc(t("fin.add"))+'</button></div></div>';
  var kindBtns = [["ALL","fin.all"],["EXPENSE","fin.expenses"],["PURCHASE","fin.purchases"]].map(function(d){
    return '<button type="button" class="btn small'+(f.expKind===d[0]?" primary":"")+'" data-act="fin_expKind" data-kind="'+d[0]+'">'+esc(t(d[1]))+'</button>';
  }).join(" ");
  var printBtn = '<button type="button" class="btn small" data-act="fin_print" style="margin-inline-start:auto;">'+esc(t("fin.print"))+'</button>';
  html += finPeriodBar(f.expPeriod, "expenses", '<span style="margin-inline-start:1rem;display:inline-flex;gap:.4rem;">'+kindBtns+'</span>'+printBtn);
  var list = f.expenses.filter(function(x){ return x.date.slice(0,7)===f.expPeriod && (f.expKind==="ALL" || x.kind===f.expKind); })
    .sort(function(a,b){ return a.date < b.date ? 1 : (a.date > b.date ? -1 : 0); });
  html += finTotalsHtml(finSumBy(list.map(function(x){ return {cur:x.currency, amt:x.amount}; })), "fin.monthTotal", "k-all");
  if(!list.length) return html + '<p class="empty-state">'+esc(t("fin.noExpenses"))+'</p>';
  html += '<div class="card" style="overflow-x:auto;"><table><thead><tr><th>'+esc(t("fin.date"))+'</th><th>'+esc(t("fin.kind"))+'</th><th>'+esc(t("fin.description"))+'</th><th>'+esc(t("fin.supplier"))+'</th><th>'+esc(t("fin.amount"))+'</th><th>'+esc(t("fin.payment"))+'</th><th>'+esc(t("fin.order"))+'</th><th class="no-print"></th></tr></thead><tbody>';
  list.forEach(function(x){
    var ord = x.orderId ? findOrder(x.orderId) : null;
    html += '<tr><td class="fin-num">'+esc(x.date)+'</td>'
      + '<td><span class="pill '+(x.kind==="PURCHASE"?"info":"neutral")+'">'+esc(t(x.kind==="PURCHASE"?"fin.purchase":"fin.expense"))+'</span></td>'
      + '<td>'+esc(x.description)+(x.notes?'<div class="muted" style="font-size:.72rem;">'+esc(x.notes)+'</div>':"")+'</td>'
      + '<td>'+esc(x.supplier||"—")+'</td>'
      + '<td class="fin-num"><b>'+esc(finFmt(x.amount))+'</b> <small>'+esc(x.currency)+'</small></td>'
      + '<td>'+(x.payment ? esc(t(x.payment==="CASH"?"fin.cash":"fin.bank")) : "—")+'</td>'
      + '<td>'+(ord ? esc(ord.orderNumber) : "—")+'</td>'
      + '<td class="no-print"><button type="button" class="btn small" data-act="fin_delExp" data-x="'+x.id+'">'+esc(t("fin.delete"))+'</button></td></tr>';
  });
  return html + '</tbody></table></div>';
}

/* ---------- الإجراءات ---------- */
function finVal(id){ var el = document.getElementById(id); return el ? el.value.trim() : ""; }
function finAct(act, el){
  if(!can("finance:manage")) return;
  var f = fin();
  var emp = el.getAttribute("data-emp");
  if(act==="fin_tab"){ f.tab = el.getAttribute("data-tab")==="expenses" ? "expenses" : "payroll"; saveState(); renderMain(); }
  else if(act==="fin_sub"){ f.sub = el.getAttribute("data-sub") || "sheet"; saveState(); renderMain(); }
  else if(act==="fin_period"){
    var d = parseInt(el.getAttribute("data-d"), 10) || 0;
    if(el.getAttribute("data-which")==="expenses") f.expPeriod = finShift(f.expPeriod, d); else f.period = finShift(f.period, d);
    saveState(); renderMain();
  }
  else if(act==="fin_expKind"){ f.expKind = el.getAttribute("data-kind") || "ALL"; saveState(); renderMain(); }
  else if(act==="fin_print"){ window.print(); }

  else if(act==="fin_addEmp"){
    var name = finVal("fin_en_name"), salary = finNum(finVal("fin_en_salary"));
    if(!name){ toast(t("fin.needName"), "critical"); return; }
    if(salary===null || salary<=0){ toast(t("fin.needSalary"), "critical"); return; }
    var e = {id:uid(), name:name, job:finVal("fin_en_job"), dept:finVal("fin_en_dept"), head:!!(document.getElementById("fin_en_head") && document.getElementById("fin_en_head").checked), phone:finVal("fin_en_phone"), salary:salary, currency:finVal("fin_en_cur")||"LYD", active:true};
    if(e.head && !e.dept){ toast(t("fin.needDeptForHead"), "critical"); return; }
    if(e.head) finSetHead(e);
    f.employees.push(e);
    log("FinEmployee", e.name, "CREATE");
    saveState(); toast(t("fin.empAdded"), "success"); renderMain();
  }
  else if(act==="fin_saveEmp"){
    var em = finEmp(emp); if(!em) return;
    var nm = finVal("fin_ee_name_"+emp), sal = finNum(finVal("fin_ee_salary_"+emp));
    if(!nm){ toast(t("fin.needName"), "critical"); return; }
    if(sal===null || sal<=0){ toast(t("fin.needSalary"), "critical"); return; }
    var newDept = finVal("fin_ee_dept_"+emp), wantHead = !!(document.getElementById("fin_ee_head_"+emp) && document.getElementById("fin_ee_head_"+emp).checked);
    if(wantHead && !newDept){ toast(t("fin.needDeptForHead"), "critical"); return; }
    var oldSalary = em.salary, oldCur = em.currency;
    em.name = nm; em.job = finVal("fin_ee_job_"+emp); em.dept = newDept; em.head = wantHead; if(wantHead) finSetHead(em); em.phone = finVal("fin_ee_phone_"+emp); em.salary = sal; em.currency = finVal("fin_ee_cur_"+emp) || em.currency;
    if(oldSalary!==em.salary || oldCur!==em.currency) log("FinEmployee", em.name, "SALARY_CHANGE", {from:oldSalary+" "+oldCur, to:em.salary+" "+em.currency});
    saveState(); toast(t("fin.empSaved"), "success"); renderMain();
  }
  else if(act==="fin_toggleEmp"){
    var em2 = finEmp(emp); if(!em2) return;
    em2.active = !em2.active; log("FinEmployee", em2.name, em2.active ? "ACTIVATE" : "DEACTIVATE");
    saveState(); renderMain();
  }

  else if(act==="fin_openMonth"){
    if(f.months[f.period]){ toast(t("fin.monthExists"), "critical"); return; }
    var actives = f.employees.filter(function(x){ return x.active; });
    if(!actives.length){ toast(t("fin.needEmployee"), "critical"); return; }
    f.months[f.period] = {status:"DRAFT", paidAt:null, paidBy:"", entries:actives.map(function(x){ return finMakeEntry(x, f.period); })};
    log("FinPayroll", f.period, "OPEN"); saveState(); toast(t("fin.monthOpened")+" "+f.period, "success"); renderMain();
  }
  else if(act==="fin_syncMonth"){
    var mo = f.months[f.period]; if(!mo || mo.status!=="DRAFT") return;
    var have = {}; mo.entries.forEach(function(en){ have[en.empId]=true; });
    var add = f.employees.filter(function(x){ return x.active && !have[x.id]; });
    if(!add.length){ toast(t("fin.nothingToSync"), "info"); return; }
    add.forEach(function(x){ mo.entries.push(finMakeEntry(x, f.period)); });
    saveState(); toast(tpl(t("fin.synced"), {n:add.length}), "success"); renderMain();
  }
  else if(act==="fin_saveEntry"){
    var mon = f.months[f.period]; if(!mon || mon.status!=="DRAFT") return;
    var en = null; mon.entries.forEach(function(x){ if(x.empId===emp) en = x; }); if(!en) return;
    var bonus = finNum(finVal("fin_b_"+emp)) || 0, ded = finNum(finVal("fin_d_"+emp)) || 0, adv = finNum(finVal("fin_a_"+emp)) || 0;
    if(bonus<0 || ded<0 || adv<0){ toast(t("fin.negValue"), "critical"); return; }
    if(adv > finAdvRemaining(emp)){ toast(t("fin.advTooMuch"), "critical"); return; }
    var net = finRound(en.base + bonus - ded - adv);
    if(net<0){ toast(t("fin.negNet"), "critical"); return; }
    en.bonus = bonus; en.deductions = ded; en.advance = adv; en.net = net; en.note = finVal("fin_n_"+emp);
    saveState(); toast(t("fin.saved"), "success"); renderMain();
  }
  else if(act==="fin_markPaid"){
    var mp = f.months[f.period]; if(!mp || mp.status!=="DRAFT") return;
    confirmDialog(t("fin.confirmPay"), function(){
      var m2 = fin().months[fin().period]; if(!m2 || m2.status!=="DRAFT") return;
      m2.entries.forEach(function(en){
        var left = en.advance;
        fin().advances.filter(function(a){ return a.empId===en.empId; }).sort(function(a,b){ return a.date < b.date ? -1 : 1; }).forEach(function(a){
          if(left<=0) return;
          var rem = finRound(a.amount - a.repaid); if(rem<=0) return;
          var take = Math.min(rem, left); a.repaid = finRound(a.repaid + take); left = finRound(left - take);
        });
      });
      m2.status = "PAID"; m2.paidAt = nowIso(); m2.paidBy = state.currentUsername;
      log("FinPayroll", fin().period, "PAID"); saveState(); toast(t("fin.payDone"), "success"); renderMain();
    }, {title: t("fin.confirmPayBtn"), confirmText: t("fin.confirmPayBtn")});
  }
  else if(act==="fin_deleteMonth"){
    var md = f.months[f.period]; if(!md || md.status!=="DRAFT") return;
    confirmDialog(t("fin.confirmDeleteMonth"), function(){
      delete fin().months[fin().period]; log("FinPayroll", fin().period, "DELETE"); saveState(); renderMain();
    }, {title: t("fin.deleteMonth"), confirmText: t("fin.delete")});
  }

  else if(act==="fin_addAdv"){
    var em3 = finEmp(finVal("fin_ad_emp"));
    if(!em3){ toast(t("fin.chooseEmployee"), "critical"); return; }
    var amt = finNum(finVal("fin_ad_amount")), dt = finVal("fin_ad_date"), inst = finVal("fin_ad_inst");
    if(amt===null || amt<=0){ toast(t("fin.needAmount"), "critical"); return; }
    if(!dt){ toast(t("fin.needDate"), "critical"); return; }
    var instN = null;
    if(inst){ instN = finNum(inst); if(instN===null || instN<=0 || instN>amt){ toast(t("fin.badInstallment"), "critical"); return; } }
    f.advances.push({id:uid(), empId:em3.id, date:dt, amount:amt, installment:instN, repaid:0, note:finVal("fin_ad_note")});
    log("FinAdvance", em3.name, "CREATE", {amount:amt});
    saveState(); toast(t("fin.advAdded"), "success"); renderMain();
  }
  else if(act==="fin_delAdv"){
    var aid = el.getAttribute("data-adv");
    var adv2 = null; f.advances.forEach(function(a){ if(a.id===aid) adv2 = a; });
    if(!adv2) return;
    if(adv2.repaid>0){ toast(t("fin.cannotDeleteAdv"), "critical"); return; }
    confirmDialog(t("fin.confirmDeleteAdv"), function(){
      var ff = fin(); ff.advances = ff.advances.filter(function(a){ return a.id!==aid; });
      log("FinAdvance", aid, "DELETE"); saveState(); toast(t("fin.advDeleted"), "success"); renderMain();
    }, {title: t("fin.delete"), confirmText: t("fin.delete")});
  }

  else if(act==="fin_addExp"){
    var desc = finVal("fin_x_desc"), xa = finNum(finVal("fin_x_amount")), xd = finVal("fin_x_date");
    if(!desc){ toast(t("fin.needDesc"), "critical"); return; }
    if(xa===null || xa<=0){ toast(t("fin.needExpAmount"), "critical"); return; }
    if(!xd){ toast(t("fin.needDate"), "critical"); return; }
    var kind = finVal("fin_x_kind"); if(FIN_KINDS.indexOf(kind)===-1) kind = "EXPENSE";
    f.expenses.push({id:uid(), date:xd, kind:kind, description:desc, supplier:finVal("fin_x_supplier"), amount:xa, currency:finVal("fin_x_cur")||"LYD", payment:finVal("fin_x_pay"), orderId:finVal("fin_x_order")||null, notes:finVal("fin_x_notes"), createdBy:state.currentUsername});
    f.expPeriod = xd.slice(0,7);
    log("FinExpense", desc, "CREATE", {amount:xa});
    saveState(); toast(t("fin.expAdded"), "success"); renderMain();
  }
  else if(act==="fin_delExp"){
    var xid = el.getAttribute("data-x");
    confirmDialog(t("fin.confirmDeleteExp"), function(){
      var ff = fin(); ff.expenses = ff.expenses.filter(function(x){ return x.id!==xid; });
      log("FinExpense", xid, "DELETE"); saveState(); toast(t("fin.expDeleted"), "success"); renderMain();
    }, {title: t("fin.delete"), confirmText: t("fin.delete")});
  }
}

/* ============================================================
   الهيكل التنظيمي — يُبنى من الأقسام الثابتة (حسب مخطط حمودة) والموظفين المعيَّنين عليها
   ============================================================ */
I18N.ar.nav.org = "الهيكل التنظيمي"; I18N.en.nav.org = "Organization Chart"; I18N.zh.nav.org = "组织架构";
I18N.ar.org = {
  subtitle:"أقسام حمودة والموظفون في كل قسم. يُعيَّن القسم لكل موظف من الإدارة المالية ← المرتبات والسلف ← الموظفون.",
  noOne:"لا موظفين معيَّنين", unassigned:"موظفون بلا قسم", unassignedHint:"عيّن قسمًا لكل واحد منهم من الإدارة المالية ← الموظفون.",
  people:"موظف", totalLabel:"إجمالي الموظفين", print:"طباعة / حفظ PDF", emptyAll:"لا يوجد موظفون بعد. أضفهم من الإدارة المالية ← المرتبات والسلف ← الموظفون.",
  nodes:{hamouda:"حمودة (المدير)", finance:"الإدارة المالية", accounts:"قسم الحسابات", acc_mfg:"حسابات التصنيع", acc_com:"حسابات التجارة", acc_log:"حسابات اللوجستيك", treasury:"قسم الخزينة",
    manufacturing:"قسم التصنيع", commercial:"القسم التجاري", logistics:"قسم خدمات اللوجستيك", expert:"خبير الشحن المحترف", fcl:"مكتب حجز FCL", lcl:"مكتب حجز LCL", bb:"مكتب حجز BB",
    air:"مكتب حجز الشحن الجوي", docs:"المستندات (Documentation)", warehouse:"المخازن"},
  notes:{expert:"يُعيَّن ويُستعان به عند الحاجة", fcl:"شحن حاوية كاملة — يستخدم House Bill of Lading", lcl:"شحن جزئي / تجميع حاويات",
    bb:"Break Bulk: شحنات غير معبأة في حاويات — بالاشتراك مع مجموعات سمسرة للبضائع والسفن — مرتبط بـ Bonus", air:"يتطلب استخراج ترخيص الشحن الجوي"}
};
I18N.en.org = {
  subtitle:"Hamouda's departments and the staff in each. Assign a department per employee from Finance → Salaries & Advances → Employees.",
  noOne:"No staff assigned", unassigned:"Staff without a department", unassignedHint:"Assign each one a department from Finance → Employees.",
  people:"staff", totalLabel:"Total staff", print:"Print / Save PDF", emptyAll:"No employees yet. Add them from Finance → Salaries & Advances → Employees.",
  nodes:{hamouda:"Hamouda (Manager)", finance:"Finance", accounts:"Accounts", acc_mfg:"Manufacturing Accounts", acc_com:"Commercial Accounts", acc_log:"Logistics Accounts", treasury:"Treasury",
    manufacturing:"Manufacturing", commercial:"Commercial", logistics:"Logistics Services", expert:"Professional Shipping Expert", fcl:"FCL Booking Office", lcl:"LCL Booking Office", bb:"BB Booking Office",
    air:"Air Freight Booking Office", docs:"Documentation", warehouse:"Warehouses"},
  notes:{expert:"Appointed and consulted when needed", fcl:"Full container load — uses House Bill of Lading", lcl:"Less than container load / consolidation",
    bb:"Break Bulk: cargo not packed in containers — with brokerage groups — linked to Bonus", air:"Requires an air freight licence"}
};
I18N.ar.fin.dept = "القسم"; I18N.ar.fin.noDept = "— بدون قسم —";
I18N.ar.fin.isHead = "رئيس القسم"; I18N.ar.fin.needDeptForHead = "اختر القسم أولًا ليكون الموظف رئيسه."; I18N.ar.fin.headReplaced = "صار رئيسًا للقسم بدلًا من {name}.";
I18N.ar.org.head = "رئيس القسم"; I18N.ar.org.noHead = "لم يُحدَّد رئيس";
I18N.en.fin.dept = "Department"; I18N.en.fin.noDept = "— No department —";
I18N.en.fin.isHead = "Department head"; I18N.en.fin.needDeptForHead = "Choose the department first so the employee can head it."; I18N.en.fin.headReplaced = "Now heads the department instead of {name}.";
I18N.en.org.head = "Head"; I18N.en.org.noHead = "No head set";

var ORG_TREE = {id:"hamouda", children:[
  {id:"finance", children:[{id:"accounts", children:[{id:"acc_mfg"},{id:"acc_com"},{id:"acc_log"}]},{id:"treasury"}]},
  {id:"manufacturing"},
  {id:"commercial"},
  {id:"logistics", children:[{id:"expert"},{id:"fcl"},{id:"lcl"},{id:"bb"},{id:"air"},{id:"docs"},{id:"warehouse"}]}
]};
function orgLabel(id){ return t("org.nodes."+id); }
function orgFlat(node, depth, list){
  list = list || []; depth = depth || 0;
  list.push({id:node.id, depth:depth});
  (node.children||[]).forEach(function(c){ orgFlat(c, depth+1, list); });
  return list;
}
function orgIds(){ return orgFlat(ORG_TREE).map(function(x){ return x.id; }); }
function orgDeptOptions(selected){
  var html = '<option value="">'+esc(t("fin.noDept"))+'</option>';
  orgFlat(ORG_TREE).forEach(function(x){
    html += '<option value="'+x.id+'"'+(x.id===selected?" selected":"")+'>'+esc(new Array(x.depth+1).join("— ")+orgLabel(x.id))+'</option>';
  });
  return html;
}
function orgEmployees(id){
  return fin().employees.filter(function(e){ return e.active && e.dept===id; }).sort(function(a,b){ return ((a.head?0:1)-(b.head?0:1)) || (a.name < b.name ? -1 : 1); });
}
function orgCount(node){
  var n = orgEmployees(node.id).length;
  (node.children||[]).forEach(function(c){ n += orgCount(c); });
  return n;
}
function orgPeopleHtml(list){
  return list.map(function(e){
    return '<span class="org-emp'+(e.head?" org-head":"")+'">'+(e.head?'<em class="org-badge">'+esc(t("org.head"))+'</em>':"")+'<b>'+esc(e.name)+'</b>'+(e.job?'<small>'+esc(e.job)+'</small>':"")+'</span>';
  }).join("");
}
function orgUnitHtml(node, isDept){
  var people = orgEmployees(node.id);
  var note = I18N[state.lang] && I18N[state.lang].org && I18N[state.lang].org.notes && I18N[state.lang].org.notes[node.id];
  if(!note && I18N.ar.org.notes[node.id]) note = I18N.ar.org.notes[node.id];
  var total = orgCount(node);
  var head = isDept
    ? '<div class="org-dept-head"><h3>'+esc(orgLabel(node.id))+'</h3><span class="pill neutral">'+total+' '+esc(t("org.people"))+'</span></div>'
    : '<div class="org-unit-name">'+esc(orgLabel(node.id))+(total?' <span class="org-count">'+total+'</span>':'')+'</div>';
  var html = head;
  if(note) html += '<div class="org-note">'+esc(note)+'</div>';
  if(people.length) html += '<div class="org-people">'+orgPeopleHtml(people)+'</div>';
  else if(!(node.children||[]).length) html += '<div class="org-note" style="opacity:.7;">'+esc(t("org.noOne"))+'</div>';
  (node.children||[]).forEach(function(c){ html += '<div class="org-unit">'+orgUnitHtml(c, false)+'</div>'; });
  return html;
}
function viewOrg(){
  var f = fin();
  var ids = orgIds();
  var active = f.employees.filter(function(e){ return e.active; });
  var html = pageHeadHtml("org", "org.subtitle");
  html += '<div class="row no-print" style="margin-bottom:1rem;align-items:center;gap:.6rem;"><span class="pill info">'+esc(t("org.totalLabel"))+': '+active.length+'</span>'
    + '<button type="button" class="btn small" data-act="org_print" style="margin-inline-start:auto;">'+esc(t("org.print"))+'</button></div>';
  if(!active.length) html += '<p class="empty-state">'+esc(t("org.emptyAll"))+'</p>';
  var top = orgEmployees(ORG_TREE.id);
  html += '<div class="org-top"><div class="org-top-node"><h3>'+esc(orgLabel(ORG_TREE.id))+'</h3>'+(top.length?'<div class="org-people" style="justify-content:center;">'+orgPeopleHtml(top)+'</div>':'')+'</div></div>';
  html += '<div class="org-stem"></div><div class="org-grid">';
  ORG_TREE.children.forEach(function(d){ html += '<section class="org-dept">'+orgUnitHtml(d, true)+'</section>'; });
  html += '</div>';
  var lost = active.filter(function(e){ return ids.indexOf(e.dept)===-1; });
  if(lost.length){
    html += '<div class="card" style="margin-top:1.2rem;"><h3>'+esc(t("org.unassigned"))+' <span class="pill warning">'+lost.length+'</span></h3><p class="muted">'+esc(t("org.unassignedHint"))+'</p><div class="org-people">'+orgPeopleHtml(lost)+'</div></div>';
  }
  return html;
}

/* ---------- الإعدادات وسجل التدقيق ---------- */
function viewSettings(){
  var canManage = can("system:manage_settings"), canAudit = can("system:view_audit_log");
  var html = pageHeadHtml("settings", "ui.settingsSubtitle");
  html += '<div class="card"><h3>'+esc(t("ui.fsAutoSaveTitle"))+' <span class="pill '+(state.diskSyncConnected?(state.diskSyncNeedsPermission?"warning":"success"):"neutral")+'" style="font-size:.68rem;">'+esc(t(state.diskSyncConnected?(state.diskSyncNeedsPermission?"ui.fsNeedsPermission":"ui.fsConnectedShort"):"ui.fsNotConnectedShort"))+'</span></h3>';
  html += '<p class="muted" style="font-size:.8rem;">'+esc(t("ui.fsAutoSaveDesc"))+'</p>';
  if(!fsSupported()){
    html += '<p class="muted" style="font-size:.75rem;color:var(--warning);">'+esc(t("ui.fsNotSupported"))+'</p>';
  } else if(!state.diskSyncConnected){
    html += '<button class="btn primary" data-act="connectDiskSync">'+esc(t("ui.fsConnectBtn"))+'</button>';
  } else {
    html += '<div class="row" style="gap:.5rem;flex-wrap:wrap;align-items:center;">';
    if(state.diskSyncNeedsPermission) html += '<button class="btn warning" data-act="connectDiskSync">'+esc(t("ui.fsReconnectBtn"))+'</button>';
    html += '<button class="btn" data-act="disconnectDiskSync">'+esc(t("ui.fsDisconnectBtn"))+'</button>';
    html += '</div>';
    if(state.diskSyncLastSync) html += '<p class="muted" style="font-size:.7rem;margin-top:.5rem;">'+esc(tpl(t("ui.fsLastSyncTemplate"),{date:fmtDate(state.diskSyncLastSync)}))+'</p>';
  }
  html += '<p class="muted" style="font-size:.72rem;margin-top:.6rem;">'+esc(t("ui.fsAutoSaveNote"))+'</p>';
  html += '</div>';

  html += '<div class="card"><h3>'+esc(t("ui.notifTitle"))+' <span class="pill '+(notifStatusPillClass())+'" style="font-size:.68rem;">'+esc(t(notifStatusLabelKey()))+'</span></h3>';
  html += '<p class="muted" style="font-size:.8rem;">'+esc(t("ui.notifDesc"))+'</p>';
  if(!notificationsSupported()){
    html += '<p class="muted" style="font-size:.75rem;color:var(--warning);">'+esc(t("ui.notifNotSupported"))+'</p>';
  } else if(Notification.permission==="denied"){
    html += '<p class="muted" style="font-size:.75rem;color:var(--critical);">'+esc(t("ui.notifDeniedNote"))+'</p>';
  } else if(!state.cutoffNotifEnabled){
    html += '<button class="btn primary" data-act="enableCutoffNotif">'+esc(t("ui.notifEnableBtn"))+'</button>';
  } else {
    html += '<button class="btn" data-act="disableCutoffNotif">'+esc(t("ui.notifDisableBtn"))+'</button>';
  }
  html += '<p class="muted" style="font-size:.72rem;margin-top:.6rem;">'+esc(t("ui.notifNote"))+'</p>';
  html += '</div>';

  html += '<div class="card"><h3>'+esc(t("ui.backupTitle"))+'</h3><p class="muted" style="font-size:.8rem;">'+esc(t("ui.backupDesc"))+'</p>';
  html += '<div class="row" style="gap:.5rem;flex-wrap:wrap;align-items:center;">';
  html += '<button class="btn primary" data-act="exportBackup">'+esc(t("ui.exportBackupBtn"))+'</button>';
  html += '<label class="btn" style="cursor:pointer;margin:0;">'+esc(t("ui.importBackupBtn"))+'<input type="file" accept="application/json,.json" style="display:none;" onchange="handleImportBackupFile(this)"></label>';
  html += '</div>';
  html += '<p class="muted" style="font-size:.72rem;margin-top:.6rem;">'+esc(t("ui.backupNote"))+'</p>';
  html += '</div>';

  html += '<div class="card"><h3>'+esc(t("ui.demoDataTitle"))+'</h3>';
  html += '<p class="muted" style="font-size:.8rem;">'+esc(t("ui.demoDataDesc"))+'</p>';
  html += '<button class="btn" data-act="seedDemo">'+esc(t("ui.seedDemoBtn"))+'</button>';
  html += '<p class="muted" style="font-size:.72rem;margin-top:.6rem;">'+esc(t("ui.demoDataNote"))+'</p>';
  html += '</div>';

  if(canManage){
    html += '<div class="card"><h3>'+esc(t("ui.thresholdTitle"))+'</h3><p class="muted">'+esc(t("ui.thresholdDesc"))+'</p>';
    html += '<div class="row"><div class="field"><label>'+esc(t("ui.daysLabel"))+'</label><input id="thresholdDays" type="number" value="'+state.yellowThresholdDays+'"></div><button class="btn primary" data-act="saveThreshold">'+esc(t("ui.save"))+'</button></div></div>';
  }
  if(canAudit){
    html += '<div class="card"><h3>'+esc(t("ui.auditLogTitle"))+'</h3>';
    state.auditLog.slice(0,50).forEach(function(l){
      html += '<div class="muted" style="border-bottom:1px solid var(--border);padding:.3rem 0;"><span class="pill neutral">'+esc(l.action)+'</span> '+esc(l.entity)+'#'+esc(l.entityId)+' — '+esc(l.byRole)+' — '+bdi(l.at.slice(0,16).replace("T"," "))+'</div>';
    });
    if(state.auditLog.length===0) html += '<p class="empty-state">'+esc(t("ui.noAuditYet"))+'</p>';
    html += '</div>';
  }
  return html;
}

/* ---------- طباعة مستند ---------- */
function blBoxRow(num, arLabel, enLabel, content){
  return '<div style="display:flex;border-bottom:1px solid #bbb;padding:.55rem .9rem;gap:.7rem;">'
    + '<div style="flex:0 0 34%;min-width:0;"><span style="display:inline-block;width:1.3rem;height:1.3rem;line-height:1.3rem;text-align:center;background:#C9A227;color:#1B2458;border-radius:999px;font-size:.68rem;font-weight:700;margin-inline-end:.4rem;">'+num+'</span><b style="font-size:.82rem;">'+esc(arLabel)+'</b><br><span style="font-size:.68rem;color:#666;margin-inline-start:1.7rem;">'+esc(enLabel)+'</span></div>'
    + '<div style="flex:1;font-size:.86rem;line-height:1.5;">'+(content||'<span style="color:#999;">—</span>')+'</div>'
    + '</div>';
}

/* صندوق إقرار بارز على البوليصة الرسمية لأي بضاعة خطرة/خاصة/تحتاج تبريد — إلزامي قانونيًا في شحن البضائع الخطرة الحقيقي */
function cargoDeclarationBoxHtml(o){
  if(!o.isDangerousGoods && !o.isSpecialCargo && !o.needsReefer) return "";
  var rows = "";
  if(o.isDangerousGoods){
    rows += '<div style="margin-bottom:.3rem;display:flex;align-items:flex-start;gap:.35rem;">'+svgIcon(ICON_WARNING,"declaration-ic")+'<span><b>'+esc(t("ui.dgDeclarationTitle"))+'</b><br>'
      + '<span style="font-size:.74rem;">'+esc(t("ui.dgDeclarationNote"))+' <b>'+bdi(o.msdsNumber||'—')+'</b></span></span></div>';
  }
  if(o.isSpecialCargo){
    rows += '<div style="margin-bottom:.3rem;display:flex;align-items:flex-start;gap:.35rem;">'+svgIcon(ICON_PACKAGE,"declaration-ic")+'<span><b>'+esc(t("ui.specialCargoDeclarationTitle"))+'</b><br>'
      + '<span style="font-size:.74rem;">'+esc(o.specialCargoNote||'—')+'</span></span></div>';
  }
  if(o.needsReefer){
    rows += '<div style="display:flex;align-items:flex-start;gap:.35rem;">'+svgIcon(ICON_SNOWFLAKE,"declaration-ic")+'<span><b>'+esc(t("ui.reeferDeclarationTitle"))+'</b><br>'
      + '<span style="font-size:.74rem;">'+esc(t("ui.reeferDeclarationNote"))+' <b>'+bdi((o.reeferTempC!==null&&o.reeferTempC!=="")?(o.reeferTempC+' °C'):'—')+'</b></span></span></div>';
  }
  return '<div style="background:#fff3f3;border:2px solid #b02a2a;border-radius:6px;margin:.7rem .9rem 0;padding:.6rem .8rem;color:#7a1f1f;line-height:1.6;">'+rows+'</div>';
}
function blDocHtml(o){
  var bl = o.billOfLading || {};
  var b = o.booking || {};
  var blDoc = (o.documents||[]).filter(function(x){return x.type==="BILL_OF_LADING";})[0] || {};
  var isIssued = blDoc.status==="ISSUED";
  var pkgLine = (o.packagesCount ? esc(o.packagesCount) : '—') + (bl.packageKind ? (' '+esc(bl.packageKind)) : '');
  var goodsLine = esc(o.goodsDescriptionAr||"—") + (o.goodsDescriptionEn ? ('<br><span style="color:#555;">'+esc(o.goodsDescriptionEn)+'</span>') : '');
  var grossW = (o.grossWeightKg!==null && o.grossWeightKg!==undefined) ? bdi(o.grossWeightKg) : '—';
  var cbmV = (o.cbm!==null && o.cbm!==undefined) ? bdi(o.cbm) : '—';
  var badge = 'display:inline-block;width:1.3rem;height:1.3rem;line-height:1.3rem;text-align:center;background:#C9A227;color:#1B2458;border-radius:999px;font-size:.68rem;font-weight:700;margin-inline-end:.4rem;';

  var html = '<div dir="ltr" style="font-family:var(--font-body);max-width:800px;margin:2rem auto;padding:0;border:1px solid #bbb;color:#1a1a2e;background:#fff;">';

  html += '<div style="text-align:center;padding:.7rem;font-size:1.15rem;font-weight:700;color:#1B2458;border-bottom:1px solid #ddd;">بوليصة شحن بحري — Bill of Lading'
    + (isIssued
      ? '<div style="margin-top:.3rem;display:inline-block;background:#1e7e34;color:#fff;font-size:.65rem;font-weight:700;padding:.15rem .6rem;border-radius:999px;letter-spacing:.03em;">معتمدة وموقّعة من المالية — APPROVED &amp; SIGNED</div>'
      : '<div style="margin-top:.3rem;display:inline-block;background:#b02a2a;color:#fff;font-size:.65rem;font-weight:700;padding:.15rem .6rem;border-radius:999px;letter-spacing:.03em;">مسودة غير معتمدة — DRAFT, NOT VALID FOR RELEASE</div>')
    + '</div>';

  html += '<div style="display:flex;justify-content:space-between;align-items:flex-start;padding:.9rem 1rem;border-bottom:2px solid #1B2458;">';
  html += '<div><div style="font-size:1.05rem;font-weight:700;color:#1B2458;">'+esc(t("brandMark"))+' للنقل البحري</div><div style="font-size:.82rem;color:#555;">HAMMOUDA SEA TRANSPORT CO.</div></div>';
  html += '<div style="text-align:end;font-size:.72rem;color:#666;max-width:45%;">'+esc(t("ui.printOrderNo"))+bdi(o.orderNumber)+'<br>'+esc(t("ui.printDate"))+bdi(fmtDate(nowIso()))+'</div>';
  html += '</div>';

  html += cargoDeclarationBoxHtml(o);

  html += blBoxRow("1","الشاحن","SHIPPER", bl.shipperName ? (esc(bl.shipperName)+(o.supplierAddressCn?('<br><span style="color:#666;">'+esc(o.supplierAddressCn)+'</span>'):'')) : '');
  html += blBoxRow("2","المرسل إليه","CONSIGNEE", bl.consigneeName ? (esc(bl.consigneeName)+(bl.consigneeAddress?('<br><span style="color:#666;">'+esc(bl.consigneeAddress)+'</span>'):'')) : (o.customer.name?esc(o.customer.name):''));
  html += blBoxRow("3","الطرف المخطر","NOTIFY PARTY", bl.notifyName ? (esc(bl.notifyName)+(bl.notifyAddress?('<br><span style="color:#666;">'+esc(bl.notifyAddress)+'</span>'):'')) : '');

  html += '<div style="padding:.55rem .9rem .2rem;"><span style="'+badge+'">4</span><b style="font-size:.82rem;">تفاصيل البضاعة</b> <span style="font-size:.68rem;color:#666;">PARTICULARS FURNISHED BY SHIPPER</span></div>';
  html += '<div style="padding:0 .9rem .7rem;overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:.76rem;"><thead><tr style="background:#F5EACB;">'
    + '<th style="border:1px solid #ccc;padding:.4rem;">رقم الحاوية/الختم<br><span style="font-weight:400;">CONTAINER/SEAL NO.</span></th>'
    + '<th style="border:1px solid #ccc;padding:.4rem;">علامات وأرقام الطرود<br><span style="font-weight:400;">MARKS & NOS.</span></th>'
    + '<th style="border:1px solid #ccc;padding:.4rem;">عدد ونوع الطرود<br><span style="font-weight:400;">NO. & KIND OF PACKAGES</span></th>'
    + '<th style="border:1px solid #ccc;padding:.4rem;">وصف البضاعة<br><span style="font-weight:400;">DESCRIPTION OF GOODS</span></th>'
    + '<th style="border:1px solid #ccc;padding:.4rem;">الوزن الإجمالي، كجم<br><span style="font-weight:400;">GROSS WEIGHT, KGS</span></th>'
    + '<th style="border:1px solid #ccc;padding:.4rem;">المقاس<br><span style="font-weight:400;">MEASUREMENT, CBM</span></th>'
    + '</tr></thead><tbody>'
    + '<tr><td style="border:1px solid #ccc;padding:.4rem;text-align:center;">'+(bl.containerSealNo?bdi(bl.containerSealNo):'—')+'</td>'
    + '<td style="border:1px solid #ccc;padding:.4rem;text-align:center;">'+(bl.marksNos?esc(bl.marksNos):'—')+'</td>'
    + '<td style="border:1px solid #ccc;padding:.4rem;text-align:center;">'+bdi(pkgLine)+'</td>'
    + '<td style="border:1px solid #ccc;padding:.4rem;">'+goodsLine+'</td>'
    + '<td style="border:1px solid #ccc;padding:.4rem;text-align:center;">'+grossW+'</td>'
    + '<td style="border:1px solid #ccc;padding:.4rem;text-align:center;">'+cbmV+'</td></tr>'
    + '<tr style="font-weight:700;background:#fafafa;"><td colspan="4" style="border:1px solid #ccc;padding:.4rem;text-align:center;">TOTALS</td>'
    + '<td style="border:1px solid #ccc;padding:.4rem;text-align:center;">'+grossW+'</td>'
    + '<td style="border:1px solid #ccc;padding:.4rem;text-align:center;">'+cbmV+'</td></tr>'
    + '</tbody></table></div>';

  html += '<div style="display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #bbb;">';
  html += '<div style="padding:.6rem .9rem;border-inline-end:1px solid #bbb;">'
    + '<div style="margin-bottom:.4rem;"><span style="'+badge+'">5</span><b style="font-size:.82rem;">تفاصيل الرحلة</b> <span style="font-size:.68rem;color:#666;">VOYAGE DETAILS</span></div>'
    + '<table style="width:100%;font-size:.8rem;"><tr><td style="color:#666;padding:.15rem 0;">اسم السفينة<br>VESSEL NAME</td><td style="text-align:end;">'+(bl.vesselName?esc(bl.vesselName):'—')+'</td></tr>'
    + '<tr><td style="color:#666;padding:.15rem 0;">رقم الرحلة<br>VOYAGE NO.</td><td style="text-align:end;">'+(bl.voyageNo?bdi(bl.voyageNo):'—')+'</td></tr>'
    + '<tr><td style="color:#666;padding:.15rem 0;">ميناء التحميل<br>PORT OF LOADING</td><td style="text-align:end;">'+(bl.portOfLoading?esc(bl.portOfLoading):'—')+'</td></tr>'
    + '<tr><td style="color:#666;padding:.15rem 0;">ميناء التفريغ<br>PORT OF DISCHARGE</td><td style="text-align:end;">'+(bl.portOfDischarge?esc(bl.portOfDischarge):'—')+'</td></tr>'
    + '</table></div>';
  html += '<div style="padding:.6rem .9rem;">'
    + '<div style="margin-bottom:.4rem;"><span style="'+badge+'">6</span><b style="font-size:.82rem;">الشروط والأمور</b> <span style="font-size:.68rem;color:#666;">FREIGHT & CHARGES</span></div>'
    + '<table style="width:100%;font-size:.8rem;"><tr><td style="color:#666;padding:.15rem 0;">شروط الدفع<br>FREIGHT PAYABLE AT</td><td style="text-align:end;">'+esc(t(bl.freightPayableAt==="COLLECT"?"ui.blFreightCollect":"ui.blFreightPrepaid"))+(bl.portOfLoading?(' — '+esc(bl.portOfLoading)):'')+'</td></tr>'
    + '<tr><td style="color:#666;padding:.15rem 0;">نوع الخدمة<br>SERVICE TYPE</td><td style="text-align:end;">'+esc(t("bookingTypes."+(b.type||"FCL")))+'</td></tr>'
    + '<tr><td style="color:#666;padding:.15rem 0;">رقم البوليصة<br>B/L NO.</td><td style="text-align:end;">'+(bl.blNumber?bdi(bl.blNumber):'—')+'</td></tr>'
    + '<tr><td style="color:#666;padding:.15rem 0;">رقم الحجز<br>BOOKING NO.</td><td style="text-align:end;">'+(b.bookingNumber?bdi(b.bookingNumber):'—')+'</td></tr>'
    + '<tr><td style="color:#666;padding:.15rem 0;">تاريخ الشحن<br>SHIPPING DATE</td><td style="text-align:end;">'+(b.shippingDate?bdi(fmtDate(b.shippingDate)):'—')+'</td></tr>'
    + '</table></div>';
  html += '</div>';

  html += '<div style="border-top:1px solid #bbb;padding:.7rem .9rem;display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;">';
  html += '<div><span style="'+badge+'">7</span><b style="font-size:.82rem;">التوقيع والإصدار</b> <span style="font-size:.68rem;color:#666;">ISSUE & SIGNATURE</span>'
    + (isIssued
        ? ('<div style="margin-top:.6rem;font-size:.72rem;color:#1e7e34;line-height:1.6;">'
            + svgIcon(ICON_CHECK)+' وقّعها وأصدرها قسم المالية — Signed &amp; issued by Finance<br>'
            + roleLabel(blDoc.issuedByRole) + (blDoc.issuedByUsername?(' ('+esc(blDoc.issuedByUsername)+')'):'') + '<br>'
            + 'كود التحقق / VERIFICATION CODE: <b>'+bdi(blDoc.verificationCode||"—")+'</b>'
            + '</div>')
        : ('<div style="margin-top:1.8rem;border-top:1px solid #999;width:12rem;padding-top:.2rem;font-size:.7rem;color:#666;">توقيع قسم المالية — Finance Signature (pending)</div>'));
  html += '</div>';
  html += '<div style="text-align:end;font-size:.8rem;">'
    + '<div>تاريخ الإصدار / DATE OF ISSUE: '+bdi(isIssued && blDoc.issuedAt ? fmtDate(blDoc.issuedAt) : (bl.issueDate?fmtDate(bl.issueDate):"—"))+'</div>'
    + '<div>مكان الإصدار / PLACE OF ISSUE: '+(bl.placeOfIssue?esc(bl.placeOfIssue):'—')+'</div>'
    + '<div>حرر بواسطة / ISSUED BY: '+(bl.issuedBy?esc(bl.issuedBy):esc(t("brandMark")))+'</div>'
    + '</div>';
  html += '</div>';

  html += '</div>';
  return html;
}

/* بيان الحمولة (Cargo Manifest) — نموذج قياسي مُشتق تلقائيًا من بيانات الطلبية والبوليصة، لموظف التوثيق (DOCUMENTATION) */
function manifestDocHtml(o){
  var bl = o.billOfLading || {};
  var b = o.booking || {};
  var pkgLine = (o.packagesCount ? esc(o.packagesCount) : '—') + (bl.packageKind ? (' '+esc(bl.packageKind)) : '');
  var goodsLine = esc(o.goodsDescriptionAr||"—") + (o.goodsDescriptionEn ? ('<br><span style="color:#555;">'+esc(o.goodsDescriptionEn)+'</span>') : '');
  var grossW = (o.grossWeightKg!==null && o.grossWeightKg!==undefined) ? bdi(o.grossWeightKg) : '—';
  var vgmW = bl.vgmWeight ? bdi(bl.vgmWeight) : '—';
  var cbmV = (o.cbm!==null && o.cbm!==undefined) ? bdi(o.cbm) : '—';
  var badge = 'display:inline-block;width:1.3rem;height:1.3rem;line-height:1.3rem;text-align:center;background:#C9A227;color:#1B2458;border-radius:999px;font-size:.68rem;font-weight:700;margin-inline-end:.4rem;';

  var html = '<div dir="ltr" style="font-family:var(--font-body);max-width:800px;margin:2rem auto;padding:0;border:1px solid #bbb;color:#1a1a2e;background:#fff;">';
  html += '<div style="text-align:center;padding:.7rem;font-size:1.15rem;font-weight:700;color:#1B2458;border-bottom:1px solid #ddd;">بيان الحمولة — Cargo Manifest</div>';

  html += '<div style="display:flex;justify-content:space-between;align-items:flex-start;padding:.9rem 1rem;border-bottom:2px solid #1B2458;">';
  html += '<div><div style="font-size:1.05rem;font-weight:700;color:#1B2458;">'+esc(t("brandMark"))+' للنقل البحري</div><div style="font-size:.82rem;color:#555;">HAMMOUDA SEA TRANSPORT CO.</div></div>';
  html += '<div style="text-align:end;font-size:.72rem;color:#666;max-width:45%;">'+esc(t("ui.printOrderNo"))+bdi(o.orderNumber)+'<br>'+esc(t("ui.printDate"))+bdi(fmtDate(nowIso()))+'</div>';
  html += '</div>';

  html += blBoxRow("1","الشاحن","SHIPPER", bl.shipperName ? (esc(bl.shipperName)+(o.supplierAddressCn?('<br><span style="color:#666;">'+esc(o.supplierAddressCn)+'</span>'):'')) : '');
  html += blBoxRow("2","المرسل إليه","CONSIGNEE", bl.consigneeName ? esc(bl.consigneeName) : (o.customer.name?esc(o.customer.name):''));
  html += blBoxRow("3","الطرف المخطر","NOTIFY PARTY", bl.notifyName ? esc(bl.notifyName) : '');
  html += blBoxRow("4","رقم البوليصة / رقم الحجز","B/L NO. / BOOKING NO.", (bl.blNumber||b.bookingNumber) ? (bdi(bl.blNumber||'—')+' / '+bdi(b.bookingNumber||'—')) : '');
  html += blBoxRow("5","اسم السفينة / رقم الرحلة","VESSEL / VOYAGE NO.", (bl.vesselName||bl.voyageNo) ? (esc(bl.vesselName||'—')+' / '+bdi(bl.voyageNo||'—')) : '');
  html += blBoxRow("6","ميناء التحميل / التفريغ","PORT OF LOADING / DISCHARGE", (bl.portOfLoading||bl.portOfDischarge) ? (esc(bl.portOfLoading||'—')+' / '+esc(bl.portOfDischarge||'—')) : '');

  html += '<div style="padding:.55rem .9rem .2rem;"><span style="'+badge+'">7</span><b style="font-size:.82rem;">تفاصيل البضاعة</b> <span style="font-size:.68rem;color:#666;">CARGO PARTICULARS</span></div>';
  html += '<div style="padding:0 .9rem .7rem;overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:.76rem;"><thead><tr style="background:#F5EACB;">'
    + '<th style="border:1px solid #ccc;padding:.4rem;">رقم الحاوية/الختم<br><span style="font-weight:400;">CONTAINER/SEAL NO.</span></th>'
    + '<th style="border:1px solid #ccc;padding:.4rem;">علامات وأرقام الطرود<br><span style="font-weight:400;">MARKS & NOS.</span></th>'
    + '<th style="border:1px solid #ccc;padding:.4rem;">عدد ونوع الطرود<br><span style="font-weight:400;">NO. & KIND OF PACKAGES</span></th>'
    + '<th style="border:1px solid #ccc;padding:.4rem;">وصف البضاعة<br><span style="font-weight:400;">DESCRIPTION OF GOODS</span></th>'
    + '<th style="border:1px solid #ccc;padding:.4rem;">الوزن الإجمالي، كجم<br><span style="font-weight:400;">GROSS WEIGHT, KGS</span></th>'
    + '<th style="border:1px solid #ccc;padding:.4rem;">الوزن الإجمالي المؤكد VGM<br><span style="font-weight:400;">VERIFIED GROSS MASS</span></th>'
    + '<th style="border:1px solid #ccc;padding:.4rem;">المقاس<br><span style="font-weight:400;">MEASUREMENT, CBM</span></th>'
    + '</tr></thead><tbody>'
    + '<tr><td style="border:1px solid #ccc;padding:.4rem;text-align:center;">'+(bl.containerSealNo?bdi(bl.containerSealNo):'—')+'</td>'
    + '<td style="border:1px solid #ccc;padding:.4rem;text-align:center;">'+(bl.marksNos?esc(bl.marksNos):'—')+'</td>'
    + '<td style="border:1px solid #ccc;padding:.4rem;text-align:center;">'+bdi(pkgLine)+'</td>'
    + '<td style="border:1px solid #ccc;padding:.4rem;">'+goodsLine+(o.hsCode?('<br><span style="color:#666;font-size:.7rem;">HS: '+bdi(o.hsCode)+'</span>'):'')+'</td>'
    + '<td style="border:1px solid #ccc;padding:.4rem;text-align:center;">'+grossW+'</td>'
    + '<td style="border:1px solid #ccc;padding:.4rem;text-align:center;">'+vgmW+'</td>'
    + '<td style="border:1px solid #ccc;padding:.4rem;text-align:center;">'+cbmV+'</td></tr>'
    + '</tbody></table></div>';

  if(o.isDangerousGoods || o.isSpecialCargo || o.needsReefer){
    html += '<div style="padding:.55rem .9rem;border-top:1px solid #bbb;background:#fff8e1;">';
    html += '<span style="'+badge+'">8</span><b style="font-size:.82rem;">ملاحظات خاصة</b> <span style="font-size:.68rem;color:#666;">SPECIAL REMARKS</span>';
    html += '<div style="font-size:.78rem;margin-top:.4rem;line-height:1.9;">';
    if(o.isDangerousGoods) html += '<div style="display:flex;align-items:center;gap:.3rem;">'+svgIcon(ICON_WARNING,"declaration-ic")+'DANGEROUS GOODS — MSDS: '+bdi(o.msdsNumber||'—')+'</div>';
    if(o.isSpecialCargo) html += '<div style="display:flex;align-items:center;gap:.3rem;">'+svgIcon(ICON_PACKAGE,"declaration-ic")+'SPECIAL CARGO — '+esc(o.specialCargoNote||'—')+'</div>';
    if(o.needsReefer) html += '<div style="display:flex;align-items:center;gap:.3rem;">'+svgIcon(ICON_SNOWFLAKE,"declaration-ic")+'REEFER — '+bdi((o.reeferTempC!==null&&o.reeferTempC!=="")?(o.reeferTempC+' °C'):'—')+'</div>';
    html += '</div></div>';
  }

  html += '<div style="border-top:1px solid #bbb;padding:.7rem .9rem;display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;font-size:.78rem;color:#666;">'
    + '<div>حُرر بواسطة قسم اللوجستيك — DOCUMENTATION<br>'+esc(roleLabel(state.currentRole))+'</div>'
    + '<div style="text-align:end;">نوع مستند الشحن: '+esc(bl.documentType==="CWB"?t("ui.blDocTypeCWB"):t("ui.blDocTypeHBL"))+'</div>'
    + '</div>';

  html += '</div>';
  return html;
}

function printDoc(orderId, docType){
  var o = findOrder(orderId);
  if(docType==="BILL_OF_LADING"){
    var area0 = document.getElementById("printArea");
    area0.innerHTML = blDocHtml(o);
    var shell0 = document.getElementById("app-shell");
    shell0.style.display = "none";
    area0.style.display = "block";
    window.print();
    setTimeout(function(){ shell0.style.display="grid"; area0.style.display="none"; }, 300);
    return;
  }
  if(docType==="CARGO_MANIFEST"){
    var area1 = document.getElementById("printArea");
    area1.innerHTML = manifestDocHtml(o);
    var shell1 = document.getElementById("app-shell");
    shell1.style.display = "none";
    area1.style.display = "block";
    window.print();
    setTimeout(function(){ shell1.style.display="grid"; area1.style.display="none"; }, 300);
    return;
  }
  var b = o.booking;
  var html = '<div dir="'+t("dirName")+'" style="font-family:var(--font-body);max-width:700px;margin:2rem auto;padding:2rem;border:1px solid #ccc;">';
  html += '<div style="display:flex;justify-content:space-between;border-bottom:2px solid #333;padding-bottom:1rem;margin-bottom:1rem;"><div><h2>'+esc(t("brandMark"))+'</h2><p>'+esc(t("brandSub"))+'</p></div><div style="text-align:start;"><h3>'+esc(t("documents."+docType))+'</h3><p>'+esc(t("ui.printOrderNo"))+bdi(o.orderNumber)+'</p><p>'+esc(t("ui.printDate"))+bdi(fmtDate(nowIso()))+'</p></div></div>';
  html += '<h4>'+esc(t("ui.printCustomerData"))+'</h4><p>'+esc(o.customer.name)+'<br>'+(o.customer.contactPerson?(esc(t("ui.printContact"))+esc(o.customer.contactPerson)+'<br>'):'')+(o.customer.phone?(esc(t("ui.printPhone"))+bdi(o.customer.phone)):'')+'</p>';
  html += '<h4>'+esc(t("ui.printGoodsData"))+'</h4><p>'+esc(o.goodsDescriptionEn||o.goodsDescriptionAr||"—")
    +(o.hsCode?(esc(t("ui.printHsCodePrefix"))+bdi(o.hsCode)):'')
    +(o.packagesCount?(esc(t("ui.printPackagesPrefix"))+bdi(o.packagesCount)):'')
    +(o.netWeightKg?(esc(t("ui.printNetWeightPrefix"))+bdi(o.netWeightKg+' kg')):'')
    +(o.grossWeightKg?(esc(t("ui.printGrossWeightPrefix"))+bdi(o.grossWeightKg+' kg')):'')
    +((o.cbm!==null && o.cbm!==undefined)?(esc(t("ui.printCbmPrefix"))+bdi(o.cbm+' '+t("ui.cbmUnit"))):'')
    +'</p>';
  html += '<h4>'+esc(t("ui.printTermsData"))+'</h4><p>Incoterm: '+bdi(o.incotermCode)+'</p>';
  if(b) html += '<p>'+esc(t("ui.printShipmentType"))+esc(t("bookingTypes."+b.type))+(b.carrier?(esc(t("ui.printCarrier"))+esc(b.carrier)):'')+(b.detailValue?(esc(t("ui.printReference"))+esc(b.detailValue)):'')+'</p>';
  /* مستند للزبون: الفاتورة تعرض السعر النهائي فقط (بدون EXW والشحن والـ VAT والربح).
     قائمة التعبئة وشهادة المنشأ مستندات شحن — بلا أسعار إطلاقًا. */
  if(docType==="FINAL_INVOICE"){
    var fpPrint = invoicePrice(o);
    html += '<h4>'+esc(t("ui.printPrices"))+'</h4><table><tr><td><b>'+esc(t("ui.printFinalPrice"))+'</b></td><td style="text-align:end;"><b>'+(fpPrint!==null ? xMoney(fpPrint, o.currency) : '—')+'</b></td></tr></table>'
      + '<p style="font-size:.78rem;color:#555;">'+esc(tpl(t("ui.printFinalPriceNote"), {incoterm:o.incotermCode}))+'</p>';
  }
  if(docType==="FINAL_INVOICE" && o.customerConfirmation && o.customerConfirmation.code){
    html += '<div style="margin-top:1.5rem;border:2px solid #333;border-radius:8px;padding:1rem;text-align:center;">'
      + '<div style="font-size:.85rem;margin-bottom:.4rem;">'+esc(t("ui.finalInvoiceCodeInstructions"))+'</div>'
      + '<div style="font-size:1.4rem;font-weight:700;letter-spacing:.15em;">'+bdi(o.customerConfirmation.code)+'</div>'
      + '</div>';
  }
  html += '<div style="display:flex;justify-content:space-between;margin-top:3rem;"><span>'+esc(t("ui.printIssuerSig"))+'</span><span>'+esc(t("ui.printRecipientSig"))+'</span></div></div>';
  var area = document.getElementById("printArea");
  area.innerHTML = html;
  var shell = document.getElementById("app-shell");
  shell.style.display = "none";
  area.style.display = "block";
  window.print();
  setTimeout(function(){ shell.style.display="grid"; area.style.display="none"; }, 300);
}

/* ============================================================
   المساعد الذكي — يفهم أنماط أسئلة عربية/إنجليزية/صينية شائعة عن
   الطلبيات ويجاوب مباشرة من بيانات النظام الحقيقية (بدون أي خدمة خارجية)
   ============================================================ */
var assistantHistory = [];
var assistantOpenState = false;

function normalizeSearchText(s){
  return (s||"").toString()
    .replace(/[إأآا]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه")
    .replace(/[ً-ٟ]/g,"")
    .trim().toLowerCase();
}
function extractOrderNumberFromText(text){
  var m = text.match(/ord[\s-]?0*(\d{1,5})/i);
  if(m) return "ORD-" + m[1].padStart(4,"0");
  var m2 = text.match(/\b(\d{3,5})\b/);
  if(m2) return "ORD-" + m2[1].padStart(4,"0");
  return null;
}
function assistantOrderSummary(o){
  var color = displayColor(o);
  var cur = currentStage(o);
  var lines = [o.orderNumber + " — " + o.customer.name];
  lines.push(t("phase."+o.phase) + " · " + t("statusColor."+color));
  if(cur) lines.push(t("ui.currentStageLabel")+": "+t("stages."+cur.key));
  if(o.shippingMethod) lines.push(t("ui.shippingMethodLabel")+": "+t("shippingMethods."+o.shippingMethod));
  var cutoff = orderCutOffStatus(o);
  if(cutoff==="PASSED") lines.push("⚠ " + t("ui.blCutOffPassedWarning"));
  else if(cutoff==="SOON") lines.push("⏰ " + t("ui.blCutOffApproachingWarning"));
  if(o.isDangerousGoods) lines.push(t("ui.dgBadge"));
  var paySt = customerPayStatus(o);
  if(paySt!=="NO_INVOICE"){
    var payRem = customerRemaining(o);
    lines.push((canSeeCustomerBalance() && payRem>0)
      ? tpl(t("ui.assistantPayRemainingTpl"), {status:t("ui.custPaySt_"+paySt), remaining:finFmt(payRem)+" "+o.currency})
      : tpl(t("ui.assistantPayTpl"), {status:t("ui.custPaySt_"+paySt)}));
  }
  return lines.join("\n");
}
function assistantListSummary(list, introKey, emptyKey){
  if(!list.length) return t("ui."+emptyKey);
  var lines = [tpl(t("ui."+introKey), {count: list.length})];
  list.slice(0,8).forEach(function(o){ lines.push("• " + o.orderNumber + " — " + o.customer.name); });
  if(list.length>8) lines.push(tpl(t("ui.assistantMoreSuffixTemplate"), {count: list.length-8}));
  return lines.join("\n");
}
function assistantAnalyze(rawText){
  var text = normalizeSearchText(rawText);
  if(!text) return t("ui.assistantFallback");

  var orderNo = extractOrderNumberFromText(rawText);
  if(orderNo){
    var o = state.orders.find(function(x){ return x.orderNumber.toUpperCase()===orderNo.toUpperCase(); });
    if(o) return assistantOrderSummary(o);
    return tpl(t("ui.assistantNotFoundTemplate"), {no: orderNo});
  }

  if(/متاخر|تاخير|late|delay|延误/.test(text)){
    return assistantListSummary(state.orders.filter(function(o){ return displayColor(o)==="RED"; }), "assistantLateIntroTemplate", "assistantLateIntroEmpty");
  }
  if(/cut.?off|كت ?اوف|قرب.*(ميناء|شحن)|截关/.test(text)){
    return assistantListSummary(state.orders.filter(function(o){ return !!orderCutOffStatus(o); }), "assistantCutoffIntroTemplate", "assistantCutoffIntroEmpty");
  }
  if(/مكتمل|منته|complete|finish|已完成/.test(text)){
    return assistantListSummary(state.orders.filter(function(o){ return o.phase==="COMPLETED"; }), "assistantDoneIntroTemplate", "assistantDoneIntroEmpty");
  }
  if(/خطر|dangerous|危险/.test(text)){
    return assistantListSummary(state.orders.filter(function(o){ return o.isDangerousGoods; }), "assistantDgIntroTemplate", "assistantDgIntroEmpty");
  }
  if(/كم\s*(طلبي|شحن)|عدد|how many|数量/.test(text)){
    return tpl(t("ui.assistantCountAnswerTemplate"), {count: state.orders.length});
  }
  if(text.length>=3){
    var matches = state.orders.filter(function(o){
      var name = normalizeSearchText(o.customer.name);
      return name.indexOf(text)>-1 || text.indexOf(name)>-1;
    });
    if(matches.length) return assistantListSummary(matches, "assistantCustomerIntroTemplate", "assistantLateIntroEmpty");
  }
  if(/^(مرحبا|هلا|السلام|صباح|مساء|hi|hello|hey|你好)/.test(text)){
    return t("ui.assistantGreeting");
  }
  return t("ui.assistantFallback");
}

function toggleAssistant(){
  assistantOpenState = !assistantOpenState;
  renderAssistant();
  if(assistantOpenState){
    var input = document.getElementById("assistantInput");
    if(input) setTimeout(function(){ input.focus(); }, 60);
  }
}
function assistantSend(presetText){
  var input = document.getElementById("assistantInput");
  var q = (presetText!==undefined ? presetText : (input ? input.value : "")).trim();
  if(!q) return;
  assistantHistory.push({role:"user", text:q});
  assistantHistory.push({role:"bot", text: assistantAnalyze(q)});
  renderAssistant();
  var inputAfter = document.getElementById("assistantInput");
  if(inputAfter) inputAfter.focus();
}
function renderAssistant(){
  var host = document.getElementById("assistantHost");
  if(!host) return;
  if(assistantHistory.length===0) assistantHistory.push({role:"bot", text: t("ui.assistantWelcome")});
  var html = '<button class="assistant-fab" data-act="toggleAssistant" aria-label="'+esc(t("ui.assistantTitle"))+'">'+ASSISTANT_ICON+'<span class="dot"></span></button>';
  html += '<div class="assistant-panel'+(assistantOpenState?" open":"")+'" role="dialog" aria-label="'+esc(t("ui.assistantTitle"))+'">';
  html += '<div class="assistant-head">'+ASSISTANT_ICON+'<div><b>'+esc(t("ui.assistantTitle"))+'</b><span>'+esc(t("ui.assistantSubtitle"))+'</span></div>'
    + '<button type="button" class="assistant-close" data-act="toggleAssistant" aria-label="'+esc(t("ui.close"))+'">'+ASSISTANT_CLOSE_ICON+'</button></div>';
  html += '<div class="assistant-body" id="assistantBody">';
  assistantHistory.forEach(function(m){ html += '<div class="assistant-msg '+(m.role==="user"?"user":"bot")+'">'+esc(m.text)+'</div>'; });
  html += '</div>';
  html += '<div class="assistant-suggestions">';
  ["assistantSuggestLate","assistantSuggestCutoff","assistantSuggestDone"].forEach(function(k){
    html += '<button type="button" class="assistant-chip" data-act="assistantSuggest" data-q="'+esc(t("ui."+k))+'">'+esc(t("ui."+k))+'</button>';
  });
  html += '</div>';
  html += '<div class="assistant-input-row"><label for="assistantInput" class="sr-only">'+esc(t("ui.assistantPlaceholder"))+'</label>'
    + '<input id="assistantInput" type="text" placeholder="'+esc(t("ui.assistantPlaceholder"))+'" autocomplete="off">'
    + '<button type="button" class="assistant-send" data-act="assistantSend" aria-label="'+esc(t("ui.assistantSend"))+'">'+ASSISTANT_SEND_ICON+'</button></div>';
  html += '</div>';
  host.innerHTML = html;
  var body = document.getElementById("assistantBody");
  if(body) body.scrollTop = body.scrollHeight;
  var input = document.getElementById("assistantInput");
  if(input) input.onkeydown = function(ev){ if(ev.key==="Enter"){ ev.preventDefault(); assistantSend(); } };
  wireEvents();
}

/* ============================================================
   تحديث 2026-09-28:
   (1) إصدار كود البوليصة من مدير المالية بدل حمودة
   (2-4) التسعير الداخلي: نسبة ربح يحددها حمودة، VAT سجل داخلي، والزبون يرى السعر النهائي فقط
   (5-8) الحجز ومواعيد الشحن (Booking No. / Pick-up / Cut-off / Shipping) مع تنبيهات
   (10) مستندات مخصصة حتى 5 (Customize Documents) مع رفع ملفات
   (11) المخلّص الجمركي ومستندات التخليص
   ============================================================ */
Object.assign(I18N.ar.ui, {
  pricingTitle:"التسعير والربح", pricingPrivatePill:"داخلي — حمودة فقط",
  pricingDesc:"هذه البطاقة لا تظهر لأي قسم آخر ولا للزبون. الزبون يرى في الفاتورة السعر النهائي فقط، بدون تفصيل وبدون VAT.",
  pricingExw:"سعر المصنع (EXW)", pricingShipping:"الشحن والخدمات (تكاليف اللوجستيك)", pricingCost:"التكلفة الكاملة",
  pricingProfitPct:"نسبة الربح", pricingProfitAmt:"قيمة الربح", pricingFinal:"السعر النهائي للزبون",
  pricingDefaultTag:"(افتراضية)", pricingVat:"VAT فاتورة المصنع — سجل داخلي، لا يدخل في سعر الزبون ولا يظهر له",
  pricingProfitInputLabel:"نسبة الربح لهذه الطلبية %", pricingProfitInputHint:"اتركها فارغة لاستخدام النسبة الافتراضية من الإعدادات.",
  pricingSaveBtn:"حفظ نسبة الربح",
  pricingUsingDefault:"لا توجد نسبة خاصة بهذه الطلبية — تُستخدم النسبة الافتراضية {pct}% من الإعدادات.",
  pricingNoProfit:"لم تُحدد نسبة ربح لهذه الطلبية بعد — لن يتمكن القسم من إصدار الفاتورة للزبون حتى تحددها.",
  pricingConfirmedDiffNote:"الزبون أكّد الفاتورة بسعر {price}. النسبة الجديدة تغيّر السعر الداخلي فقط — الفاتورة المؤكدة تبقى بسعرها.",
  pricingMissingShipping:"لم يُحدد بعد",
  pricingInvoiceSent:"الفاتورة المُرسلة للزبون صدرت بسعر {price} (ربح {pct}%).",
  pricingChangedWarn:"السعر الحالي ({price}) تغيّر عن سعر الفاتورة المُرسلة — لازم القسم يعيد توليد الفاتورة (رمز جديد) ليصل السعر الجديد للزبون.",
  pricingLockedNote:"الزبون أكّد الفاتورة — السعر مقفل ولا يمكن تغيير نسبة الربح لهذه الطلبية.",
  profitInvalid:"نسبة الربح يجب أن تكون رقمًا من 0 إلى 1000.", profitSaved:"حُفظت نسبة الربح",
  defaultProfitTitle:"نسبة الربح الافتراضية", defaultProfitDesc:"تُطبَّق تلقائيًا على أي طلبية لم تحدد لها نسبة خاصة. هذا الإعداد وأرقام الربح تظهر لحمودة فقط.",
  defaultProfitLabel:"النسبة الافتراضية %",
  invoiceNeedsProfit:"لا يمكن إصدار الفاتورة: لم تُحدد نسبة الربح لهذه الطلبية بعد (بانتظار حمودة).",
  invoiceNeedsExw:"لا يمكن إصدار الفاتورة: سعر المصنع (EXW) غير مُدخل.",
  invoiceNeedsShipping:"لا يمكن إصدار الفاتورة: سعر الشحن لم يُحدد من اللوجستيك بعد.",
  priceChangedCardWarn:"تغيّر السعر بعد إرسال الفاتورة — أعد توليد الفاتورة (رمز جديد) وأرسلها للزبون قبل تسجيل تأكيده.",
  printFinalPrice:"السعر الإجمالي", printFinalPriceNote:"السعر إجمالي نهائي حسب شروط التسليم ({incoterm}).",
  finalPriceSide:"السعر النهائي للزبون", costSide:"التكلفة",
  vatInternalHint:"سجل داخلي لحمودة فقط — لا يظهر للزبون ولا يدخل في سعره.",

  bookingCardTitle:"الحجز ومواعيد الشحن",
  bookingCardDesc:"يعبّئها اللوجستيك. على المواعيد تنبيهات تلقائية: أصفر قبل الموعد بيومين، وأحمر إذا فات الموعد ولم يُعلَّم كمنجز.",
  bookingNumberLabel:"رقم الحجز (Booking Number)", pickupDateLabel:"تاريخ الاستلام (Pick-up Date)",
  cutoffDateLabel:"موعد الـ Cut-off (Cut-off Date)", shippingDateLabel:"تاريخ الشحن (Shipping Date)",
  cutoffFromEtaNote:"فارغ = يُحسب تلقائيًا 3 أيام قبل وصول السفينة المتوقع (من بطاقة البوليصة)",
  saveBookingDatesBtn:"حفظ الحجز والمواعيد", bookingDatesOrderWarn:"تنبيه: ترتيب المواعيد غير منطقي — المفروض الاستلام ثم الـ Cut-off ثم الشحن.",
  ms_pickup:"الاستلام (Pick-up)", ms_cutoff:"الـ Cut-off", ms_shipping:"الشحن (Shipping)",
  msDone_pickup:"تم الاستلام", msDone_cutoff:"وصلت الميناء قبل الـ Cut-off", msDone_shipping:"تم الشحن",
  msUndo:"تراجع", msStDONE:"منجز", msStPASSED:"فات الموعد", msStSOON:"اقترب الموعد", msStOK:"في الموعد", msStNONE:"لم يُحدد",
  msDoneAtTpl:"أُنجز {date}", msDaysLeftTpl:"باقي {days} يوم",
  bookingSeeCardNote:"رقم الحجز والمواعيد تُعبّأ من بطاقة «الحجز ومواعيد الشحن» أعلاه.",
  logAlertsKpi:"تنبيهات مواعيد الشحن", logAlertBannerTitle:"تنبيهات مواعيد الشحن",
  alertPassedTpl:"فات موعد {ms} ({date}) ولم يُعلَّم كمنجز", alertSoonTpl:"اقترب موعد {ms}: {date} — باقي {days} يوم",
  notifPassedTpl:"⚠ فات موعد {ms}", notifSoonTpl:"⏰ اقترب موعد {ms}",

  customDocsTitle:"مستندات مخصصة (Customize Documents)",
  customDocsDesc:"حتى 5 مستندات حسب متطلبات الشحنة أو بلد الوصول — مثل الشهادة الصحية، شهادة المطابقة، شهادة التبخير.",
  customDocsCountTpl:"{n} من 5",
  customDocNameLabel:"اسم المستند *", customDocNamePlaceholder:"مثال: شهادة صحية (Health Certificate)",
  customDocRefLabel:"رقم المستند / المرجع", customDocIssuerLabel:"الجهة المُصدِرة", customDocDateLabel:"تاريخ الإصدار",
  customDocFileLabel:"الملف (PDF أو صورة)", customDocAddBtn:"إضافة المستند",
  customDocLimit:"وصلت للحد الأقصى: 5 مستندات مخصصة لكل طلبية.", customDocNameRequired:"اكتب اسم المستند.",
  customDocNone:"لا توجد مستندات مخصصة بعد.", customDocAdded:"أُضيف المستند", customDocDeleted:"حُذف المستند",
  confirmDeleteDoc:"حذف هذا المستند وملفه المرفوع؟", deleteBtn:"حذف",
  attOpen:"فتح الملف", attReplace:"استبدال الملف", attUpload:"رفع ملف", attNoFile:"بدون ملف",
  attTooBig:"حجم الملف أكبر من 15 ميجا.", attBadType:"الملف لازم يكون PDF أو صورة.", attSaved:"رُفع الملف",
  attMissing:"الملف غير موجود على هذا الجهاز (رُفع من جهاز آخر أو مُسحت بيانات المتصفح).", attFailed:"تعذّر حفظ الملف.",
  attDeviceNote:"الملفات المرفوعة تُحفظ في متصفح هذا الجهاز فقط ولا تدخل في ملف النسخة الاحتياطية — احتفظ بالأصل أيضًا.",

  customsCardTitle:"التخليص الجمركي — المخلّص ومستنداته",
  customsCardDesc:"Custom Clearing Agent & Documents — بيانات المخلّص الجمركي والبيان الجمركي لكل جهة.",
  customsSide_EXPORT:"تخليص التصدير — ميناء التحميل (الصين)", customsSide_IMPORT:"تخليص الاستيراد — ميناء الوصول",
  agentNameLabel:"اسم المخلّص الجمركي", agentCompanyLabel:"شركة التخليص", agentPhoneLabel:"الهاتف", agentEmailLabel:"البريد الإلكتروني",
  declNoLabel:"رقم البيان الجمركي (Declaration No.)", declDateLabel:"تاريخ البيان", declFileLabel:"مستند التخليص (البيان الجمركي)",
  saveCustomsBtn:"حفظ بيانات التخليص", customsResponsibleTpl:"حسب {incoterm}: التخليص الجمركي مسؤولية {party}.",
  customsStageAgentTpl:"المخلّص الجمركي: {agents}", customsStageNoAgent:"لم يُسجَّل مخلّص جمركي بعد — سجّله من تبويب المستندات (بطاقة التخليص الجمركي).",
  customsSaved:"حُفظت بيانات التخليص"
});
Object.assign(I18N.en.ui, {
  pricingTitle:"Pricing & Profit", pricingPrivatePill:"Internal — Hamouda only",
  pricingDesc:"This card is not shown to any other department or to the customer. The customer's invoice shows the final price only — no breakdown, no VAT.",
  pricingExw:"Factory price (EXW)", pricingShipping:"Shipping & services (logistics costs)", pricingCost:"Full cost",
  pricingProfitPct:"Profit margin", pricingProfitAmt:"Profit amount", pricingFinal:"Customer final price",
  pricingDefaultTag:"(default)", pricingVat:"Factory invoice VAT — internal record, not in the customer's price and never shown to them",
  pricingProfitInputLabel:"Profit % for this order", pricingProfitInputHint:"Leave empty to use the default % from Settings.",
  pricingSaveBtn:"Save profit %",
  pricingUsingDefault:"No order-specific margin — the default {pct}% from Settings is used.",
  pricingNoProfit:"No profit % set for this order yet — the department cannot issue the customer invoice until you set one.",
  pricingConfirmedDiffNote:"The customer confirmed the invoice at {price}. The new margin changes the internal price only — the confirmed invoice keeps its price.",
  pricingMissingShipping:"Not set yet",
  pricingInvoiceSent:"The invoice sent to the customer was issued at {price} ({pct}% margin).",
  pricingChangedWarn:"The current price ({price}) differs from the invoice sent — the department must regenerate the invoice (new code) so the customer gets the new price.",
  pricingLockedNote:"The customer confirmed the invoice — the price is locked and the margin can no longer change.",
  profitInvalid:"Profit % must be a number from 0 to 1000.", profitSaved:"Profit % saved",
  defaultProfitTitle:"Default profit margin", defaultProfitDesc:"Applied automatically to any order without its own margin. This setting and all profit figures are visible to Hamouda only.",
  defaultProfitLabel:"Default %",
  invoiceNeedsProfit:"Cannot issue the invoice: no profit % set for this order yet (awaiting Hamouda).",
  invoiceNeedsExw:"Cannot issue the invoice: the factory price (EXW) is missing.",
  invoiceNeedsShipping:"Cannot issue the invoice: Logistics has not set the shipping price yet.",
  priceChangedCardWarn:"The price changed after the invoice was sent — regenerate it (new code) and resend before recording the customer's confirmation.",
  printFinalPrice:"Total price", printFinalPriceNote:"Final total price per the delivery terms ({incoterm}).",
  finalPriceSide:"Customer final price", costSide:"Cost",
  vatInternalHint:"Internal record for Hamouda only — never shown to the customer and not part of their price.",
  bookingCardTitle:"Booking & Shipping Dates",
  bookingCardDesc:"Filled by Logistics. Dates raise automatic alerts: yellow two days before, red once passed and not marked done.",
  bookingNumberLabel:"Booking Number", pickupDateLabel:"Pick-up Date", cutoffDateLabel:"Cut-off Date", shippingDateLabel:"Shipping Date",
  cutoffFromEtaNote:"Empty = auto: 3 days before the vessel ETA (from the B/L card)",
  saveBookingDatesBtn:"Save booking & dates", bookingDatesOrderWarn:"Note: the dates are out of order — expected Pick-up, then Cut-off, then Shipping.",
  ms_pickup:"Pick-up", ms_cutoff:"Cut-off", ms_shipping:"Shipping",
  msDone_pickup:"Picked up", msDone_cutoff:"Gated in before cut-off", msDone_shipping:"Shipped",
  msUndo:"Undo", msStDONE:"Done", msStPASSED:"Overdue", msStSOON:"Due soon", msStOK:"On schedule", msStNONE:"Not set",
  msDoneAtTpl:"Done {date}", msDaysLeftTpl:"{days} day(s) left",
  bookingSeeCardNote:"Booking number and dates are filled in the «Booking & Shipping Dates» card above.",
  logAlertsKpi:"Shipping date alerts", logAlertBannerTitle:"Shipping date alerts",
  alertPassedTpl:"{ms} date passed ({date}) and not marked done", alertSoonTpl:"{ms} is near: {date} — {days} day(s) left",
  notifPassedTpl:"⚠ {ms} date passed", notifSoonTpl:"⏰ {ms} date is near",
  customDocsTitle:"Customize Documents",
  customDocsDesc:"Up to 5 extra documents required by the shipment or destination — e.g. health certificate, conformity certificate, fumigation certificate.",
  customDocsCountTpl:"{n} of 5",
  customDocNameLabel:"Document name *", customDocNamePlaceholder:"e.g. Health Certificate",
  customDocRefLabel:"Document / reference no.", customDocIssuerLabel:"Issuing authority", customDocDateLabel:"Issue date",
  customDocFileLabel:"File (PDF or image)", customDocAddBtn:"Add document",
  customDocLimit:"Limit reached: 5 custom documents per order.", customDocNameRequired:"Enter the document name.",
  customDocNone:"No custom documents yet.", customDocAdded:"Document added", customDocDeleted:"Document deleted",
  confirmDeleteDoc:"Delete this document and its uploaded file?", deleteBtn:"Delete",
  attOpen:"Open file", attReplace:"Replace file", attUpload:"Upload file", attNoFile:"No file",
  attTooBig:"The file is larger than 15 MB.", attBadType:"The file must be a PDF or an image.", attSaved:"File uploaded",
  attMissing:"The file is not on this device (uploaded from another device or browser data was cleared).", attFailed:"Could not save the file.",
  attDeviceNote:"Uploaded files are stored in this device's browser only and are not part of the backup file — keep the originals too.",
  customsCardTitle:"Customs Clearing Agent & Documents",
  customsCardDesc:"Clearing agent details and the customs declaration for each side.",
  customsSide_EXPORT:"Export clearance — port of loading (China)", customsSide_IMPORT:"Import clearance — port of discharge",
  agentNameLabel:"Clearing agent name", agentCompanyLabel:"Clearing company", agentPhoneLabel:"Phone", agentEmailLabel:"Email",
  declNoLabel:"Declaration No.", declDateLabel:"Declaration date", declFileLabel:"Clearance document (customs declaration)",
  saveCustomsBtn:"Save clearance details", customsResponsibleTpl:"Under {incoterm}: customs clearance is the {party}'s responsibility.",
  customsStageAgentTpl:"Clearing agent: {agents}", customsStageNoAgent:"No clearing agent recorded yet — add one in the Documents tab (Customs Clearing card).",
  customsSaved:"Clearance details saved"
});
Object.assign(I18N.zh.ui, {
  pricingTitle:"定价与利润", pricingPrivatePill:"内部 — 仅哈穆达可见",
  pricingDesc:"此卡片不对其他部门或客户显示。客户发票只显示最终价格，不含明细，不含增值税。",
  pricingExw:"工厂价 (EXW)", pricingShipping:"运费及服务费", pricingCost:"总成本", pricingProfitPct:"利润率", pricingProfitAmt:"利润金额", pricingFinal:"客户最终价格",
  pricingDefaultTag:"(默认)", pricingVat:"工厂发票增值税 — 内部记录，不计入客户价格，也不向客户显示",
  pricingProfitInputLabel:"本订单利润率 %", pricingProfitInputHint:"留空则使用设置中的默认利润率。", pricingSaveBtn:"保存利润率",
  pricingUsingDefault:"本订单未单独设置 — 使用设置中的默认 {pct}%。",
  pricingNoProfit:"本订单尚未设置利润率 — 在设置之前部门无法向客户开具发票。",
  pricingConfirmedDiffNote:"客户已按 {price} 确认发票。新利润率只改变内部价格 — 已确认发票保持原价。", pricingMissingShipping:"尚未确定",
  pricingInvoiceSent:"已发送给客户的发票价格为 {price}（利润率 {pct}%）。",
  pricingChangedWarn:"当前价格 ({price}) 与已发送发票不同 — 需重新生成发票（新确认码）。",
  pricingLockedNote:"客户已确认发票 — 价格已锁定，利润率不可更改。",
  profitInvalid:"利润率必须是 0 到 1000 之间的数字。", profitSaved:"利润率已保存",
  defaultProfitTitle:"默认利润率", defaultProfitDesc:"自动应用于未单独设置利润率的订单。仅哈穆达可见。", defaultProfitLabel:"默认 %",
  invoiceNeedsProfit:"无法开具发票：尚未设置利润率（等待哈穆达）。", invoiceNeedsExw:"无法开具发票：缺少工厂价 (EXW)。", invoiceNeedsShipping:"无法开具发票：物流尚未确定运费。",
  priceChangedCardWarn:"发送发票后价格已变化 — 请重新生成并发送发票后再记录客户确认。",
  printFinalPrice:"总价", printFinalPriceNote:"按交货条款 ({incoterm}) 的最终总价。",
  finalPriceSide:"客户最终价格", costSide:"成本", vatInternalHint:"仅供哈穆达的内部记录 — 不向客户显示，不计入其价格。",
  bookingCardTitle:"订舱与装运日期", bookingCardDesc:"由物流填写。日期自动提醒：提前两天黄色，逾期未完成红色。",
  bookingNumberLabel:"订舱号 (Booking Number)", pickupDateLabel:"提货日期 (Pick-up)", cutoffDateLabel:"截关日期 (Cut-off)", shippingDateLabel:"装运日期 (Shipping)",
  cutoffFromEtaNote:"留空 = 自动：船舶预计到港前 3 天", saveBookingDatesBtn:"保存订舱与日期", bookingDatesOrderWarn:"注意：日期顺序不合理 — 应为提货、截关、装运。",
  ms_pickup:"提货", ms_cutoff:"截关", ms_shipping:"装运", msDone_pickup:"已提货", msDone_cutoff:"截关前已进港", msDone_shipping:"已装运",
  msUndo:"撤销", msStDONE:"已完成", msStPASSED:"已逾期", msStSOON:"即将到期", msStOK:"按计划", msStNONE:"未设置",
  msDoneAtTpl:"完成于 {date}", msDaysLeftTpl:"剩余 {days} 天", bookingSeeCardNote:"订舱号和日期在上方「订舱与装运日期」卡片中填写。",
  logAlertsKpi:"装运日期提醒", logAlertBannerTitle:"装运日期提醒",
  alertPassedTpl:"{ms} 日期已过 ({date}) 且未标记完成", alertSoonTpl:"{ms} 临近：{date} — 剩余 {days} 天",
  notifPassedTpl:"⚠ {ms} 已逾期", notifSoonTpl:"⏰ {ms} 临近",
  customDocsTitle:"自定义单证 (Customize Documents)", customDocsDesc:"根据货物或目的国要求最多 5 份单证 — 如卫生证书、合格证书、熏蒸证书。",
  customDocsCountTpl:"{n} / 5", customDocNameLabel:"单证名称 *", customDocNamePlaceholder:"例如：卫生证书 (Health Certificate)",
  customDocRefLabel:"单证/参考号", customDocIssuerLabel:"签发机构", customDocDateLabel:"签发日期", customDocFileLabel:"文件 (PDF 或图片)", customDocAddBtn:"添加单证",
  customDocLimit:"已达上限：每个订单最多 5 份自定义单证。", customDocNameRequired:"请输入单证名称。", customDocNone:"暂无自定义单证。",
  customDocAdded:"单证已添加", customDocDeleted:"单证已删除", confirmDeleteDoc:"删除此单证及其文件？", deleteBtn:"删除",
  attOpen:"打开文件", attReplace:"替换文件", attUpload:"上传文件", attNoFile:"无文件", attTooBig:"文件大于 15 MB。", attBadType:"文件必须是 PDF 或图片。",
  attSaved:"文件已上传", attMissing:"此设备上没有该文件。", attFailed:"无法保存文件。", attDeviceNote:"上传的文件仅保存在本设备浏览器中，不包含在备份文件中 — 请保留原件。",
  customsCardTitle:"报关行及报关单证", customsCardDesc:"各方的报关代理信息及报关单。",
  customsSide_EXPORT:"出口报关 — 装货港（中国）", customsSide_IMPORT:"进口清关 — 卸货港",
  agentNameLabel:"报关员姓名", agentCompanyLabel:"报关公司", agentPhoneLabel:"电话", agentEmailLabel:"电子邮箱",
  declNoLabel:"报关单号", declDateLabel:"报关日期", declFileLabel:"报关单证（报关单）", saveCustomsBtn:"保存报关信息",
  customsResponsibleTpl:"按 {incoterm}：报关由{party}负责。", customsStageAgentTpl:"报关行：{agents}", customsStageNoAgent:"尚未登记报关行 — 请在单证标签页添加。",
  customsSaved:"报关信息已保存"
});

/* التنبيهات صارت تغطي كل مواعيد الشحن (الاستلام، الـ Cut-off، الشحن) وليس الـ Cut-off فقط */
Object.assign(I18N.ar.ui, {
  notifTitle:"تنبيهات مواعيد الشحن (Pick-up / Cut-off / Shipping)",
  notifDesc:"تنبيه فوري على شاشة جهازك لما يقترب أو يفوت موعد الاستلام أو الـ Cut-off أو الشحن لأي طلبية.",
  notifQuickOnTitle:"تنبيهات مواعيد الشحن مفعّلة — اضغط للإيقاف", notifQuickOffTitle:"تنبيهات مواعيد الشحن متوقفة — اضغط للتفعيل"
});
Object.assign(I18N.en.ui, {
  notifTitle:"Shipping date alerts (Pick-up / Cut-off / Shipping)",
  notifDesc:"Instant on-screen alerts when an order's pick-up, cut-off or shipping date is near or has passed.",
  notifQuickOnTitle:"Shipping date alerts on — click to turn off", notifQuickOffTitle:"Shipping date alerts off — click to turn on"
});
var ICON_LOCK = '<rect x="3" y="11" width="18" height="10" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>';
var ICON_FILE = '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><path d="M14 3v5h5"></path>';
var ICON_UPLOAD = '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>';

function xRound(n){ return Math.round((Number(n)+Number.EPSILON)*100)/100; }
function xMoney(n, cur){ return bdi(Number(n||0).toLocaleString("en-US",{minimumFractionDigits:2, maximumFractionDigits:2})+" "+cur); }
function xToday(){ return new Date().toISOString().slice(0,10); }
function xDaysLeft(d){ return Math.round((new Date(d).getTime() - new Date(xToday()).getTime())/86400000); }
function xHas(v){ return v!==null && v!==undefined && v!==""; }

/* ---------- (2-4) التسعير الداخلي ---------- */
/* نسبة الربح تُحدد لكل طلبية على حدة (لا توجد نسبة افتراضية) */
function effectiveProfitPct(o){
  return xHas(o.profitPct) ? Number(o.profitPct) : null;
}
function orderCost(o){ return xRound((Number(o.exWorksPrice)||0) + (Number(o.shippingPrice)||0)); }
function orderFinalPrice(o){ var p = effectiveProfitPct(o); return p===null ? null : xRound(orderCost(o) * (1 + p/100)); }
/* سعر الفاتورة المُرسلة للزبون = لقطة وقت الإصدار (لا يتغير لو تغيّرت التكاليف أو النسبة بعدها) */
function invoicePrice(o){
  var cc = o.customerConfirmation;
  if(cc && xHas(cc.finalPrice)) return cc.finalPrice;
  return orderFinalPrice(o);
}
function invoicePriceStale(o){
  var cc = o.customerConfirmation;
  if(!cc || !cc.code || cc.confirmedAt || !xHas(cc.finalPrice)) return false;
  var cur = orderFinalPrice(o);
  return cur!==null && Math.abs(cur - cc.finalPrice) > 0.009;
}
function invoiceBlockReason(o){
  if(!o.exWorksPrice) return "ui.invoiceNeedsExw";
  if(!o.shippingPrice && o.incotermCode!=="EXW") return "ui.invoiceNeedsShipping";
  if(effectiveProfitPct(o)===null) return "ui.invoiceNeedsProfit";
  return null;
}
function pricingCardHtml(o){
  if(!can("pricing:view")) return "";
  var cur = o.currency, p = effectiveProfitPct(o), cost = orderCost(o), fp = orderFinalPrice(o);
  var usingDefault = false;
  var cc = o.customerConfirmation || {}, locked = !!cc.confirmedAt;
  var confirmedDiff = locked && xHas(cc.finalPrice) && fp!==null && Math.abs(fp - cc.finalPrice) > 0.009;
  var html = '<div class="card pricing-card"><h3>'+svgIcon(ICON_LOCK)+esc(t("ui.pricingTitle"))+' <span class="pill warning">'+esc(t("ui.pricingPrivatePill"))+'</span></h3>';
  html += '<p class="muted" style="font-size:.75rem;margin-top:-.3rem;">'+esc(t("ui.pricingDesc"))+'</p>';
  html += '<table class="pricing-table">';
  html += '<tr><td>'+esc(t("ui.pricingExw"))+'</td><td>'+(o.exWorksPrice ? xMoney(o.exWorksPrice,cur) : '—')+'</td></tr>';
  html += '<tr><td>'+esc(t("ui.pricingShipping"))+'</td><td>'+(o.shippingPrice ? xMoney(o.shippingPrice,cur) : '<span class="muted">'+esc(t("ui.pricingMissingShipping"))+'</span>')+'</td></tr>';
  html += '<tr class="cost"><td>'+esc(t("ui.pricingCost"))+'</td><td>'+xMoney(cost,cur)+'</td></tr>';
  html += '<tr><td>'+esc(t("ui.pricingProfitPct"))+(usingDefault?(' <span class="muted">'+esc(t("ui.pricingDefaultTag"))+'</span>'):'')+'</td><td>'+(p!==null ? bdi(p+'%') : '—')+'</td></tr>';
  html += '<tr><td>'+esc(t("ui.pricingProfitAmt"))+'</td><td>'+(fp!==null ? xMoney(fp-cost,cur) : '—')+'</td></tr>';
  html += '<tr class="final"><td>'+esc(t("ui.pricingFinal"))+'</td><td>'+(fp!==null ? xMoney(fp,cur) : '—')+'</td></tr>';
  html += '</table>';
  html += '<div class="pricing-note info">'+svgIcon(ICON_LOCK)+'<span>'+esc(t("ui.pricingVat"))+': <b>'+(o.vatApplicable==="YES" ? xMoney(o.vatAmount||0,cur) : esc(t("ui.noOption")))+'</b></span></div>';
  if(p===null) html += '<div class="pricing-note crit">'+svgIcon(ICON_WARNING)+'<span>'+esc(t("ui.pricingNoProfit"))+'</span></div>';
  else if(usingDefault) html += '<div class="pricing-note warn">'+svgIcon(ICON_CLOCK)+'<span>'+esc(tpl(t("ui.pricingUsingDefault"),{pct:p}))+'</span></div>';
  if(cc.code && xHas(cc.finalPrice)){
    html += '<div class="pricing-note ok">'+svgIcon(ICON_CHECK)+'<span>'+esc(tpl(t("ui.pricingInvoiceSent"),{price: finFmt(cc.finalPrice)+' '+cur, pct: cc.profitPct}))+'</span></div>';
  }
  if(invoicePriceStale(o)) html += '<div class="pricing-note crit">'+svgIcon(ICON_WARNING)+'<span>'+esc(tpl(t("ui.pricingChangedWarn"),{price: finFmt(fp)+' '+cur}))+'</span></div>';
  if(confirmedDiff) html += '<div class="pricing-note warn">'+svgIcon(ICON_WARNING)+'<span>'+esc(tpl(t("ui.pricingConfirmedDiffNote"),{price: finFmt(cc.finalPrice)+' '+cur}))+'</span></div>';
  /* خانة نسبة الربح مفتوحة دائمًا لحمودة — تُغيَّر لكل طلبية منفصلة */
  if(can("pricing:set_profit")){
    html += '<div class="row" style="margin-top:.5rem;">'
      + '<div class="field"><label>'+esc(t("ui.pricingProfitInputLabel"))+'</label><input id="x_profit_'+o.id+'" type="number" step="0.01" min="0" value="'+(xHas(o.profitPct)?esc(o.profitPct):"")+'"></div>'
      + '<button class="btn primary" data-act="x_saveProfit" data-id="'+o.id+'">'+esc(t("ui.pricingSaveBtn"))+'</button></div>';
  }
  html += '</div>';
  return html;
}
function defaultProfitCardHtml(){
  if(!can("pricing:set_profit")) return "";
  return '<div class="card pricing-card"><h3>'+svgIcon(ICON_LOCK)+esc(t("ui.defaultProfitTitle"))+' <span class="pill warning">'+esc(t("ui.pricingPrivatePill"))+'</span></h3>'
    + '<p class="muted" style="font-size:.8rem;">'+esc(t("ui.defaultProfitDesc"))+'</p>'
    + '<div class="row"><div class="field"><label>'+esc(t("ui.defaultProfitLabel"))+'</label><input id="x_default_profit" type="number" step="0.01" min="0" value="'+(xHas(state.defaultProfitPct)?esc(state.defaultProfitPct):"")+'"></div>'
    + '<button class="btn primary" data-act="x_saveDefaultProfit">'+esc(t("ui.save"))+'</button></div></div>';
}
function xParseProfit(raw){
  raw = String(raw||"").trim();
  if(raw==="") return {ok:true, value:null};
  var n = parseFloat(raw);
  if(!isFinite(n) || n<0 || n>1000) return {ok:false};
  return {ok:true, value:xRound(n)};
}

/* ---------- (5-8) الحجز ومواعيد الشحن وتنبيهاتها ---------- */
var LOG_MS = [
  {key:"pickup", date:"pickupDate", done:"pickupDoneAt"},
  {key:"cutoff", date:"cutoffDate", done:"cutoffDoneAt"},
  {key:"shipping", date:"shippingDate", done:"shippedAt"}
];
function msDef(key){ return LOG_MS.filter(function(m){ return m.key===key; })[0]; }
/* الـ Cut-off: التاريخ اللي يدخله اللوجستيك، وإلا يُحسب من وصول السفينة المتوقع (3 أيام قبل) */
function effectiveCutoffDate(o){
  var b = o.booking || {};
  if(b.cutoffDate) return fmtDate(b.cutoffDate);
  return computeCutOffDate((o.billOfLading||{}).vesselEtaPort);
}
function msDate(o, key){
  if(key==="cutoff") return effectiveCutoffDate(o);
  var v = (o.booking||{})[msDef(key).date];
  return v ? fmtDate(v) : null;
}
function msDone(o, key){
  var b = o.booking || {};
  if(b.shippedAt) return true; /* تم الشحن = كل ما قبله منجز */
  if(key==="shipping") return false;
  if(key==="cutoff"){
    if(b.cutoffDoneAt) return true;
    var blDoc = (o.documents||[]).filter(function(x){ return x.type==="BILL_OF_LADING"; })[0] || {};
    return blDoc.status==="ISSUED";
  }
  return !!(b.pickupDoneAt || b.cutoffDoneAt);
}
function msStatus(o, key){
  if(o.phase==="COMPLETED" || o.phase==="CANCELLED") return null;
  var d = msDate(o, key);
  if(!d) return null;
  if(msDone(o, key)) return "DONE";
  if(xToday() > d) return "PASSED";
  return xDaysLeft(d)<=2 ? "SOON" : "OK";
}
function orderLogAlerts(o){
  var out = [];
  LOG_MS.forEach(function(m){
    var s = msStatus(o, m.key);
    if(s==="PASSED" || s==="SOON") out.push({key:m.key, status:s, date:msDate(o, m.key)});
  });
  return out;
}
function logAlertText(a){
  return tpl(t(a.status==="PASSED" ? "ui.alertPassedTpl" : "ui.alertSoonTpl"), {ms:t("ui.ms_"+a.key), date:a.date, days:xDaysLeft(a.date)});
}
function logAlertPillsHtml(o){
  return orderLogAlerts(o).map(function(a){
    return '<span class="pill '+(a.status==="PASSED"?"critical":"warning")+'" title="'+esc(logAlertText(a))+'">'+svgIcon(ICON_CLOCK)+esc(t("ui.ms_"+a.key))+' '+bdi(a.date.slice(5))+'</span>';
  }).join("");
}
function logAlertsBannerHtml(o){
  var al = orderLogAlerts(o);
  if(!al.length) return "";
  var crit = al.some(function(a){ return a.status==="PASSED"; });
  return '<div class="log-alert-banner'+(crit?" crit":"")+'" role="alert"><b>'+svgIcon(crit?ICON_WARNING:ICON_CLOCK)+esc(t("ui.logAlertBannerTitle"))+'</b><ul>'
    + al.map(function(a){ return '<li>'+esc(logAlertText(a))+'</li>'; }).join("") + '</ul></div>';
}
function bookingCardHtml(o){
  var canEdit = can("logistics:manage_booking_stage");
  var b = o.booking || {};
  var hasData = !!(o.booking && (b.bookingNumber || b.carrier || b.detailValue || b.pickupDate || b.cutoffDate || b.shippingDate)) || !!effectiveCutoffDate(o);
  if(!canEdit && !hasData) return "";
  var html = '<div class="card"><h3>'+svgIcon(ICON_CLOCK)+esc(t("ui.bookingCardTitle"))+'</h3>';
  html += '<p class="muted" style="font-size:.75rem;margin-top:-.3rem;">'+esc(t("ui.bookingCardDesc"))+'</p>';
  if(canEdit){
    var type = b.type || (o.needsReefer ? "REEFER" : "FCL");
    var typeOpts = BOOKING_TYPE_KEYS.map(function(ty){ return '<option value="'+ty+'"'+(type===ty?" selected":"")+'>'+esc(t("bookingTypes."+ty))+'</option>'; }).join("");
    html += '<div class="grid2">';
    html += '<div class="field"><label>'+esc(t("ui.bookingTypeLabel"))+'</label><select id="bk_type_'+o.id+'">'+typeOpts+'</select></div>';
    html += field(t("ui.carrierLabel"), "bk_carrier_"+o.id, "text", {value:b.carrier||""});
    html += field(t("ui.bookingNumberLabel"), "bk_number_"+o.id, "text", {value:b.bookingNumber||""});
    html += field(t("ui.referenceLabel"), "bk_ref_"+o.id, "text", {value:b.detailValue||""});
    html += field(t("ui.pickupDateLabel"), "bk_pickup_"+o.id, "date", {value:b.pickupDate?fmtDate(b.pickupDate):""});
    html += '<div class="field"><label for="bk_cutoff_'+o.id+'">'+esc(t("ui.cutoffDateLabel"))+'</label><input id="bk_cutoff_'+o.id+'" type="date" value="'+(b.cutoffDate?fmtDate(b.cutoffDate):"")+'">'
      + '<span class="muted" style="font-size:.7rem;">'+esc(t("ui.cutoffFromEtaNote"))+((!b.cutoffDate && effectiveCutoffDate(o))?(': '+bdi(effectiveCutoffDate(o))):'')+'</span></div>';
    html += field(t("ui.shippingDateLabel"), "bk_shipping_"+o.id, "date", {value:b.shippingDate?fmtDate(b.shippingDate):""});
    html += '</div>';
    html += '<button class="btn primary" data-act="x_saveBooking" data-id="'+o.id+'">'+esc(t("ui.saveBookingDatesBtn"))+'</button>';
  } else {
    html += '<div class="grid2">';
    html += infoRow(t("ui.bookingTypeLabel"), b.type ? t("bookingTypes."+b.type) : null);
    html += infoRow(t("ui.carrierLabel"), b.carrier, "auto");
    html += infoRow(t("ui.bookingNumberLabel"), b.bookingNumber, "ltr");
    html += infoRow(t("ui.referenceLabel"), b.detailValue, "ltr");
    html += '</div>';
  }
  html += '<div class="ms-list">';
  LOG_MS.forEach(function(m){
    var d = msDate(o, m.key), st = msStatus(o, m.key) || (d ? "OK" : "NONE");
    var pillCls = {DONE:"success", PASSED:"critical", SOON:"warning", OK:"info", NONE:"neutral"}[st];
    var doneAt = b[m.done];
    html += '<div class="ms-item s-'+st+'"><span class="ms-name">'+esc(t("ui.ms_"+m.key))+'</span>'
      + '<span class="ms-date">'+(d ? bdi(d) : '—')+'</span>'
      + '<span class="ms-actions"><span class="pill '+pillCls+'" style="font-size:.68rem;">'+esc(t("ui.msSt"+st))+'</span>'
      + ((st==="SOON" || st==="OK") && d ? '<span class="muted" style="font-size:.7rem;">'+esc(tpl(t("ui.msDaysLeftTpl"),{days:xDaysLeft(d)}))+'</span>' : '')
      + (doneAt ? '<span class="muted" style="font-size:.7rem;">'+esc(tpl(t("ui.msDoneAtTpl"),{date:fmtDate(doneAt)}))+'</span>' : '')
      + '</span>';
    if(canEdit && d){
      if(!doneAt) html += '<span class="ms-actions"><button class="btn small success" data-act="x_msDone" data-id="'+o.id+'" data-ms="'+m.key+'">'+svgIcon(ICON_CHECK)+esc(t("ui.msDone_"+m.key))+'</button></span>';
      else html += '<span class="ms-actions"><button class="btn small" data-act="x_msUndo" data-id="'+o.id+'" data-ms="'+m.key+'">'+esc(t("ui.msUndo"))+'</button></span>';
    }
    html += '</div>';
  });
  html += '</div></div>';
  return html;
}

/* ---------- المرفقات: تُرفع إلى الخادم وتُحفظ هناك (متاحة لكل المستخدمين من أي جهاز) ---------- */
var ATT_MAX_BYTES = 15*1024*1024;
function attDel(id){
  if(!id) return Promise.resolve();
  return Server.api("DELETE", "/api/attachments/"+encodeURIComponent(id)).catch(function(){});
}
function attValidate(file){
  if(file.size > ATT_MAX_BYTES) return "ui.attTooBig";
  if(!(/^image\//.test(file.type) || file.type==="application/pdf" || /\.pdf$/i.test(file.name))) return "ui.attBadType";
  return null;
}
/* يخزن الملف ويرجع بياناته الوصفية التي تُحفظ داخل الطلبية */
function attStore(file){
  var err = attValidate(file);
  if(err) return Promise.reject(new Error(err));
  return Server.upload(file);
}
function attOpen(id){
  var url = "/api/attachments/"+encodeURIComponent(id);
  var w = window.open(url, "_blank");
  if(!w){
    var a = document.createElement("a");
    a.href = url + "?download=1";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }
}
function attSizeLabel(n){ return n>=1048576 ? (Math.round(n/104857.6)/10)+" MB" : Math.max(1, Math.round(n/1024))+" KB"; }
function attLinkHtml(att){
  if(!att || !att.id) return '<span class="muted" style="font-size:.74rem;">'+esc(t("ui.attNoFile"))+'</span>';
  return '<button type="button" class="btn small att-link" data-act="x_attOpen" data-att="'+esc(att.id)+'" title="'+esc(att.name)+'">'+svgIcon(ICON_FILE)+esc(t("ui.attOpen"))+' <span class="muted" style="font-size:.68rem;">'+esc(attSizeLabel(att.size||0))+'</span></button>';
}
function attUploadBtnHtml(o, kind, key, hasFile){
  return '<label class="btn small file-btn">'+svgIcon(ICON_UPLOAD)+esc(t(hasFile?"ui.attReplace":"ui.attUpload"))
    + '<input type="file" accept="application/pdf,image/*" data-id="'+o.id+'" data-kind="'+kind+'" data-key="'+esc(key)+'" onchange="xAttachInput(this)"></label>';
}
function attErrorToast(e){ toast(t((e && /^ui\./.test(e.message)) ? e.message : "ui.attFailed"), "critical"); }

/* ---------- (10) المستندات المخصصة ---------- */
var CUSTOM_DOC_MAX = 5;
function customDocsHtml(o){
  var docs = o.customDocs || [];
  var canEdit = can("documentation:edit");
  if(!canEdit && !docs.length) return "";
  var html = '<div class="custom-docs"><h4 style="display:flex;align-items:center;gap:.45rem;flex-wrap:wrap;font-size:.9rem;">'+svgIcon(ICON_FILE)+esc(t("ui.customDocsTitle"))
    + ' <span class="pill neutral" style="font-size:.68rem;">'+esc(tpl(t("ui.customDocsCountTpl"),{n:docs.length}))+'</span></h4>';
  html += '<p class="muted" style="font-size:.74rem;margin-top:-.2rem;">'+esc(t("ui.customDocsDesc"))+'</p>';
  docs.forEach(function(d, i){
    var meta = [d.refNo, d.issuer, d.date ? fmtDate(d.date) : ""].filter(function(x){ return x; }).join(" · ");
    html += '<div class="stage-item"><span><b>'+(i+1)+'. '+esc(d.name)+'</b>'+(meta?('<div class="muted" style="font-size:.74rem;">'+esc(meta)+'</div>'):'')+'</span>'
      + '<span class="row" style="gap:.35rem;align-items:center;">'
      + '<span class="pill '+(d.att?"success":"neutral")+'" style="font-size:.66rem;">'+esc(t(d.att?"ui.issued":"ui.draft"))+'</span>'
      + attLinkHtml(d.att);
    if(canEdit){
      html += attUploadBtnHtml(o, "doc", d.id, !!d.att)
        + '<button class="btn small danger" data-act="x_delCustomDoc" data-id="'+o.id+'" data-key="'+d.id+'">'+esc(t("ui.deleteBtn"))+'</button>';
    }
    html += '</span></div>';
  });
  if(!docs.length) html += '<p class="muted" style="font-size:.78rem;">'+esc(t("ui.customDocNone"))+'</p>';
  if(canEdit){
    if(docs.length < CUSTOM_DOC_MAX){
      html += '<div class="grid2" style="margin-top:.6rem;">'
        + field(t("ui.customDocNameLabel"), "cd_name_"+o.id, "text", {placeholder:t("ui.customDocNamePlaceholder")})
        + field(t("ui.customDocRefLabel"), "cd_ref_"+o.id, "text")
        + field(t("ui.customDocIssuerLabel"), "cd_issuer_"+o.id, "text")
        + field(t("ui.customDocDateLabel"), "cd_date_"+o.id, "date")
        + '<div class="field"><label for="cd_file_'+o.id+'">'+esc(t("ui.customDocFileLabel"))+'</label><input id="cd_file_'+o.id+'" type="file" accept="application/pdf,image/*"></div>'
        + '</div><button class="btn primary" data-act="x_addCustomDoc" data-id="'+o.id+'">'+esc(t("ui.customDocAddBtn"))+'</button>';
    } else {
      html += '<p class="muted" style="font-size:.76rem;">'+esc(t("ui.customDocLimit"))+'</p>';
    }
    html += '<p class="muted" style="font-size:.7rem;margin-top:.5rem;">'+esc(t("ui.attDeviceNote"))+'</p>';
  }
  html += '</div>';
  return html;
}

/* ---------- (11) المخلّص الجمركي ومستندات التخليص ---------- */
var CUSTOMS_SIDES = ["EXPORT","IMPORT"];
var CUSTOMS_FIELDS = [["name","agentNameLabel","text"],["company","agentCompanyLabel","text"],["phone","agentPhoneLabel","tel"],["email","agentEmailLabel","email"],["declarationNo","declNoLabel","text"],["declarationDate","declDateLabel","date"]];
function customsHasData(o){
  var ca = o.customsAgents || {};
  return CUSTOMS_SIDES.some(function(s){ var a = ca[s]; return a && (a.name || a.company || a.declarationNo || a.att); });
}
function customsCardHtml(o){
  var canEdit = can("documentation:edit");
  if(!canEdit && !customsHasData(o)) return "";
  var ca = o.customsAgents || {};
  var party = (INCOTERM_MATRIX[o.incotermCode]||{}).CUSTOMS_CLEARING;
  var html = '<div class="card"><h3>'+svgIcon(ICON_PACKAGE)+esc(t("ui.customsCardTitle"))+'</h3>';
  html += '<p class="muted" style="font-size:.75rem;margin-top:-.3rem;">'+esc(t("ui.customsCardDesc"))+(party?(' '+esc(tpl(t("ui.customsResponsibleTpl"),{incoterm:o.incotermCode, party:t("party."+party)}))):'')+'</p>';
  CUSTOMS_SIDES.forEach(function(side){
    var a = ca[side] || {};
    html += '<div class="customs-side"><h4>'+esc(t("ui.customsSide_"+side))+'</h4>';
    if(canEdit){
      html += '<div class="grid2">';
      CUSTOMS_FIELDS.forEach(function(f){
        html += field(t("ui."+f[1]), "ca_"+side+"_"+f[0]+"_"+o.id, f[2], {value: f[2]==="date" ? (a[f[0]]?fmtDate(a[f[0]]):"") : (a[f[0]]||"")});
      });
      html += '</div>';
    } else {
      html += '<div class="grid2">';
      CUSTOMS_FIELDS.forEach(function(f){ html += infoRow(t("ui."+f[1]), f[2]==="date" && a[f[0]] ? fmtDate(a[f[0]]) : a[f[0]], (f[2]==="text"||f[2]==="date")?"auto":"ltr"); });
      html += '</div>';
    }
    html += '<div class="row" style="align-items:center;gap:.4rem;"><span class="muted" style="font-size:.78rem;">'+esc(t("ui.declFileLabel"))+':</span>'+attLinkHtml(a.att)
      + (canEdit ? attUploadBtnHtml(o, "customs", side, !!a.att) : '') + '</div>';
    html += '</div>';
  });
  if(canEdit){
    html += '<button class="btn primary" data-act="x_saveCustoms" data-id="'+o.id+'">'+esc(t("ui.saveCustomsBtn"))+'</button>';
    html += '<p class="muted" style="font-size:.7rem;margin-top:.5rem;">'+esc(t("ui.attDeviceNote"))+'</p>';
  }
  html += '</div>';
  return html;
}
/* يقرأ خانات التخليص من الشاشة إلى الطلبية (يُستدعى عند الحفظ وقبل رفع ملف حتى لا يضيع ما كُتب) */
function xCollectCustoms(o){
  o.customsAgents = o.customsAgents || {};
  CUSTOMS_SIDES.forEach(function(side){
    var a = o.customsAgents[side] = o.customsAgents[side] || {};
    CUSTOMS_FIELDS.forEach(function(f){
      var el = document.getElementById("ca_"+side+"_"+f[0]+"_"+o.id);
      if(el) a[f[0]] = (el.value||"").trim() || (f[2]==="date" ? null : "");
    });
  });
}
function customsStageNoteHtml(o){
  var ca = o.customsAgents || {};
  var names = CUSTOMS_SIDES.map(function(s){
    var a = ca[s] || {};
    var who = a.name || a.company;
    return who ? (t("ui.customsSide_"+s).split(" — ")[0]+": "+who+(a.declarationNo?(" ("+a.declarationNo+")"):"")) : null;
  }).filter(function(x){ return x; });
  return '<p class="muted" style="font-size:.75rem;margin:.2rem 0;">'+esc(names.length ? tpl(t("ui.customsStageAgentTpl"),{agents:names.join(" · ")}) : t("ui.customsStageNoAgent"))+'</p>';
}

/* رفع/استبدال ملف من زر داخل مستند مخصص أو بطاقة التخليص */
function xAttachInput(input){
  var file = input.files && input.files[0];
  if(!file) return;
  var o = findOrder(input.getAttribute("data-id"));
  var kind = input.getAttribute("data-kind"), key = input.getAttribute("data-key");
  if(!o || !can("documentation:edit")){ input.value=""; return; }
  if(kind==="customs") xCollectCustoms(o);
  attStore(file).then(function(meta){
    var oldId = null;
    if(kind==="doc"){
      var d = (o.customDocs||[]).filter(function(x){ return x.id===key; })[0];
      if(!d){ attDel(meta.id); return; }
      oldId = d.att && d.att.id; d.att = meta;
    } else {
      o.customsAgents = o.customsAgents || {};
      var a = o.customsAgents[key] = o.customsAgents[key] || {};
      oldId = a.att && a.att.id; a.att = meta;
    }
    if(oldId) attDel(oldId);
    log(kind==="doc" ? "CustomDocument" : "CustomsClearance", o.orderNumber, "UPLOAD_FILE");
    saveState(); toast(t("ui.attSaved"), "success"); renderMain();
  }).catch(function(e){ input.value=""; attErrorToast(e); });
}

/* ============================================================
   مدفوعات الزبون وتسليم البوليصة
   القاعدة: البوليصة تصدر عند الشحن (مدير المالية بعد سداد أجرة اللوجستيك — دون تغيير)،
   لكن تسليمها للزبون ممنوع حتى يسدّد كامل سعر الفاتورة المؤكدة.
   ============================================================ */
Object.assign(I18N.ar.ui, {
  custPayTitle:"مدفوعات الزبون", custPayDesc:"ما دفعه الزبون مقابل الفاتورة المؤكدة. البوليصة لا تُسلَّم للزبون قبل السداد الكامل.",
  custPayInvoiceTotal:"إجمالي الفاتورة المؤكدة", custPayPaid:"المدفوع", custPayRemaining:"المتبقي على الزبون",
  custPaySt_NO_INVOICE:"لا توجد فاتورة مؤكدة", custPaySt_UNPAID:"غير مسدد", custPaySt_PARTIAL:"مسدد جزئيًا", custPaySt_PAID:"مسدد بالكامل",
  custPayNeedsInvoice:"تُسجَّل المدفوعات بعد تأكيد الزبون للفاتورة.",
  custPayColDate:"التاريخ", custPayColAmount:"المبلغ", custPayColMethod:"الطريقة", custPayColRef:"المرجع", custPayColBy:"سجّلها",
  custPayNone:"لا توجد دفعات مسجلة بعد.",
  custPayAmountLabel:"المبلغ", custPayDateLabel:"التاريخ", custPayMethodLabel:"طريقة الدفع", custPayRefLabel:"المرجع (رقم الحوالة / الصك...)", custPayNoteLabel:"ملاحظة",
  custPayAddBtn:"تسجيل الدفعة", custPayDeleteConfirm:"حذف هذه الدفعة؟ سيُحذف معها سجل الخزينة المرتبط بها.",
  custPayAmountInvalid:"المبلغ يجب أن يكون رقمًا أكبر من صفر.", custPayOverRemaining:"المبلغ أكبر من المتبقي على الزبون",
  custPayDateRequired:"اختر تاريخ الدفعة.",
  custPayAdded:"سُجّلت الدفعة وأُضيفت للخزينة", custPayDeleted:"حُذفت الدفعة وسجل الخزينة المرتبط",
  custPayLockedAfterRelease:"لا يمكن حذف الدفعات بعد تسليم البوليصة للزبون.",
  custPayLockedAfterDelivery:"لا يمكن حذف الدفعات بعد إغلاق مرحلة التسليم.",
  custPayTreasuryDescTpl:"دفعة من الزبون — {method} {reference}",
  payMethod_CASH:"نقدًا", payMethod_BANK_TRANSFER:"حوالة مصرفية", payMethod_CHEQUE:"صك", payMethod_LC:"اعتماد مستندي (LC)",
  blReleaseTitle:"تسليم البوليصة للزبون",
  blReleaseBlockedTpl:"لا يمكن تسليم البوليصة: المتبقي على الزبون {remaining} {currency}",
  blReleaseNoInvoice:"لا يمكن تسليم البوليصة: لا توجد فاتورة مؤكدة من الزبون بعد.",
  blReleaseStatusLabel:"حالة سداد الزبون",
  blReleaseToNameLabel:"اسم مستلم البوليصة (من طرف الزبون)", blReleaseBtn:"تسليم البوليصة للزبون",
  blReleaseNameRequired:"اكتب اسم مستلم البوليصة.",
  blReleaseConfirm:"تسليم البوليصة الأصلية للزبون؟ بعد التسليم يستطيع الزبون استلام بضاعته من الميناء، وتُقفل مدفوعات هذه الطلبية.",
  blReleasedTpl:"سُلّمت البوليصة للزبون {name} بتاريخ {date} بواسطة {role}",
  blReleaseNotYet:"لم تُسلَّم البوليصة للزبون بعد.",
  blReleaseCwbNote:"بوليصة إلكترونية (CWB) غير قابلة للتداول — لا يوجد تسليم ورقي. شرط السداد الكامل ينتقل إلى مرحلة «التسليم».",
  blReleasedToast:"سُلّمت البوليصة للزبون",
  deliveryNeedsBLRelease:"لا يمكن إغلاق مرحلة التسليم: البوليصة لم تُسلَّم للزبون بعد (تُسلَّم بعد السداد الكامل).",
  deliveryNeedsPaymentCWB:"لا يمكن إغلاق مرحلة التسليم: الزبون لم يسدّد كامل الفاتورة (بوليصة إلكترونية CWB).",
  remainingPill:"متبقي على الزبون", remainingSide:"المتبقي على الزبون",
  assistantPayTpl:"السداد: {status}", assistantPayRemainingTpl:"السداد: {status} — المتبقي {remaining}"
});
Object.assign(I18N.en.ui, {
  custPayTitle:"Customer Payments", custPayDesc:"What the customer paid against the confirmed invoice. The B/L is not handed to the customer before full payment.",
  custPayInvoiceTotal:"Confirmed invoice total", custPayPaid:"Paid", custPayRemaining:"Customer balance due",
  custPaySt_NO_INVOICE:"No confirmed invoice", custPaySt_UNPAID:"Unpaid", custPaySt_PARTIAL:"Partially paid", custPaySt_PAID:"Fully paid",
  custPayNeedsInvoice:"Payments are recorded after the customer confirms the invoice.",
  custPayColDate:"Date", custPayColAmount:"Amount", custPayColMethod:"Method", custPayColRef:"Reference", custPayColBy:"Recorded by",
  custPayNone:"No payments recorded yet.",
  custPayAmountLabel:"Amount", custPayDateLabel:"Date", custPayMethodLabel:"Payment method", custPayRefLabel:"Reference (transfer / cheque no.)", custPayNoteLabel:"Note",
  custPayAddBtn:"Record payment", custPayDeleteConfirm:"Delete this payment? Its linked treasury record will be deleted too.",
  custPayAmountInvalid:"Amount must be a number above zero.", custPayOverRemaining:"The amount exceeds the customer's balance due",
  custPayDateRequired:"Choose the payment date.",
  custPayAdded:"Payment recorded and added to treasury", custPayDeleted:"Payment and linked treasury record deleted",
  custPayLockedAfterRelease:"Payments cannot be deleted after the B/L is released to the customer.",
  custPayLockedAfterDelivery:"Payments cannot be deleted after the delivery stage is closed.",
  custPayTreasuryDescTpl:"Customer payment — {method} {reference}",
  payMethod_CASH:"Cash", payMethod_BANK_TRANSFER:"Bank transfer", payMethod_CHEQUE:"Cheque", payMethod_LC:"Letter of credit (LC)",
  blReleaseTitle:"Release B/L to customer",
  blReleaseBlockedTpl:"Cannot release the B/L: customer balance due {remaining} {currency}",
  blReleaseNoInvoice:"Cannot release the B/L: no customer-confirmed invoice yet.",
  blReleaseStatusLabel:"Customer payment status",
  blReleaseToNameLabel:"B/L received by (customer side)", blReleaseBtn:"Release B/L to customer",
  blReleaseNameRequired:"Enter the name of the person receiving the B/L.",
  blReleaseConfirm:"Hand the original B/L to the customer? After release the customer can collect the goods at the port, and this order's payments are locked.",
  blReleasedTpl:"B/L released to the customer {name} on {date} by {role}",
  blReleaseNotYet:"The B/L has not been released to the customer yet.",
  blReleaseCwbNote:"Electronic Cargo Waybill (CWB), non-negotiable — no paper release. The full-payment condition moves to the Delivery stage.",
  blReleasedToast:"B/L released to the customer",
  deliveryNeedsBLRelease:"Cannot close delivery: the B/L has not been released to the customer yet (released after full payment).",
  deliveryNeedsPaymentCWB:"Cannot close delivery: the customer has not paid the full invoice (electronic CWB).",
  remainingPill:"Customer balance due", remainingSide:"Customer balance due",
  assistantPayTpl:"Payment: {status}", assistantPayRemainingTpl:"Payment: {status} — balance {remaining}"
});
Object.assign(I18N.zh.ui, {
  custPayTitle:"客户付款", custPayDesc:"客户针对已确认发票的付款。全额付款前不向客户交付提单。",
  custPayInvoiceTotal:"已确认发票总额", custPayPaid:"已付", custPayRemaining:"客户欠款",
  custPaySt_NO_INVOICE:"无已确认发票", custPaySt_UNPAID:"未付款", custPaySt_PARTIAL:"部分付款", custPaySt_PAID:"已全额付款",
  custPayNeedsInvoice:"客户确认发票后才能登记付款。",
  custPayColDate:"日期", custPayColAmount:"金额", custPayColMethod:"方式", custPayColRef:"参考号", custPayColBy:"登记人",
  custPayNone:"尚无付款记录。",
  custPayAmountLabel:"金额", custPayDateLabel:"日期", custPayMethodLabel:"付款方式", custPayRefLabel:"参考号（汇款/支票号）", custPayNoteLabel:"备注",
  custPayAddBtn:"登记付款", custPayDeleteConfirm:"删除此付款？关联的资金记录也将删除。",
  custPayAmountInvalid:"金额必须是大于零的数字。", custPayOverRemaining:"金额超过客户欠款",
  custPayDateRequired:"请选择付款日期。",
  custPayAdded:"付款已登记并加入资金记录", custPayDeleted:"付款及关联资金记录已删除",
  custPayLockedAfterRelease:"提单交付客户后不能删除付款。", custPayLockedAfterDelivery:"交付阶段关闭后不能删除付款。",
  custPayTreasuryDescTpl:"客户付款 — {method} {reference}",
  payMethod_CASH:"现金", payMethod_BANK_TRANSFER:"银行转账", payMethod_CHEQUE:"支票", payMethod_LC:"信用证 (LC)",
  blReleaseTitle:"向客户交付提单",
  blReleaseBlockedTpl:"无法交付提单：客户欠款 {remaining} {currency}",
  blReleaseNoInvoice:"无法交付提单：客户尚未确认发票。",
  blReleaseStatusLabel:"客户付款状态",
  blReleaseToNameLabel:"提单接收人（客户方）", blReleaseBtn:"向客户交付提单",
  blReleaseNameRequired:"请输入提单接收人姓名。",
  blReleaseConfirm:"向客户交付正本提单？交付后客户可在港口提货，本订单付款将被锁定。",
  blReleasedTpl:"提单已于 {date} 由 {role} 交付客户 {name}",
  blReleaseNotYet:"提单尚未交付客户。",
  blReleaseCwbNote:"电子运单 (CWB) 不可转让 — 无纸质交付。全额付款条件转移到交付阶段。",
  blReleasedToast:"提单已交付客户",
  deliveryNeedsBLRelease:"无法关闭交付阶段：提单尚未交付客户（全额付款后交付）。",
  deliveryNeedsPaymentCWB:"无法关闭交付阶段：客户尚未付清发票（电子运单 CWB）。",
  remainingPill:"客户欠款", remainingSide:"客户欠款",
  assistantPayTpl:"付款：{status}", assistantPayRemainingTpl:"付款：{status} — 欠款 {remaining}"
});

var PAY_METHODS = ["CASH","BANK_TRANSFER","CHEQUE","LC"];
/* إجمالي ما يطالَب به الزبون = سعر الفاتورة المؤكدة (لقطة وقت الإصدار). لا مدفوعات قبل التأكيد */
function customerInvoiceTotal(o){
  var cc = o.customerConfirmation;
  return (cc && cc.confirmedAt && xHas(cc.finalPrice)) ? Number(cc.finalPrice) : null;
}
function customerPaidTotal(o){
  return xRound((o.customerPayments||[]).reduce(function(s, p){ return s + (Number(p.amount)||0); }, 0));
}
function customerRemaining(o){
  var total = customerInvoiceTotal(o);
  if(total===null) return null;
  var r = xRound(total - customerPaidTotal(o));
  return Math.abs(r) < 0.01 ? 0 : r;
}
function customerPayStatus(o){
  var r = customerRemaining(o);
  if(r===null) return "NO_INVOICE";
  if(r <= 0) return "PAID";
  return customerPaidTotal(o) > 0 ? "PARTIAL" : "UNPAID";
}
var PAY_STATUS_PILL = {NO_INVOICE:"neutral", UNPAID:"critical", PARTIAL:"warning", PAID:"success"};
function payStatusPillHtml(o){
  var st = customerPayStatus(o);
  return '<span class="pill '+PAY_STATUS_PILL[st]+'" style="font-size:.68rem;">'+esc(t("ui.custPaySt_"+st))+'</span>';
}
function canSeeCustomerBalance(){ return can("customer_payments:edit") || can("customer_payments:view") || can("bl:release"); }
function blIsCwb(o){ return (o.billOfLading||{}).documentType==="CWB"; }
function blIsReleased(o){ return !!(o.billOfLading && o.billOfLading.releasedToCustomerAt); }
function deliveryStageDone(o){ var s = (o.stages||[]).filter(function(x){ return x.key==="DELIVERY"; })[0]; return !!(s && s.status==="DONE"); }
/* بعد تسليم البوليصة (أو إغلاق التسليم في حالة CWB) تُقفل المدفوعات */
function customerPaymentsLockKey(o){
  if(blIsReleased(o)) return "ui.custPayLockedAfterRelease";
  if(blIsCwb(o) && deliveryStageDone(o)) return "ui.custPayLockedAfterDelivery";
  return null;
}
/* شرط إغلاق مرحلة التسليم: HBL لازم تكون سُلّمت للزبون؛ CWB لازم السداد الكامل */
function deliveryBlockReason(o){
  if(blIsCwb(o)) return customerRemaining(o)===0 ? null : "ui.deliveryNeedsPaymentCWB";
  return blIsReleased(o) ? null : "ui.deliveryNeedsBLRelease";
}
/* تسجيل الدفعة + سجل الخزينة المرتبط بها (paymentId) — يُستخدم من الواجهة ومن البيانات التجريبية */
function addCustomerPayment(o, data){
  var p = {id:uid(), amount:xRound(data.amount), currency:o.currency, date:data.date, method:data.method,
    reference:data.reference||"", note:data.note||"", recordedAt:nowIso(),
    recordedByUsername:state.currentUsername, recordedByRole:state.currentRole};
  o.customerPayments = o.customerPayments || [];
  o.customerPayments.push(p);
  o.treasuryRecords = o.treasuryRecords || [];
  o.treasuryRecords.unshift({description: tpl(t("ui.custPayTreasuryDescTpl"), {method:t("ui.payMethod_"+p.method), reference:p.reference}).trim(),
    amount:p.amount, direction:"IN", recordedAt:nowIso(), paymentId:p.id});
  return p;
}

function customerPaymentsCardHtml(o){
  var canEditPay = can("customer_payments:edit");
  if(!canEditPay && !can("customer_payments:view")) return "";
  var cur = o.currency, total = customerInvoiceTotal(o), st = customerPayStatus(o);
  var html = '<div class="card"><h3>'+svgIcon('<rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2.5"></circle>')+esc(t("ui.custPayTitle"))+' '+payStatusPillHtml(o)+'</h3>';
  html += '<p class="muted" style="font-size:.75rem;margin-top:-.3rem;">'+esc(t("ui.custPayDesc"))+'</p>';
  if(total===null){
    html += '<div class="pricing-note info">'+svgIcon(ICON_HOURGLASS)+'<span>'+esc(t("ui.custPayNeedsInvoice"))+'</span></div></div>';
    return html;
  }
  var rem = customerRemaining(o);
  html += '<table class="pay-summary">'
    + '<tr><td>'+esc(t("ui.custPayInvoiceTotal"))+'</td><td>'+xMoney(total,cur)+'</td></tr>'
    + '<tr><td>'+esc(t("ui.custPayPaid"))+'</td><td>'+xMoney(customerPaidTotal(o),cur)+'</td></tr>'
    + '<tr class="remaining '+(rem>0?"due":"clear")+'"><td>'+esc(t("ui.custPayRemaining"))+'</td><td>'+xMoney(rem,cur)+'</td></tr>'
    + '</table>';
  var pays = o.customerPayments || [];
  var lockKey = customerPaymentsLockKey(o);
  if(pays.length){
    html += '<div class="pay-table-wrap"><table class="pay-table"><thead><tr><th>'+esc(t("ui.custPayColDate"))+'</th><th>'+esc(t("ui.custPayColAmount"))+'</th><th>'+esc(t("ui.custPayColMethod"))+'</th><th>'+esc(t("ui.custPayColRef"))+'</th><th>'+esc(t("ui.custPayColBy"))+'</th>'+(canEditPay&&!lockKey?'<th></th>':'')+'</tr></thead><tbody>';
    pays.forEach(function(p){
      html += '<tr><td>'+bdi(fmtDate(p.date))+'</td><td>'+xMoney(p.amount,p.currency||cur)+'</td><td>'+esc(t("ui.payMethod_"+p.method))+'</td>'
        + '<td>'+(p.reference?bdi(p.reference):'—')+(p.note?('<div class="muted" style="font-size:.7rem;white-space:normal;">'+esc(p.note)+'</div>'):'')+'</td>'
        + '<td>'+esc(roleLabel(p.recordedByRole))+'<div class="muted" style="font-size:.68rem;">'+bdi(fmtDate(p.recordedAt))+'</div></td>'
        + (canEditPay&&!lockKey ? '<td><button class="btn small danger" data-act="x_delPayment" data-id="'+o.id+'" data-key="'+p.id+'">'+esc(t("ui.deleteBtn"))+'</button></td>' : '')
        + '</tr>';
    });
    html += '</tbody></table></div>';
  } else {
    html += '<p class="muted" style="font-size:.8rem;">'+esc(t("ui.custPayNone"))+'</p>';
  }
  if(lockKey) html += '<p class="muted" style="font-size:.74rem;">'+esc(t(lockKey))+'</p>';
  if(canEditPay && rem>0 && !lockKey){
    var methodOpts = PAY_METHODS.map(function(m){ return '<option value="'+m+'">'+esc(t("ui.payMethod_"+m))+'</option>'; }).join("");
    html += '<div class="grid2" style="margin-top:.4rem;">'
      + field(t("ui.custPayAmountLabel")+' ('+cur+')', "cp_amount_"+o.id, "number", {step:"0.01"})
      + field(t("ui.custPayDateLabel"), "cp_date_"+o.id, "date", {value:xToday()})
      + '<div class="field"><label for="cp_method_'+o.id+'">'+esc(t("ui.custPayMethodLabel"))+'</label><select id="cp_method_'+o.id+'">'+methodOpts+'</select></div>'
      + field(t("ui.custPayRefLabel"), "cp_ref_"+o.id, "text")
      + '</div>'
      + field(t("ui.custPayNoteLabel"), "cp_note_"+o.id, "text")
      + '<button class="btn primary" data-act="x_addPayment" data-id="'+o.id+'">'+esc(t("ui.custPayAddBtn"))+'</button>';
  }
  html += '</div>';
  return html;
}

/* قسم التسليم داخل بطاقة البوليصة — يظهر فقط بعد إصدارها (ISSUED) */
function blReleaseSectionHtml(o){
  var bl = o.billOfLading || {};
  var html = '<div style="border-top:1px dashed var(--border);margin-top:.8rem;padding-top:.7rem;"><h4 style="font-size:.9rem;display:flex;align-items:center;gap:.4rem;flex-wrap:wrap;">'+esc(t("ui.blReleaseTitle"))
    + (canSeeCustomerBalance() ? ' '+payStatusPillHtml(o) : '') + '</h4>';
  if(blIsCwb(o)){
    return html + '<p class="muted" style="font-size:.75rem;">'+esc(t("ui.blReleaseCwbNote"))+'</p></div>';
  }
  if(blIsReleased(o)){
    return html + '<div class="pricing-note ok">'+svgIcon(ICON_CHECK)+'<span>'+esc(tpl(t("ui.blReleasedTpl"), {name:bl.releasedToName||"—", date:fmtDate(bl.releasedToCustomerAt), role:roleLabel(bl.releasedByRole)}))+'</span></div></div>';
  }
  if(!can("bl:release")){
    return html + '<p class="muted" style="font-size:.75rem;">'+esc(t("ui.blReleaseNotYet"))+'</p></div>';
  }
  var rem = customerRemaining(o);
  if(rem===null){
    html += '<div class="pricing-note crit">'+svgIcon(ICON_WARNING)+'<span>'+esc(t("ui.blReleaseNoInvoice"))+'</span></div>';
  } else if(rem > 0){
    html += '<div class="pricing-note crit">'+svgIcon(ICON_WARNING)+'<span>'+esc(tpl(t("ui.blReleaseBlockedTpl"), {remaining:finFmt(rem), currency:o.currency}))+'</span></div>';
  }
  var blocked = rem===null || rem > 0;
  html += '<div class="row" style="align-items:flex-end;">'
    + (blocked ? '' : '<div class="field" style="min-width:220px;"><label for="bl_release_name_'+o.id+'">'+esc(t("ui.blReleaseToNameLabel"))+'</label><input id="bl_release_name_'+o.id+'"></div>')
    + '<button class="btn success" data-act="x_releaseBL" data-id="'+o.id+'"'+(blocked?' disabled style="opacity:.55;cursor:not-allowed;"':'')+'>'+esc(t("ui.blReleaseBtn"))+'</button></div>';
  return html + '</div>';
}

function xAct(act, el, o){
  var id = el.getAttribute("data-id");
  if(act==="x_attOpen"){ attOpen(el.getAttribute("data-att")); return; }
  if(act==="x_saveDefaultProfit"){
    if(!can("pricing:set_profit")) return;
    var pd = xParseProfit(document.getElementById("x_default_profit").value);
    if(!pd.ok){ toast(t("ui.profitInvalid"), "critical"); return; }
    state.defaultProfitPct = pd.value;
    log("SystemSetting", "DEFAULT_PROFIT_PCT", "UPDATE");
    saveState(); toast(t("ui.profitSaved"), "success"); renderMain(); return;
  }
  if(!o) return;
  if(act==="x_saveProfit"){
    if(!can("pricing:set_profit")) return;
    var pr = xParseProfit(document.getElementById("x_profit_"+id).value);
    if(!pr.ok){ toast(t("ui.profitInvalid"), "critical"); return; }
    o.profitPct = pr.value;
    log("Pricing", o.orderNumber, "SET_PROFIT_PCT");
    saveState(); toast(t("ui.profitSaved"), "success"); renderMain();
  }
  else if(act==="x_saveBooking"){
    if(!can("logistics:manage_booking_stage")) return;
    var prev = o.booking || {};
    var val = function(k){ var e = document.getElementById(k+"_"+id); return e ? (e.value||"").trim() : ""; };
    o.booking = {
      type: val("bk_type") || prev.type || "FCL", carrier: val("bk_carrier"), detailValue: val("bk_ref"),
      bookingNumber: val("bk_number"),
      pickupDate: val("bk_pickup") || null, cutoffDate: val("bk_cutoff") || null, shippingDate: val("bk_shipping") || null,
      pickupDoneAt: prev.pickupDoneAt || null, cutoffDoneAt: prev.cutoffDoneAt || null, shippedAt: prev.shippedAt || null,
      bonusNotes: prev.bonusNotes || []
    };
    log("Booking", o.orderNumber, "SAVE_BOOKING_DATES");
    saveState(); toast(t("toast.saved"), "success");
    var p1 = o.booking.pickupDate, c1 = effectiveCutoffDate(o), s1 = o.booking.shippingDate;
    if((p1 && c1 && p1 > c1) || (c1 && s1 && c1 > s1) || (p1 && s1 && p1 > s1)) toast(t("ui.bookingDatesOrderWarn"), "warning");
    renderMain(); checkCutoffNotifications();
  }
  else if(act==="x_msDone" || act==="x_msUndo"){
    if(!can("logistics:manage_booking_stage")) return;
    var m = msDef(el.getAttribute("data-ms"));
    if(!m) return;
    o.booking = o.booking || {bonusNotes:[]};
    o.booking[m.done] = act==="x_msDone" ? nowIso() : null;
    log("Booking", o.orderNumber+":"+m.key, act==="x_msDone" ? "MILESTONE_DONE" : "MILESTONE_UNDO");
    saveState(); toast(t("toast.saved"), "success"); renderMain();
  }
  else if(act==="x_addCustomDoc"){
    if(!can("documentation:edit")) return;
    o.customDocs = o.customDocs || [];
    if(o.customDocs.length >= CUSTOM_DOC_MAX){ toast(t("ui.customDocLimit"), "critical"); return; }
    var nameEl = document.getElementById("cd_name_"+id);
    var docName = (nameEl.value||"").trim();
    if(!docName){ toast(t("ui.customDocNameRequired"), "critical"); nameEl.focus(); return; }
    var doc = {id:uid(), name:docName, refNo:(document.getElementById("cd_ref_"+id).value||"").trim(),
      issuer:(document.getElementById("cd_issuer_"+id).value||"").trim(), date:document.getElementById("cd_date_"+id).value || null,
      att:null, createdAt:nowIso(), createdBy:state.currentRole};
    var fileEl = document.getElementById("cd_file_"+id);
    var file = fileEl && fileEl.files && fileEl.files[0];
    var finish = function(){
      o.customDocs.push(doc);
      log("CustomDocument", o.orderNumber+":"+doc.name, "CREATE");
      saveState(); toast(t("ui.customDocAdded"), "success"); renderMain();
    };
    if(file){ attStore(file).then(function(meta){ doc.att = meta; finish(); }).catch(attErrorToast); }
    else finish();
  }
  else if(act==="x_delCustomDoc"){
    if(!can("documentation:edit")) return;
    var key = el.getAttribute("data-key");
    confirmDialog(t("ui.confirmDeleteDoc"), function(){
      var d = (o.customDocs||[]).filter(function(x){ return x.id===key; })[0];
      if(!d) return;
      o.customDocs = o.customDocs.filter(function(x){ return x.id!==key; });
      if(d.att) attDel(d.att.id);
      log("CustomDocument", o.orderNumber+":"+d.name, "DELETE");
      saveState(); toast(t("ui.customDocDeleted"), "success"); renderMain();
    }, {title:t("ui.deleteBtn"), confirmText:t("ui.deleteBtn")});
  }
  else if(act==="x_saveCustoms"){
    if(!can("documentation:edit")) return;
    xCollectCustoms(o);
    log("CustomsClearance", o.orderNumber, "SAVE_AGENTS");
    saveState(); toast(t("ui.customsSaved"), "success"); renderMain();
  }
  else if(act==="x_addPayment"){
    if(!can("customer_payments:edit")) return;
    var remNow = customerRemaining(o);
    if(remNow===null){ toast(t("ui.custPayNeedsInvoice"), "critical"); return; }
    if(customerPaymentsLockKey(o)){ toast(t(customerPaymentsLockKey(o)), "critical"); return; }
    var amtEl = document.getElementById("cp_amount_"+id);
    var amt = parseFloat(amtEl ? amtEl.value : "");
    if(!isFinite(amt) || amt <= 0){ toast(t("ui.custPayAmountInvalid"), "critical"); if(amtEl) amtEl.focus(); return; }
    amt = xRound(amt);
    if(amt > remNow + 0.005){ toast(t("ui.custPayOverRemaining"), "critical"); amtEl.focus(); return; }
    var payDate = (document.getElementById("cp_date_"+id)||{}).value || "";
    if(!payDate){ toast(t("ui.custPayDateRequired"), "critical"); return; }
    var method = (document.getElementById("cp_method_"+id)||{}).value;
    if(PAY_METHODS.indexOf(method)===-1) method = "CASH";
    var pay = addCustomerPayment(o, {amount:amt, date:payDate, method:method,
      reference:((document.getElementById("cp_ref_"+id)||{}).value||"").trim(), note:((document.getElementById("cp_note_"+id)||{}).value||"").trim()});
    log("CustomerPayment", o.orderNumber, "ADD", pay.amount+" "+pay.currency+" · "+method+(pay.reference?(" · "+pay.reference):""));
    saveState(); toast(t("ui.custPayAdded"), "success"); renderMain();
  }
  else if(act==="x_delPayment"){
    if(!can("customer_payments:edit")) return;
    if(customerPaymentsLockKey(o)){ toast(t(customerPaymentsLockKey(o)), "critical"); return; }
    var payId = el.getAttribute("data-key");
    confirmDialog(t("ui.custPayDeleteConfirm"), function(){
      if(customerPaymentsLockKey(o)) return;
      var p = (o.customerPayments||[]).filter(function(x){ return x.id===payId; })[0];
      if(!p) return;
      o.customerPayments = o.customerPayments.filter(function(x){ return x.id!==payId; });
      o.treasuryRecords = (o.treasuryRecords||[]).filter(function(r){ return r.paymentId!==payId; });
      log("CustomerPayment", o.orderNumber, "DELETE", p.amount+" "+p.currency+" · "+p.method+(p.reference?(" · "+p.reference):""));
      saveState(); toast(t("ui.custPayDeleted"), "success"); renderMain();
    }, {title:t("ui.deleteBtn"), confirmText:t("ui.deleteBtn")});
  }
  else if(act==="x_releaseBL"){
    /* الشروط تُفحص هنا وليس في الواجهة فقط */
    if(!can("bl:release")) return;
    var blDocR = (o.documents||[]).filter(function(x){ return x.type==="BILL_OF_LADING"; })[0] || {};
    if(blDocR.status!=="ISSUED" || blIsCwb(o) || blIsReleased(o)) return;
    var remR = customerRemaining(o);
    if(remR===null){ toast(t("ui.blReleaseNoInvoice"), "critical"); return; }
    if(remR > 0){ toast(tpl(t("ui.blReleaseBlockedTpl"), {remaining:finFmt(remR), currency:o.currency}), "critical"); return; }
    var nameEl = document.getElementById("bl_release_name_"+id);
    var toName = nameEl ? (nameEl.value||"").trim() : "";
    if(!toName){ toast(t("ui.blReleaseNameRequired"), "critical"); if(nameEl) nameEl.focus(); return; }
    confirmDialog(t("ui.blReleaseConfirm"), function(){
      if(blIsReleased(o) || customerRemaining(o)!==0) return;
      o.billOfLading.releasedToCustomerAt = nowIso();
      o.billOfLading.releasedByUsername = state.currentUsername;
      o.billOfLading.releasedByRole = state.currentRole;
      o.billOfLading.releasedToName = toName;
      log("BillOfLading", o.orderNumber, "RELEASE_TO_CUSTOMER", toName);
      saveState(); toast(t("ui.blReleasedToast"), "success"); renderMain();
    }, {title:t("ui.blReleaseBtn"), confirmText:t("ui.blReleaseBtn")});
  }
}

/* ============================================================
   ربط الأحداث (Event delegation)
   ============================================================ */
function wireEvents(){
  document.querySelectorAll("[data-act]").forEach(function(el){
    el.onclick = function(ev){
      ev.preventDefault();
      var act = el.getAttribute("data-act");
      var id = el.getAttribute("data-id");
      var stage = el.getAttribute("data-stage");
      var doc = el.getAttribute("data-doc");
      var wId = el.getAttribute("data-w");
      var eId = el.getAttribute("data-e");
      var noteId = el.getAttribute("data-note");
      var sec = el.getAttribute("data-sec");
      var o = id ? findOrder(id) : null;

      if(act==="org_print"){ window.print(); return; }
      if(act.indexOf("fin_")===0){ finAct(act, el); return; }
      if(act.indexOf("x_")===0){ xAct(act, el, o); return; }
      if(act==="toggleAssistant"){ toggleAssistant(); }
      else if(act==="assistantSend"){ assistantSend(); }
      else if(act==="assistantSuggest"){ assistantSend(el.getAttribute("data-q")||""); }
      else if(act==="newOrderForm"){ state.view.showNewForm = true; renderMain(); }
      else if(act==="cancelNewOrder"){ state.view.showNewForm = false; renderMain(); }
      else if(act==="switchTab"){
        state.view.tab = el.getAttribute("data-tab") || "overview";
        saveState(); renderMain();
      }
      else if(act==="filterPhase"){
        state.ordersFilter = state.ordersFilter || {q:"", phase:"ALL"};
        state.ordersFilter.phase = el.getAttribute("data-phase") || "ALL";
        saveState(); renderMain();
      }
      else if(act==="clearFilters"){
        state.ordersFilter = {q:"", phase:"ALL"};
        saveState(); renderMain();
      }
      else if(act==="submitNewOrder"){
        var reqFields = [
          ["f_name","requiredNameAlert"], ["f_contact","requiredContactAlert"], ["f_phone","requiredPhoneAlert"],
          ["f_email","requiredEmailAlert"], ["f_goods_ar","requiredGoodsArAlert"], ["f_goods_en","requiredGoodsEnAlert"],
          ["f_supplier_addr","requiredSupplierAddrAlert"], ["f_china_tracking","requiredChinaTrackingAlert"],
          ["f_packages","requiredPackagesAlert"], ["f_net_weight","requiredNetWeightAlert"], ["f_gross_weight","requiredGrossWeightAlert"],
          ["f_dim_l","requiredDimAlert"], ["f_dim_w","requiredDimAlert"], ["f_dim_h","requiredDimAlert"],
          ["f_laydays","requiredLaydaysAlert"], ["f_cancelling","requiredCancellingAlert"], ["f_exw","requiredExwAlert"]
        ];
        for(var ri=0; ri<reqFields.length; ri++){
          var rEl = document.getElementById(reqFields[ri][0]);
          if(!rEl || !String(rEl.value||"").trim()){
            toast(t("ui."+reqFields[ri][1]), "critical");
            if(rEl) rEl.focus();
            return;
          }
        }
        var dangerousVal = document.getElementById("f_dangerous").value;
        var msdsVal = (document.getElementById("f_msds")||{}).value ? document.getElementById("f_msds").value.trim() : "";
        if(dangerousVal==="YES" && !msdsVal){ toast(t("ui.msdsRequiredAlert"), "critical"); document.getElementById("f_msds").focus(); return; }
        var specialVal = document.getElementById("f_special").value;
        var specialNoteVal = (document.getElementById("f_special_note")||{}).value ? document.getElementById("f_special_note").value.trim() : "";
        if(specialVal==="YES" && !specialNoteVal){ toast(t("ui.specialCargoNoteRequiredAlert"), "critical"); document.getElementById("f_special_note").focus(); return; }
        var reeferVal = document.getElementById("f_reefer").value;
        var reeferTempVal = (document.getElementById("f_reefer_temp")||{}).value || "";
        if(reeferVal==="YES" && !String(reeferTempVal).trim()){ toast(t("ui.reeferTempRequiredAlert"), "critical"); document.getElementById("f_reefer_temp").focus(); return; }
        var vatVal = document.getElementById("f_vat").value;
        var vatAmountVal = (document.getElementById("f_vat_amount")||{}).value || "";
        if(vatVal==="YES" && !String(vatAmountVal).trim()){ toast(t("ui.vatAmountRequiredAlert"), "critical"); document.getElementById("f_vat_amount").focus(); return; }

        var name = document.getElementById("f_name").value.trim();
        var phone = document.getElementById("f_phone").value.trim();
        var incoterm = document.getElementById("f_incoterm").value;
        var dimL = parseFloat(document.getElementById("f_dim_l").value)||null;
        var dimW = parseFloat(document.getElementById("f_dim_w").value)||null;
        var dimH = parseFloat(document.getElementById("f_dim_h").value)||null;
        var pkgs = parseFloat(document.getElementById("f_packages").value)||null;
        var ord = newOrder({
          name:name, contactPerson:document.getElementById("f_contact").value, phone:phone,
          email:document.getElementById("f_email").value,
          goodsDescriptionAr:document.getElementById("f_goods_ar").value,
          goodsDescriptionEn:document.getElementById("f_goods_en").value,
          hsCode:document.getElementById("f_hscode").value,
          supplierAddressCn:document.getElementById("f_supplier_addr").value,
          chinaTrackingNo:document.getElementById("f_china_tracking").value,
          packagesCount:pkgs,
          netWeightKg:parseFloat(document.getElementById("f_net_weight").value)||null,
          grossWeightKg:parseFloat(document.getElementById("f_gross_weight").value)||null,
          dimLengthCm:dimL, dimWidthCm:dimW, dimHeightCm:dimH,
          cbm: computeCBM(dimL,dimW,dimH,pkgs),
          shippingMethod: document.getElementById("f_shipping_method").value,
          incotermCode:incoterm,
          laydaysStart: document.getElementById("f_laydays").value || null,
          cancellingDate: document.getElementById("f_cancelling").value || null,
          isDangerousGoods: dangerousVal==="YES", msdsNumber: msdsVal,
          isSpecialCargo: specialVal==="YES", specialCargoNote: specialNoteVal,
          needsReefer: reeferVal==="YES", reeferTempC: reeferTempVal,
          vatApplicable: vatVal, vatAmount: vatVal==="YES" ? (parseFloat(vatAmountVal)||null) : null,
          exWorksPrice:parseFloat(document.getElementById("f_exw").value)||null,
          currency:document.getElementById("f_currency").value||"USD",
          orderType: state.currentRole==="commercial_staff" ? "COMMERCIAL" : "MANUFACTURING"
        });
        state.view = {name:"orderDetail", orderId:ord.id, tab:"overview"};
        toast(tpl(t("toast.orderCreated"), {no: ord.orderNumber}), "success");
        renderMain();
      }
      else if(act==="backToOrders"){ state.view = {name:"orders", orderId:null, tab:"overview"}; renderMain(); }
      else if(act==="openOrder"){ state.view = {name:"orderDetail", orderId:id, tab:"overview"}; saveState(); renderMain(); }
      else if(act==="markDone"){
        /* التسليم لا يُغلق قبل تسليم البوليصة للزبون (HBL) أو قبل السداد الكامل (CWB) */
        if(stage==="DELIVERY"){ var dBlock = deliveryBlockReason(o); if(dBlock){ toast(t(dBlock), "critical"); return; } }
        var s = o.stages.find(function(x){return x.key===stage;});
        s.status="DONE"; s.completedAt=nowIso(); s.completedBy=state.currentRole;
        if(stage==="LOGISTICS_PROCEDURE_ORDER"){ o.phase="SHIPMENT_ACTIVE"; o.procedureOrderReceivedAt=nowIso(); }
        log("StageEvent", o.orderNumber+":"+stage, "MARK_DONE");
        maybeComplete(o); saveState(); toast(t("toast.stageDone"), "success"); renderMain();
      }
      else if(act==="saveDueDate"){
        var s2 = o.stages.find(function(x){return x.key===stage;});
        s2.dueDate = document.getElementById("due_"+id+"_"+stage).value || null;
        saveState(); toast(t("toast.dueSaved"), "success"); renderMain();
      }
      else if(act==="saveShippingPrice"){
        o.shippingPrice = parseFloat(document.getElementById("sp_"+id).value)||null;
        saveState(); toast(t("toast.priceSaved"), "success"); renderMain();
      }
      else if(act==="saveBooking"){
        o.booking = o.booking || {bonusNotes:[]};
        o.booking.type = document.getElementById("bk_type_"+id).value;
        o.booking.carrier = document.getElementById("bk_carrier_"+id).value;
        o.booking.detailValue = document.getElementById("bk_ref_"+id).value;
        o.booking.bonusNotes = o.booking.bonusNotes || [];
        saveState(); toast(t("toast.saved"), "success"); renderMain();
      }
      else if(act==="saveBLData"){
        var blDocChk = o.documents.find(function(x){return x.type==="BILL_OF_LADING";});
        if(blDocChk && blDocChk.status==="ISSUED"){ return; }
        o.billOfLading = o.billOfLading || {};
        o.billOfLading.shipperName = document.getElementById("bl_shipper_"+id).value;
        o.billOfLading.consigneeName = document.getElementById("bl_consignee_name_"+id).value;
        o.billOfLading.consigneeAddress = document.getElementById("bl_consignee_addr_"+id).value;
        o.billOfLading.notifyName = document.getElementById("bl_notify_name_"+id).value;
        o.billOfLading.notifyAddress = document.getElementById("bl_notify_addr_"+id).value;
        o.billOfLading.containerSealNo = document.getElementById("bl_container_"+id).value;
        o.billOfLading.marksNos = document.getElementById("bl_marks_"+id).value;
        o.billOfLading.packageKind = document.getElementById("bl_pkgkind_"+id).value;
        o.billOfLading.vesselName = document.getElementById("bl_vessel_"+id).value;
        o.billOfLading.voyageNo = document.getElementById("bl_voyage_"+id).value;
        o.billOfLading.portOfLoading = document.getElementById("bl_portload_"+id).value;
        o.billOfLading.portOfDischarge = document.getElementById("bl_portdis_"+id).value;
        o.billOfLading.freightPayableAt = document.getElementById("bl_freight_"+id).value;
        o.billOfLading.placeOfIssue = document.getElementById("bl_place_"+id).value;
        o.billOfLading.issuedBy = document.getElementById("bl_issuedby_"+id).value;
        o.billOfLading.issueDate = document.getElementById("bl_issuedate_"+id).value || null;
        o.billOfLading.documentType = (document.getElementById("bl_doctype_"+id)||{}).value || "HBL";
        o.billOfLading.vesselEtaPort = (document.getElementById("bl_vesseleta_"+id)||{}).value || null;
        o.billOfLading.vgmWeight = parseFloat((document.getElementById("bl_vgmweight_"+id)||{}).value)||null;
        o.billOfLading.vgmVerifiedBy = (document.getElementById("bl_vgmby_"+id)||{}).value || "";
        o.billOfLading.vgmDate = (document.getElementById("bl_vgmdate_"+id)||{}).value || null;
        log("BillOfLading", o.orderNumber, "SAVE_BL_DATA");
        saveState(); toast(t("toast.blSaved"), "success"); renderMain();
      }
      else if(act==="clearCustoms"){
        o.customsClearance = {materialType:document.getElementById("cc_type_"+id).value, procedureNotes:document.getElementById("cc_notes_"+id).value, status:"CLEARED"};
        var cs = o.stages.find(function(x){return x.key==="CUSTOMS_CLEARANCE";});
        cs.status="DONE"; cs.completedAt=nowIso(); cs.completedBy=state.currentRole;
        log("CustomsClearance", o.orderNumber, "CLEAR");
        maybeComplete(o); saveState(); toast(t("toast.customsCleared"), "success"); renderMain();
      }
      else if(act==="printDoc"){ printDoc(id, doc); }
      else if(act==="generateCustomerInvoice"){
        var invDeptPerm = (o.orderType==="COMMERCIAL") ? "commercial:edit_stage" : "manufacturing:edit_stage";
        if(!can(invDeptPerm) && state.currentRole!=="senior_management"){ return; }
        if(o.customerConfirmation && o.customerConfirmation.confirmedAt){ return; } /* مؤكدة مسبقًا — لا يمكن إعادة توليدها بعد القفل */
        /* لا تخرج فاتورة للزبون بسعر التكلفة: لازم سعر المصنع والشحن ونسبة ربح حمودة */
        var invBlock = invoiceBlockReason(o);
        if(invBlock){ toast(t(invBlock), "critical"); return; }
        o.customerConfirmation = {
          code: genConfirmationCode(),
          finalPrice: orderFinalPrice(o), profitPct: effectiveProfitPct(o), costAtIssue: orderCost(o),
          invoiceSentAt: nowIso(), invoiceSentByUsername: state.currentUsername, invoiceSentByRole: state.currentRole,
          confirmedAt: null, confirmedByUsername: null, confirmedByRole: null,
          logisticsAckAt: null, logisticsAckByUsername: null, logisticsAckByRole: null
        };
        var invDoc = o.documents.find(function(x){return x.type==="FINAL_INVOICE";});
        if(invDoc){ invDoc.status="ISSUED"; invDoc.issuedAt=nowIso(); invDoc.issuedByUsername=state.currentUsername; invDoc.issuedByRole=state.currentRole; }
        log("CustomerInvoice", o.orderNumber, "GENERATE");
        saveState();
        toast(tpl(t("toast.invoiceGenerated"), {code: o.customerConfirmation.code}), "success");
        renderMain();
      }
      else if(act==="confirmCustomerCode"){
        var confDeptPerm = (o.orderType==="COMMERCIAL") ? "commercial:edit_stage" : "manufacturing:edit_stage";
        if(!can(confDeptPerm) && state.currentRole!=="senior_management"){ return; }
        if(!o.customerConfirmation || !o.customerConfirmation.code){ return; }
        if(o.customerConfirmation.confirmedAt){ return; } /* مقفلة بالفعل */
        if(invoicePriceStale(o)){ toast(t("ui.priceChangedCardWarn"), "critical"); return; }
        var entered = normalizeConfirmCode(document.getElementById("confirmCode_"+id).value);
        if(entered !== normalizeConfirmCode(o.customerConfirmation.code)){
          toast(t("ui.confirmCodeMismatchAlert"), "critical");
          var codeInput = document.getElementById("confirmCode_"+id);
          if(codeInput){ codeInput.focus(); codeInput.select(); }
          return;
        }
        o.customerConfirmation.confirmedAt = nowIso();
        o.customerConfirmation.confirmedByUsername = state.currentUsername;
        o.customerConfirmation.confirmedByRole = state.currentRole;
        log("CustomerInvoice", o.orderNumber, "CONFIRM");
        saveState(); toast(t("toast.confirmRecorded"), "success"); renderMain();
        /* لا يُكمل هذا الإجراء مرحلة اللوجستيك تلقائيًا — اللوجستيك يستلم الموافقة عبر ackCustomerConfirmation أدناه */
      }
      else if(act==="ackCustomerConfirmation"){
        if(!can("logistics:record_procedure_order") && state.currentRole!=="senior_management"){ return; }
        if(!o.customerConfirmation || !o.customerConfirmation.confirmedAt){ return; }
        if(o.customerConfirmation.logisticsAckAt){ return; } /* مُستلمة بالفعل */
        o.customerConfirmation.logisticsAckAt = nowIso();
        o.customerConfirmation.logisticsAckByUsername = state.currentUsername;
        o.customerConfirmation.logisticsAckByRole = state.currentRole;
        var poStage = o.stages.find(function(x){return x.key==="LOGISTICS_PROCEDURE_ORDER";});
        if(poStage && poStage.status!=="DONE"){
          poStage.status="DONE"; poStage.completedAt=nowIso(); poStage.completedBy=state.currentRole;
          o.phase="SHIPMENT_ACTIVE"; o.procedureOrderReceivedAt=nowIso();
        }
        log("CustomerInvoice", o.orderNumber, "LOGISTICS_ACK");
        maybeComplete(o); saveState(); toast(t("toast.logisticsAcked"), "success"); renderMain();
      }
      else if(act==="issueDoc"){
        /* بوليصة الشحن لها آلية توقيع خاصة عبر signAndIssueBL — انظر أدناه */
        var d = o.documents.find(function(x){return x.type===doc;});
        d.status="ISSUED"; d.issuedAt=nowIso();
        d.issuedByUsername = state.currentUsername;
        d.issuedByRole = state.currentRole;
        log("Document", o.orderNumber+":"+doc, "ISSUE");
        saveState(); toast(t("toast.docIssued"), "success"); renderMain();
      }
      else if(act==="signAndIssueBL"){
        if(!can("bl:issue")){ return; }
        if(blPaymentHeld(o)){ toast(t("ui.blIssueBlockedAlert"), "critical"); return; }
        if(!(o.billOfLading && o.billOfLading.vgmWeight)){ toast(t("ui.blVgmNotYetIssuedAlert"), "critical"); return; }
        var blDocSign = o.documents.find(function(x){return x.type==="BILL_OF_LADING";});
        if(!blDocSign || blDocSign.status==="ISSUED"){ return; }
        var numberInput = document.getElementById("bl_finance_number_"+id);
        var numberVal = (numberInput.value||"").trim();
        if(!numberVal){ toast(t("ui.blNumberRequiredAlert"), "critical"); numberInput.focus(); return; }
        /* إجراء لا رجعة فيه: يقفل بيانات الشحن ويسمح بخروج البضاعة — يستحق تأكيدًا صريحًا */
        confirmDialog(t("ui.blSignAndIssueExplainerNote"), function(){
          o.billOfLading = o.billOfLading || {};
          o.billOfLading.blNumber = numberVal;
          blDocSign.status="ISSUED"; blDocSign.issuedAt=nowIso();
          blDocSign.issuedByUsername = state.currentUsername;
          blDocSign.issuedByRole = state.currentRole;
          blDocSign.verificationCode = "VER-" + Math.random().toString(36).slice(2,10).toUpperCase();
          log("BillOfLading", o.orderNumber, "SIGN_AND_ISSUE");
          saveState(); toast(t("toast.blIssued"), "success"); renderMain();
        }, {title: t("ui.blSignAndIssueBtn"), confirmText: t("ui.blSignAndIssueBtn")});
      }
      else if(act==="saveServicesCosts"){
        if(!can("logistics:manage_booking_stage") && !can("documentation:edit") && state.currentRole!=="senior_management"){ return; }
        o.servicesCosts = o.servicesCosts || {};
        SERVICES_COST_KEYS.forEach(function(k){
          var el = document.getElementById("svc_"+k+"_"+id);
          var v = el ? parseFloat(el.value) : NaN;
          o.servicesCosts[k] = isNaN(v) ? null : v;
        });
        o.servicesCosts.otherServicesNote = (document.getElementById("svc_otherServicesNote_"+id)||{}).value || "";
        o.shippingPrice = computeServicesCostsTotal(o.servicesCosts);
        log("ServicesCosts", o.orderNumber, "SAVE");
        saveState(); toast(t("toast.saved"), "success"); renderMain();
      }
      else if(act==="addBonus"){
        o.booking.bonusNotes = o.booking.bonusNotes || [];
        o.booking.bonusNotes.unshift({id:uid(), staffName:roleLabel(state.currentRole), description:document.getElementById("bn_desc_"+id).value, amount:parseFloat(document.getElementById("bn_amt_"+id).value)||null, status:"PROPOSED"});
        saveState(); toast(t("toast.bonusAdded"), "success"); renderMain();
      }
      else if(act==="approveBonus"){ o.booking.bonusNotes.find(function(n){return n.id===noteId;}).status="APPROVED"; saveState(); toast(t("toast.bonusApproved"), "success"); renderMain(); }
      else if(act==="payBonus"){ o.booking.bonusNotes.find(function(n){return n.id===noteId;}).status="PAID"; saveState(); toast(t("toast.bonusPaid"), "success"); renderMain(); }
      else if(act==="saveExpert"){
        o.expertAssignment = {name:document.getElementById("ex_name_"+id).value, contact:document.getElementById("ex_contact_"+id).value};
        saveState(); toast(t("toast.saved"), "success"); renderMain();
      }
      else if(act==="addAccounts"){
        o.accountsRecords.unshift({section:sec, invoiceRef:document.getElementById("ar_ref_"+id+"_"+sec).value, amount:parseFloat(document.getElementById("ar_amt_"+id+"_"+sec).value)||null, paymentStatus:document.getElementById("ar_status_"+id+"_"+sec).value, createdAt:nowIso()});
        log("AccountsRecord", o.orderNumber, "CREATE");
        saveState(); toast(t("toast.recordAdded"), "success"); renderMain();
      }
      else if(act==="addTreasury"){
        o.treasuryRecords.unshift({description:document.getElementById("tr_desc_"+id).value, amount:parseFloat(document.getElementById("tr_amt_"+id).value)||0, direction:document.getElementById("tr_dir_"+id).value, recordedAt:nowIso()});
        log("TreasuryRecord", o.orderNumber, "CREATE");
        saveState(); toast(t("toast.recordAdded"), "success"); renderMain();
      }
      else if(act==="applyOverride"){
        o.manualStatusColor = document.getElementById("ov_color").value;
        o.manualOverrideBy = roleLabel(state.currentRole);
        o.manualOverrideReason = document.getElementById("ov_reason").value;
        log("Order", o.orderNumber, "MANUAL_STATUS_OVERRIDE");
        saveState(); toast(t("toast.overrideApplied"), "warning"); renderMain();
      }
      else if(act==="revertOverride"){
        o.manualStatusColor=null; o.manualOverrideBy=null; o.manualOverrideReason=null;
        log("Order", o.orderNumber, "MANUAL_STATUS_REVERT");
        saveState(); toast(t("toast.reverted"), "success"); renderMain();
      }
      else if(act==="addEntry"){
        var w = state.warehouses.find(function(x){return x.id===wId;});
        w.entries.unshift({id:uid(), description:document.getElementById("we_desc_"+wId).value, quantity:parseFloat(document.getElementById("we_qty_"+wId).value)||null, orderId:document.getElementById("we_order_"+wId).value||null, status:"STORED"});
        saveState(); toast(t("toast.entryAdded"), "success"); renderMain();
      }
      else if(act==="releaseEntry"){
        var w2 = state.warehouses.find(function(x){return x.id===wId;});
        w2.entries.find(function(e){return e.id===eId;}).status="RELEASED";
        saveState(); toast(t("toast.entryReleased"), "success"); renderMain();
      }
      else if(act==="saveThreshold"){
        state.yellowThresholdDays = parseFloat(document.getElementById("thresholdDays").value)||3;
        log("SystemSetting","STATUS_COLOR_YELLOW_THRESHOLD_DAYS","UPDATE");
        saveState(); toast(t("toast.thresholdSaved"), "success"); renderMain();
      }
      else if(act==="removeDemo"){
        confirmDialog(t("ui.demoRemoveConfirm"), function(){
          var n = removeDemoData();
          toast(tpl(t("toast.demoRemoved"), {n:n}), "success");
          renderNav(); renderMain();
        }, {title: t("ui.demoBarRemove"), confirmText: t("ui.demoBarRemove")});
      }
      else if(act==="seedDemo"){
        confirmDialog(t("ui.demoDataConfirm"), function(){
          var n = seedDemoData();
          state.view = {name:"orders", orderId:null, tab:"overview"};
          state.ordersFilter = {q:"", phase:"ALL"};
          saveState();
          toast(tpl(t("toast.demoSeeded"), {n:n}), "success");
          renderNav(); renderMain();
        }, {title: t("ui.demoDataTitle"), confirmText: t("ui.seedDemoBtn")});
      }
      else if(act==="connectDiskSync"){ connectDiskSyncFolder(); }
      else if(act==="disconnectDiskSync"){ disconnectDiskSyncFolder(); }
      else if(act==="enableCutoffNotif"){ enableCutoffNotif(); }
      else if(act==="disableCutoffNotif"){ disableCutoffNotif(); }
      else if(act==="exportBackup"){
        try{
          var payload = JSON.stringify(state, null, 2);
          var blob = new Blob([payload], {type:"application/json"});
          var url = URL.createObjectURL(blob);
          var stamp = nowIso().slice(0,19).replace(/[:T]/g,"-");
          var a = document.createElement("a");
          a.href = url; a.download = "hamouda-ops-backup-"+stamp+".json";
          document.body.appendChild(a); a.click(); document.body.removeChild(a);
          setTimeout(function(){ URL.revokeObjectURL(url); }, 2000);
          log("Backup", state.currentUsername||"-", "EXPORT");
          toast(t("toast.backupExported"), "success");
        }catch(e){ toast(t("ui.backupExportFailedAlert"), "critical"); }
      }
    };
  });
  wireOrdersSearch();
}
/* حقل البحث يعمل أثناء الكتابة — يُعاد ضبط التركيز والمؤشر عبر restoreUiContext */
function wireOrdersSearch(){
  var input = document.getElementById("ordersSearch");
  if(!input) return;
  input.oninput = function(){
    state.ordersFilter = state.ordersFilter || {q:"", phase:"ALL"};
    state.ordersFilter.q = input.value;
    saveState();
    renderMain();
  };
}
function handleImportBackupFile(inputEl){
  var file = inputEl.files && inputEl.files[0];
  if(!file) return;
  var reader = new FileReader();
  reader.onload = function(){
    var parsed;
    try{ parsed = JSON.parse(reader.result); }catch(e){ toast(t("ui.backupImportInvalidAlert"), "critical"); inputEl.value=""; return; }
    if(!parsed || typeof parsed!=="object" || !Array.isArray(parsed.orders)){ toast(t("ui.backupImportInvalidAlert"), "critical"); inputEl.value=""; return; }
    /* استبدال كل بيانات الجهاز — إجراء لا يمكن التراجع عنه */
    confirmDialog(t("ui.backupImportConfirmWarning"), function(){
      var actorUsername = state.currentUsername, actorRole = state.currentRole, actorLang = state.lang;
      state = parsed;
      state.currentUsername = actorUsername; state.currentRole = actorRole;
      if(actorLang) state.lang = actorLang; else if(!state.lang) state.lang = loadLang();
      migrateState();
      Server.forceNextSync();
      log("Backup", actorUsername||"-", "IMPORT");
      saveState();
      toast(t("ui.backupImportSuccessAlert"), "success");
      renderShell();
      inputEl.value="";
    }, {title: t("ui.importBackupBtn"), onCancel: function(){ inputEl.value=""; }});
  };
  reader.onerror = function(){ toast(t("ui.backupImportInvalidAlert"), "critical"); inputEl.value=""; };
  reader.readAsText(file);
}
function roleLabel(key){ return t("roles."+key); }

/* ============================================================
   الدخول / الخروج
   ============================================================ */
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  var u = document.getElementById("loginUsername").value.trim().toLowerCase();
  var p = document.getElementById("loginPassword").value;
  var errEl = document.getElementById("loginError");
  var btn = document.getElementById("loginBtnText");
  btn.disabled = true;
  Server.login(u, p).then(function(){
    errEl.hidden = true;
    document.getElementById("loginPassword").value = "";
  }).catch(function(err){
    errEl.textContent = (err && err.msgKey) ? t(err.msgKey) : (err && err.status===429) ? t("srv.tooMany") : (err && err.status ? t("loginError") : t("srv.offline"));
    errEl.hidden = false;
  }).then(function(){ btn.disabled = false; });
});
/* وضع التجربة: الاختيار السريع يملأ اسم المستخدم (وكلمة المرور الافتراضية إن كان الخادم في وضع التجربة).
   قبل التشغيل الفعلي: شغّل الخادم مع HAMOUDA_DEMO_AUTOFILL=0 فتختفي القائمة ويُدخل الرمز يدويًا. */
document.getElementById("loginQuickSelect").addEventListener("change", function(){
  var u = this.value;
  if(!u || !LOGIN_ACCOUNTS[u]) return;
  document.getElementById("loginUsername").value = u;
  var pwd = document.getElementById("loginPassword");
  document.getElementById("loginError").hidden = true;
  if(LOGIN_DEMO_PASSWORD){
    pwd.value = LOGIN_DEMO_PASSWORD;
    document.getElementById("loginBtnText").focus();
  } else {
    pwd.value = "";
    pwd.focus();
  }
});
document.getElementById("logoutBtn").addEventListener("click", function(){
  Server.logout();
  document.getElementById("loginUsername").value = "";
  document.getElementById("loginPassword").value = "";
  document.getElementById("loginQuickSelect").value = "";
  document.getElementById("loginError").hidden = true;
});

/* ============================================================
   بدء التشغيل
   ============================================================ */
document.getElementById("themeToggle").addEventListener("click", toggleTheme);
document.getElementById("themeToggleLogin").addEventListener("click", toggleTheme);
/* تتبّع إعداد الجهاز ما لم يختر المستخدم سمة صراحةً */
if(window.matchMedia){
  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  var onSchemeChange = function(){ if(!loadTheme()) renderThemeToggles(); };
  if(darkQuery.addEventListener) darkQuery.addEventListener("change", onSchemeChange);
  else if(darkQuery.addListener) darkQuery.addListener(onSchemeChange);
}

Server.installI18n();
loadState();
applyDocumentLang();
applyTheme();
renderLoginTexts();
setAuthed(false);
restoreDiskSyncConnection();
Server.boot();

/* فحص دوري لتنبيهات الـ Cut-off طالما التطبيق مفتوح — فحص فوري عند البدء ثم كل 5 دقائق */
if(state.cutoffNotifEnabled){ checkCutoffNotifications(); }
setInterval(function(){ if(isAuthed()) checkCutoffNotifications(); }, 5*60*1000);
