import { NgModule } from '@angular/core'
import { WorksComponent } from './works.component'
import { NgxMasonryModule } from 'ngx-masonry'
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WorksComponent
      },
      {
        path: ':slug',
        loadChildren: () => import('../work-single/work-single.module').then(file => file.WorkSingleModule)
      },
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NgxMasonryModule
  ],
  declarations: [
    WorksComponent
  ],
  providers: [],
  bootstrap: [WorksComponent]
})
export class WorksModule { }
