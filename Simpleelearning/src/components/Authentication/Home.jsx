import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const Home = () => {
  const courses = [
    { id: 1, title: 'Introduction to React', description: 'Learn the basics of React.', image: 'https://cdn.slidesharecdn.com/ss_thumbnails/react-170309144026-thumbnail-4.jpg?cb=1489070510', videos: ['https://www.youtube.com/watch?v=dGcsHMXbSOA'] },
    { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript.', image: 'https://learn.coderslang.com/0915%20-%20JavaScript%20Advanced%20Functions-twitter-preview.png', videos: ['https://www.youtube.com/embed/8aGhZQkoFbQ'] },
    { id: 3, title: 'Web Development Bootcamp', description: 'Become a full-stack web developer.', image: 'https://image.isu.pub/211101120228-59d2977f5687f7e054eeccee8a7ade78/jpg/page_1.jpg', videos: ['https://www.youtube.com/embed/pKd0Rpw7O48'] },
  ];

  const handleCourseClick = (course) => {
    if (course.videos.length > 0) {
      window.open(course.videos[0], '_blank');
    }
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to E-Learning</h1>
      </header>
      <main>
        <h2>Our Courses</h2>
        <Grid container spacing={3}>
          {courses.map((course) => (
            <Grid item key={course.id} xs={12} sm={6} md={4}>
              <Card className="course-card" onClick={() => handleCourseClick(course)}>
                <CardMedia
                  component="img"
                  height="100"
                  image={course.image}
                  alt={course.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
};

export default Home;