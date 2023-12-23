export default {
  navigateBar: {
    homePage: "主页",
    search: "搜索论文",
    logout: "退出登录",
    toUserPage: "个人中心",
    managerCenter: "管理员",
    conferences: "期刊会议",
    institution: "权威机构",
    field: "流行领域",
    researcher: "权威学者"
  },
  homePage: {
    search: "搜索学者、论文、期刊",
    slogan: "使用NoBC，学术生涯再无背刺！",
    hotPoint: "研究热点",
    journal: "期刊会议",
    popularPaper: "热门文章",
    scholar: "权威学者"
  },
  admin:{
    reviewScholarCertification:"审核学者认证",
    handleScholarGrievances:"处理学者申诉",
    detail:"详细信息",
    applicantName:"申请者",
    scholarName:"认证学者",
    applicationTime:"申请时间",
    sortLatest:"按时间最晚排序",
    sortEarliest:"按时间最早排序",
    backToList:"返回列表",
    status:"审核状态",
    tobecertified:"只显示待审核",
    showall:"显示全部",
    certification:"认证材料",
    scholar:"学者",
    remark:"备注",
    accept:"通过申请",
    decline:"拒绝申请",
    opinion:"审核意见",
    reason:"申诉理由",
  },
  personInfo:{
    homePageManage:"主页管理",
    academicHome:"学术主页",
    personalAccount:"个人账户",
    academicManage:"学术管理",
    myInterest:"我的关注",
    paperCollection:"论文收藏",
    browsingHistory:"浏览历史",
    basicInformation:"基本信息",
    paperList:"论文列表",
    workExperience: "工作经历",
    educationBackground: "教育背景",
    personProfile: "个人简历",
    authorStatistics: "作者统计",
    radar:"雷达图",
    list:"列表",
    cooperationScholar: "合作学者",
    cooperationAgency: "合作机构",
    cooperationArticle: "合作论文数",

    intro1:"您已绑定学者：",
    intro2:"（点击查看公开链接），您可在此维护您的主页信息，此信息所有人可见。",
    unbind:"解绑",
    unbindConfirm:"解绑确定",
    unbindNotice:"解除该学者与您的绑定关系，之后您可以重新绑定其他学者。确认解除绑定吗?",
    cancel:"取消",
    confirm:"确定解绑",

    bindScholarHomePage:"绑定学者主页",
    intro3:"当前您还未完成学者的绑定,请您在对应学者主页完成绑定",
    bindNotice: "学者认证过程 <br />1.进入热门学者页面<br />2.进行学者的搜索<br />3.进入对应学者主页<br />4.点击'认领'按钮,进行学者的绑定<br /><br />",
    popularScholarPage: "热门学者页面",
  },
  priorDialog: {
    enter: "登录注册",
    selectField: "选择关注领域",
    success: "成功",
    loginMode: {
      inputEmail: "邮箱",
      inputPassword: "密码",
      loginButton: "登录",
      registerButton: "去注册",
      isManager: "我是管理员",
      managerName: "管理员名"
    },
    registerMode: {
      inputUsername: "用户名",
      inputPassword: "密码",
      inputMakeSurePassword: "确认密码",
      inputEmail: "邮箱",
      inputCaptcha: "验证码",
      registerButton: "注册",
    },
    selectFieldMode: {
      select: "选择您的关注领域",
      finishSelect: "选好了"
    },
    finishMode: {
      finish: "注册成功！欢迎使用NoBC学术搜索！"
    }
  },
  fieldDetail: {
    starField: "关注此领域",
    cancelStarField: "不再关注",
    summaryIndex: "累计指标",
    twoYearsIndex: "近2年指标",
    citedByCount: "被引用量",
    i10Index: "i10指数",
    hIndex: "h指数",
    oaPercent: "OA占比",
    impactFactor: "影响因子",
    worksCount: "作品总计",
    trend: "趋势",
    relation: "关系",
    paper: "论文",
    scholar: "学者",
    trendTab: {
      titleOfWorkLine: "作品数和OA作品数",
      titleOfCitedLine: "引用量"
    },
    relationTab: {
      titleOfAncestorsTree: "父领域关系",
      titleOfChildrenTree: "子领域关系",
      titleOfRelatedGraph: "相关领域关系"
    },
    paperTab: {
      noPaper: "暂未收录当前领域下的论文，敬请期待"
    }
  },
  thesisDetail:{
    quote:"引用",
    browse:"浏览"
  },
  field: {
    moreDetail: "更多"
  },
  search: {
    searchLatest: "最新",
    searchSynthesis: "综合",
    searchCitations: "引用量",
  },
  conf: {
    confConditions: "筛选",
    confField: "覆盖领域",
    confPublish: "出版社",
    confInitial: "首字母",
    confJournalList: "期刊列表",
    confUpdatedJournal: "查看更新期刊",
    confSubject: "学科",
  },
  timeRanges: {
    timeRangesTime: "时间",
  },
  articleDisplay: {
    articleDisplayCite: "引用",
    articleDisplayCollect: "收藏",
    articleDisplayCitations: "引用",
    articleDisplayViews: "浏览",
  },
  journal: {
    journalStatistics: "统计信息",
    journalPapers: "论文",
    journalField: "领域",
    journalCreatedYear: "创立年份",
    journal2021Number: "2021年论文数",
    journal2021factors: "2021影响因子",
    journalAverageCited: "近五年论文平均引用数",
    journalTopic:"论文主题",
    journalArea: "国家或地区",
    journalCite: "论文引用量",
    journalDistribution: "作者机构分布",
    journalHighAuthor: "高引作者",
    journalHighPaper: "高引论文",
    journalHighInstitution: "高引机构",
  },
  institution: {
    detail:"详细信息",
    homepage:"机构官网",
    type:'机构类别',
    location:"地理位置",
    relatedJournal:"相关期刊",
    relatedInstitution:"关联机构",
    worksCount:"发表学术成果数量",
    citedCount:"学术成果被引次数",
  }
}
