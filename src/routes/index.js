//layout
import { HeaderOnly, JustContent } from "../components/Layout";

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
    DetailCourses

} from '../pages'


const publicRoutes = [
    { path: ConfigRoutes.root, component: Home },
    { path: ConfigRoutes.Learning, component: Learning, layout: JustContent },
    { path: ConfigRoutes.pathLearning, component: PathLearning },
    { path: ConfigRoutes.study, component: Study },
    { path: ConfigRoutes.profile, component: Profile, layout: HeaderOnly },
    { path: ConfigRoutes.setting, component: Setting, layout: HeaderOnly },
    { path: ConfigRoutes.Security, component: SettingSecurity, layout: HeaderOnly },
    { path: ConfigRoutes.Notification, component: SettingNotification, layout: HeaderOnly },
    { path: ConfigRoutes.manageCourses, component: ManageCourses, layout: JustContent },
    { path: ConfigRoutes.manageUsers, component: ManageUsers, layout: JustContent },
    { path: ConfigRoutes.Contact, component: Contact },
    { path: ConfigRoutes.Discuss, component: Discuss },
    { path: ConfigRoutes.Introduce, component: Introduce, layout: HeaderOnly },
    { path: ConfigRoutes.Login, component: Login, layout: JustContent },
    { path: ConfigRoutes.Register, component: Register, layout: JustContent },
    { path: ConfigRoutes.OverBoarding, component: OverBoarding, layout: JustContent },
    { path: ConfigRoutes.BackEnd, component: BackEnd },
    { path: ConfigRoutes.FrontEnd, component: FrontEnd },
    { path: ConfigRoutes.English, component: PEnglish },
    { path: ConfigRoutes.MyOnwCourse, component: MyOnwCourse },
    { path: ConfigRoutes.DetailCourses, component: DetailCourses, layout: JustContent },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }