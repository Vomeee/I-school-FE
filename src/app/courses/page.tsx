"use client"

import Page from 'app/page'
import Courses from 'components/page/Courses'
import CourseSearcher from 'components/page/CourseSearcher'

const CoursesPage = () => (
  <Page title="CoursesPage">
    <CourseSearcher/>
    <Courses/>
  </Page>
)

export default CoursesPage
