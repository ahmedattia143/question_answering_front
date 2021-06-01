import { ContextQuestionComponent } from './context-question/context-question.component';
import { SimpleQuestionComponent } from './simple-question/simple-question.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes} from '@angular/router';

const APP_ROUTES : Routes =
[
{path: '',component:HomePageComponent},
{path:'simple',component:SimpleQuestionComponent},
{path:'context',component:ContextQuestionComponent}

];

export const ROUTING = RouterModule.forRoot(APP_ROUTES)
