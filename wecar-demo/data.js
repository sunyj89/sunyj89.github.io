/* auto-generated */
window.FUNNEL = {
  "funnel": {
    "label": "沉睡会员激活",
    "campaign_id": "沉睡激活·城东一站",
    "site": "城东一站",
    "sleep_definition": "近45天未到站",
    "target_reach": 200,
    "window": {
      "start": "2026-10-20T09:00:00+08:00",
      "end": "2026-10-20T14:00:00+08:00",
      "tz": "Asia/Shanghai"
    },
    "pool": {
      "sample_members": 110,
      "eligible": 110,
      "note": "样本池110<目标触达200；缺口按扩样计入目标"
    },
    "counters": {
      "targeted": 200,
      "sent": 199,
      "responded": 44,
      "arrived": 23,
      "repurchase": 12
    },
    "timeline": [
      {
        "at": "2026-10-20T09:00:00+08:00",
        "label": "09:00",
        "targeted": 200,
        "sent": 39,
        "responded": 8,
        "arrived": 5,
        "repurchase": 2
      },
      {
        "at": "2026-10-20T09:30:00+08:00",
        "label": "09:30",
        "targeted": 200,
        "sent": 39,
        "responded": 8,
        "arrived": 5,
        "repurchase": 2
      },
      {
        "at": "2026-10-20T10:00:00+08:00",
        "label": "10:00",
        "targeted": 200,
        "sent": 73,
        "responded": 16,
        "arrived": 9,
        "repurchase": 4
      },
      {
        "at": "2026-10-20T10:30:00+08:00",
        "label": "10:30",
        "targeted": 200,
        "sent": 107,
        "responded": 23,
        "arrived": 13,
        "repurchase": 6
      },
      {
        "at": "2026-10-20T11:00:00+08:00",
        "label": "11:00",
        "targeted": 200,
        "sent": 137,
        "responded": 32,
        "arrived": 16,
        "repurchase": 9
      },
      {
        "at": "2026-10-20T11:30:00+08:00",
        "label": "11:30",
        "targeted": 200,
        "sent": 163,
        "responded": 36,
        "arrived": 19,
        "repurchase": 9
      },
      {
        "at": "2026-10-20T12:00:00+08:00",
        "label": "12:00",
        "targeted": 200,
        "sent": 177,
        "responded": 41,
        "arrived": 20,
        "repurchase": 12
      },
      {
        "at": "2026-10-20T12:30:00+08:00",
        "label": "12:30",
        "targeted": 200,
        "sent": 189,
        "responded": 41,
        "arrived": 22,
        "repurchase": 12
      },
      {
        "at": "2026-10-20T13:00:00+08:00",
        "label": "13:00",
        "targeted": 200,
        "sent": 195,
        "responded": 43,
        "arrived": 22,
        "repurchase": 12
      },
      {
        "at": "2026-10-20T13:30:00+08:00",
        "label": "13:30",
        "targeted": 200,
        "sent": 199,
        "responded": 44,
        "arrived": 23,
        "repurchase": 12
      }
    ],
    "updated_at": "2026-10-20T13:30:00+08:00",
    "notes": "",
    "annotations": {}
  },
  "events": [
    {
      "ts": "2026-10-20T08:55:00+08:00",
      "type": "campaign_planned",
      "actor": "站长运营助理",
      "msg": "定下沉睡召回目标：城东一站，近45天未到站，触达200人，时段09:00–14:00"
    },
    {
      "ts": "2026-10-20T09:00:00+08:00",
      "type": "campaign_started",
      "actor": "营销会员专家",
      "msg": "沉睡会员激活活动开营"
    },
    {
      "ts": "2026-10-20T09:00:00+08:00",
      "type": "segment_ready",
      "actor": "营销会员专家",
      "msg": "人群包就绪：样本池110人，活动目标触达200（扩样）"
    },
    {
      "ts": "2026-10-20T09:00:00+08:00",
      "type": "sim_tick",
      "actor": "Grok Bot",
      "msg": "09:00 推进：发送+39→39，响应+8→8，到站+5→5，复购+2→2",
      "delta": {
        "sent": 39,
        "responded": 8,
        "arrived": 5,
        "repurchase": 2
      },
      "counters": {
        "targeted": 200,
        "sent": 39,
        "responded": 8,
        "arrived": 5,
        "repurchase": 2
      }
    },
    {
      "ts": "2026-10-20T09:00:00+08:00",
      "type": "batch_sent_sim",
      "actor": "营销会员专家",
      "msg": "本拍触达 39 人"
    },
    {
      "ts": "2026-10-20T09:00:00+08:00",
      "type": "arrivals_sim",
      "actor": "加油员迎宾助理",
      "msg": "本拍到站 5 人，已给短话术促达"
    },
    {
      "ts": "2026-10-20T09:30:00+08:00",
      "type": "sim_tick",
      "actor": "Grok Bot",
      "msg": "09:30 推进：发送+0→39，响应+0→8，到站+0→5，复购+0→2",
      "delta": {
        "sent": 0,
        "responded": 0,
        "arrived": 0,
        "repurchase": 0
      },
      "counters": {
        "targeted": 200,
        "sent": 39,
        "responded": 8,
        "arrived": 5,
        "repurchase": 2
      }
    },
    {
      "ts": "2026-10-20T10:00:00+08:00",
      "type": "sim_tick",
      "actor": "Grok Bot",
      "msg": "10:00 推进：发送+34→73，响应+8→16，到站+4→9，复购+2→4",
      "delta": {
        "sent": 34,
        "responded": 8,
        "arrived": 4,
        "repurchase": 2
      },
      "counters": {
        "targeted": 200,
        "sent": 73,
        "responded": 16,
        "arrived": 9,
        "repurchase": 4
      }
    },
    {
      "ts": "2026-10-20T10:00:00+08:00",
      "type": "batch_sent_sim",
      "actor": "营销会员专家",
      "msg": "本拍触达 34 人"
    },
    {
      "ts": "2026-10-20T10:00:00+08:00",
      "type": "arrivals_sim",
      "actor": "加油员迎宾助理",
      "msg": "本拍到站 4 人，已给短话术促达"
    },
    {
      "ts": "2026-10-20T10:30:00+08:00",
      "type": "sim_tick",
      "actor": "Grok Bot",
      "msg": "10:30 推进：发送+34→107，响应+7→23，到站+4→13，复购+2→6",
      "delta": {
        "sent": 34,
        "responded": 7,
        "arrived": 4,
        "repurchase": 2
      },
      "counters": {
        "targeted": 200,
        "sent": 107,
        "responded": 23,
        "arrived": 13,
        "repurchase": 6
      }
    },
    {
      "ts": "2026-10-20T10:30:00+08:00",
      "type": "batch_sent_sim",
      "actor": "营销会员专家",
      "msg": "本拍触达 34 人"
    },
    {
      "ts": "2026-10-20T10:30:00+08:00",
      "type": "arrivals_sim",
      "actor": "加油员迎宾助理",
      "msg": "本拍到站 4 人，已给短话术促达"
    },
    {
      "ts": "2026-10-20T11:00:00+08:00",
      "type": "sim_tick",
      "actor": "Grok Bot",
      "msg": "11:00 推进：发送+30→137，响应+9→32，到站+3→16，复购+3→9",
      "delta": {
        "sent": 30,
        "responded": 9,
        "arrived": 3,
        "repurchase": 3
      },
      "counters": {
        "targeted": 200,
        "sent": 137,
        "responded": 32,
        "arrived": 16,
        "repurchase": 9
      }
    },
    {
      "ts": "2026-10-20T11:00:00+08:00",
      "type": "batch_sent_sim",
      "actor": "营销会员专家",
      "msg": "本拍触达 30 人"
    },
    {
      "ts": "2026-10-20T11:00:00+08:00",
      "type": "arrivals_sim",
      "actor": "加油员迎宾助理",
      "msg": "本拍到站 3 人，已给短话术促达"
    },
    {
      "ts": "2026-10-20T11:30:00+08:00",
      "type": "sim_tick",
      "actor": "Grok Bot",
      "msg": "11:30 推进：发送+26→163，响应+4→36，到站+3→19，复购+0→9",
      "delta": {
        "sent": 26,
        "responded": 4,
        "arrived": 3,
        "repurchase": 0
      },
      "counters": {
        "targeted": 200,
        "sent": 163,
        "responded": 36,
        "arrived": 19,
        "repurchase": 9
      }
    },
    {
      "ts": "2026-10-20T11:30:00+08:00",
      "type": "batch_sent_sim",
      "actor": "营销会员专家",
      "msg": "本拍触达 26 人"
    },
    {
      "ts": "2026-10-20T11:30:00+08:00",
      "type": "arrivals_sim",
      "actor": "加油员迎宾助理",
      "msg": "本拍到站 3 人，已给短话术促达"
    },
    {
      "ts": "2026-10-20T12:00:00+08:00",
      "type": "sim_tick",
      "actor": "Grok Bot",
      "msg": "12:00 推进：发送+14→177，响应+5→41，到站+1→20，复购+3→12",
      "delta": {
        "sent": 14,
        "responded": 5,
        "arrived": 1,
        "repurchase": 3
      },
      "counters": {
        "targeted": 200,
        "sent": 177,
        "responded": 41,
        "arrived": 20,
        "repurchase": 12
      }
    },
    {
      "ts": "2026-10-20T12:00:00+08:00",
      "type": "batch_sent_sim",
      "actor": "营销会员专家",
      "msg": "本拍触达 14 人"
    },
    {
      "ts": "2026-10-20T12:00:00+08:00",
      "type": "arrivals_sim",
      "actor": "加油员迎宾助理",
      "msg": "本拍到站 1 人，已给短话术促达"
    },
    {
      "ts": "2026-10-20T12:30:00+08:00",
      "type": "sim_tick",
      "actor": "Grok Bot",
      "msg": "12:30 推进：发送+12→189，响应+0→41，到站+2→22，复购+0→12",
      "delta": {
        "sent": 12,
        "responded": 0,
        "arrived": 2,
        "repurchase": 0
      },
      "counters": {
        "targeted": 200,
        "sent": 189,
        "responded": 41,
        "arrived": 22,
        "repurchase": 12
      }
    },
    {
      "ts": "2026-10-20T12:30:00+08:00",
      "type": "batch_sent_sim",
      "actor": "营销会员专家",
      "msg": "本拍触达 12 人"
    },
    {
      "ts": "2026-10-20T12:30:00+08:00",
      "type": "arrivals_sim",
      "actor": "加油员迎宾助理",
      "msg": "本拍到站 2 人"
    },
    {
      "ts": "2026-10-20T13:00:00+08:00",
      "type": "sim_tick",
      "actor": "Grok Bot",
      "msg": "13:00 推进：发送+6→195，响应+2→43，到站+0→22，复购+0→12",
      "delta": {
        "sent": 6,
        "responded": 2,
        "arrived": 0,
        "repurchase": 0
      },
      "counters": {
        "targeted": 200,
        "sent": 195,
        "responded": 43,
        "arrived": 22,
        "repurchase": 12
      }
    },
    {
      "ts": "2026-10-20T13:00:00+08:00",
      "type": "batch_sent_sim",
      "actor": "营销会员专家",
      "msg": "本拍触达 6 人"
    },
    {
      "ts": "2026-10-20T13:30:00+08:00",
      "type": "sim_tick",
      "actor": "Grok Bot",
      "msg": "13:30 推进：发送+4→199，响应+1→44，到站+1→23，复购+0→12",
      "delta": {
        "sent": 4,
        "responded": 1,
        "arrived": 1,
        "repurchase": 0
      },
      "counters": {
        "targeted": 200,
        "sent": 199,
        "responded": 44,
        "arrived": 23,
        "repurchase": 12
      }
    },
    {
      "ts": "2026-10-20T13:30:00+08:00",
      "type": "batch_sent_sim",
      "actor": "营销会员专家",
      "msg": "本拍触达 4 人"
    },
    {
      "ts": "2026-10-20T13:30:00+08:00",
      "type": "arrivals_sim",
      "actor": "加油员迎宾助理",
      "msg": "本拍到站 1 人"
    }
  ],
  "annotations": {},
  "generated_at": "2026-10-20T13:30:00+08:00"
};
