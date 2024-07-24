"use client"

import Page from 'app/page'
import Courses from 'components/page/Courses'
import CourseSearcher from 'components/page/CourseSearcher'
import 'styles/common.css'
import 'styles/course-search.css'


const CoursesPage = () => (
  <Page title="CoursesPage">
    <div className="container">
      <div className=''>
        <CourseSearcher/>
      </div>
      <br></br>
      <div>
        <Courses courseName={'알바천국'} professor={'ㅇㄱㄷ'} rating={0}/>
      </div>
      
      
      

    </div>
    
  </Page>
)

export default CoursesPage
