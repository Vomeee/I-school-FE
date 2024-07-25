// Timetable/TimetableCard/index.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Course } from 'types/timetable';

interface TimetableProps {
  course: Course;
  backgroundColor: string; // 배경색을 받을 수 있도록 추가
}

const TimetableCard = ({ course, backgroundColor }: TimetableProps) => {
  return (
    <Card
      className="timetable-card"
      style={{
        backgroundColor: backgroundColor, // 배경색 설정
        border: 'none', // 테두리 없애기
        boxShadow: 'none', // 그림자 없애기 (선택 사항)
      }}
    >
      <CardContent>
        <Typography variant="body2" align="center">
          {course.courseName}
        </Typography>
        <Typography variant="body2" align="center">
          {course.courseRoom}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TimetableCard;
