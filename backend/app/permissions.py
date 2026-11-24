"""الأدوار والصلاحيات — نسخة مطابقة لما في الواجهة، يتحقق منها الخادم قبل أي حفظ."""

ROLES = [
    "manufacturing_staff",
    "commercial_staff",
    "logistics_team",
    "finance_team",
    "senior_management",
]

PERMISSIONS = {
    "manufacturing_staff": ["order:create", "manufacturing:edit_stage"],
    "commercial_staff": ["order:create", "order:record_quote", "commercial:edit_stage"],
    "logistics_team": [
        "logistics:edit_booking", "logistics:manage_booking_stage", "logistics:record_procedure_order",
        "logistics:customs_decision", "logistics:mark_delivery", "documentation:edit", "warehouse:view",
        "warehouse:edit", "bonus_note:view", "bonus_note:create", "bonus_note:approve", "expert:assign",
        "order:manual_status_override", "bl:release",
    ],
    "finance_team": [
        "accounts:edit:MANUFACTURING", "accounts:edit:COMMERCIAL", "accounts:edit:LOGISTICS", "treasury:edit",
        "bonus_note:view", "bonus_note:mark_paid", "finance:manage", "bl:issue", "customer_payments:edit",
    ],
    "senior_management": [
        "logistics:customs_decision", "logistics:mark_delivery", "order:manual_status_override", "expert:assign",
        "documentation:edit", "warehouse:view", "bonus_note:view", "system:manage_settings",
        "system:view_audit_log", "finance:manage", "manufacturing:edit_stage", "commercial:edit_stage",
        "pricing:view", "pricing:set_profit", "customer_payments:view", "bl:release",
    ],
}


def can(role: str, perm: str) -> bool:
    return perm in PERMISSIONS.get(role, [])


# الحسابات التي تُنشأ تلقائيًا عند أول تشغيل (قاعدة بيانات فارغة)
DEFAULT_ACCOUNTS = [
    ("manufacturing@hamouda.local", "manufacturing_staff"),
    ("commercial@hamouda.local", "commercial_staff"),
    ("logistics@hamouda.local", "logistics_team"),
    ("finance@hamouda.local", "finance_team"),
    ("manager@hamouda.local", "senior_management"),
]
