"use client"

import Page from 'app/page'
import Courses from 'components/page/Courses'
import CourseSearcher from 'components/page/CourseSearcher'
import 'styles/common.css'


const CoursesPage = () => (
  <Page title="CoursesPage">
    <div className='styles.container'>
      <CourseSearcher/>
      <Courses courseName={''} professor={''} rating={0}/>

    </div>
    
  </Page>
)

export default CoursesPage
