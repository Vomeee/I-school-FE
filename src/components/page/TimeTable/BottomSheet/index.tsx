import React, { useState } from 'react';
import { Button, Drawer, TextField } from '@mui/material';
import BottomSheetCourseBlock from './BottomSheetCourseBlock';
import 'styles/bottom-sheet-style.css';
import GradeModal from '../GradeSelect';
import MajorModal from '../MajorSelect';

interface BottomSheetCourse {
  courseName: string;
  professor: string;
  major: string;
  rating: number;
  grade: number;
}

const mockCourses: BottomSheetCourse[] = [
  {
    courseName: "데이터베이스",
    professor: "김교수",
    major: "인공지능학부",
    rating: 4.5,
    grade: 3,
  },
  {
    courseName: "운영체제",
    professor: "박교수",
    major: "소프트웨어공학과",
    rating: 4.0,
    grade: 1,
  },
  {
    courseName: "운영체제",
    professor: "박교수",
    major: "전자컴퓨터공학과",
    rating: 4.0,
    grade: 2,
  },
  {
    courseName: "운영체제",
    professor: "박교수",
    major: "자율전공학부",
    rating: 4.0,
    grade: 4,
  },
  // 더 많은 목 데이터를 추가할 수 있습니다.
];

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const CourseDrawer: React.FC<DrawerProps> = ({ open, onClose }) => {
  const [courses, setCourses] = useState(mockCourses);
  const [filteredCourses, setFilteredCourses] = useState(mockCourses);
  const [searchInput, setSearchInput] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null);
  const [gradeButtonText, setGradeButtonText] = useState<string>('학년');
  const [majorButtonText, setMajorButtonText] = useState<string>('전공');
  const [showGradeModal, setShowGradeModal] = useState(false);
  const [showMajorModal, setShowMajorModal2] = useState(false);

  const truncateMajorName = (major: string): string => {
    return major.length > 3 ? `${major.slice(0, 3)}..` : major;
  };

  const handleSearch = (searchTerm: string) => {
    const filtered = courses.filter(course =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.professor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(searchInput);
    }
  };

  const toggleGradeModal = () => {
    setShowGradeModal(!showGradeModal);
  };
  const toggleMajorModal = () => {
    setShowMajorModal2(!showMajorModal);
  };

  const handleGradeSelect = (grade: number) => {
    setSelectedGrade(grade);
    setGradeButtonText(`${grade}학년`);
    applyFilters(grade, selectedMajor);
  };

  const handleMajorSelect = (major: string) => {
    setSelectedMajor(major);
    setMajorButtonText(truncateMajorName(major));
    applyFilters(selectedGrade, major);
  };

  const applyFilters = (grade: number | null, major: string | null) => {
    let filtered = courses;

    if (grade !== null) {
      filtered = filtered.filter(course => course.grade === grade);
    }
    if (major !== null) {
      filtered = filtered.filter(course => course.major === major);
    }

    setFilteredCourses(filtered);
  };

  const handleDrawerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const resetFilters = () => {
    setSelectedGrade(null);
    setGradeButtonText('학년');
    setSelectedMajor(null);
    setMajorButtonText('전공');
    setFilteredCourses(courses);
  };

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: '353px', // 원하는 너비 설정
          margin: 'auto', // 중앙 정렬
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        }
      }}
    >
      <div className="drawer-content" onClick={handleDrawerClick}>
        <div className="fix-top">
          <div className="top-section">
            <Button
              onClick={toggleGradeModal}
              variant="contained"
              className="button upper-button"
            >
              {gradeButtonText}
              <GradeModal show={showGradeModal} onClose={toggleGradeModal} onGradeSelect={handleGradeSelect} />
            </Button>
            <Button
              onClick={toggleMajorModal}
              variant="contained"
              className="button upper-button"
            >
              {majorButtonText}
              <MajorModal show={showMajorModal} onClose={toggleMajorModal} onMajorSelect={handleMajorSelect} />
            </Button>
            <input 
              type="text" 
              placeholder="교수명, 강의명 검색" 
              value={searchInput}
              onChange={handleTextInputChange}
              onKeyDown={handleKeyDown}
              className="search-bar" 
            />
          </div>
        </div>
        <div className="courses-container">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <BottomSheetCourseBlock
                key={index}
                courseName={course.courseName}
                professor={course.professor}
                major={course.major}
                rating={course.rating}
                grade={course.grade}
              />
            ))
          ) : (
            <div className="no-results-message">
              해당 조건의 강의는 없습니다.
            </div>
          )}
        </div>
        <div className="button-container">
          <Button onClick={resetFilters} variant="contained" className='reset-button'>
            초기화
          </Button>
          <Button onClick={onClose} variant="contained" className='close-button'>
            닫기
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default CourseDrawer;
