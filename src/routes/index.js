//layout
import { WithouSidebar, JustContent } from "../components/Layout";
import ConfigRoutes from '../config/routes'
import {
    Home,
    Learning,
    Profile,
    Contact,
    PathLearning,
    Study,
    Setting,
    ManageCourses,
    ManageUsers,
    Introduce,
    Login,
    Register,
    Discuss,
    OverBoarding,
    SettingSecurity,
    SettingNotification,
    BackEnd,
    FrontEnd,
    PEnglish,
    MyOnwCourse,
    DetailCourses,
    ManageTopics

} from '../pages'

const publicRoutes = [
    { path: ConfigRoutes.root, component: Home },
    { path: ConfigRoutes.Learning, component: Learning, layout: JustContent },
    { path: ConfigRoutes.pathLearning, component: PathLearning },
    { path: ConfigRoutes.study, component: Study },
    { path: ConfigRoutes.Contact, component: Contact },
    { path: ConfigRoutes.Discuss, component: Discuss },
    { path: ConfigRoutes.Introduce, component: Introduce, layout: WithouSidebar },
    { path: ConfigRoutes.BackEnd, component: BackEnd },
    { path: ConfigRoutes.FrontEnd, component: FrontEnd },
    { path: ConfigRoutes.English, component: PEnglish },
]
const privateRoutes = [

    { path: ConfigRoutes.profile, component: Profile, layout: WithouSidebar },
    { path: ConfigRoutes.setting, component: Setting, layout: WithouSidebar },
    { path: ConfigRoutes.Security, component: SettingSecurity, layout: WithouSidebar },
    { path: ConfigRoutes.Notification, component: SettingNotification, layout: WithouSidebar },
    { path: ConfigRoutes.manageCourses, component: ManageCourses, layout: JustContent },
    { path: ConfigRoutes.manageUsers, component: ManageUsers, layout: JustContent },
    { path: ConfigRoutes.OverBoarding, component: OverBoarding, layout: JustContent },
    { path: ConfigRoutes.MyOnwCourse, component: MyOnwCourse },
    { path: ConfigRoutes.DetailCourses, component: DetailCourses, layout: JustContent },
    { path: ConfigRoutes.ManageTopics, component: ManageTopics, layout: JustContent },

]
const authRoutes = [
    { path: ConfigRoutes.Login, component: Login, layout: JustContent },
    { path: ConfigRoutes.Register, component: Register, layout: JustContent },
]

export { publicRoutes, privateRoutes, authRoutes }