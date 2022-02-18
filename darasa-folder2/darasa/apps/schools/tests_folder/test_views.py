from rest_framework.test import APIRequestFactory
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.test import TestCase, RequestFactory
from ..models import Classroom, Course, Teacher, Student
from apps.timetable.models import Event, Calendar
from apps.accounts.models import User
from rest_framework.test import force_authenticate
from ..api.views import create_classroom_view


class ClassroomTests(TestCase):
    def setUp(self):
        """
        Sets up some of the variables we require to use in this class.
        Like like a teacher and two students"student1, student2"

        """
        self.factory = RequestFactory()
        self.teacher = User.objects.create_user(email="teacher@gmail.com", password='temppass', role="teacher")
        self.student1 = User.objects.create_user(email="student1@gmail.com", password='temppass')
        self.student2 = User.objects.create_user(email="student2@gmail.com", password='temppass')
        self.course = Course.objects.create(name="TestCourse", teacher=self.teacher.teacher)
        self.course.students.add(self.student1.student)
        self.course.students.add(self.student2.student)

    def test_create_classroom_view(self):
        """
        Ensures we create a new class object and add it to  teacher's and student(s) calendar(s)
        """
        url = "http://127.0.0.1:8000/v1/classrooms/"
        data = {
            "name":"statistics",
            "description":"testcase",
            "welcome_message":"Test",
            "duration":60,
            "start_datetime":"2021-02-03T09:00:00.000Z",
            "repeat":"WEEKLY",
            "repeat_until": "2021-02-26T09:00:00.000Z",
            "color":"#F1C40F",
            "course_id":str(self.course.id)
        }
        request = self.factory.post(url, data, format='json')
        force_authenticate(request, user=self.teacher)
        view = create_classroom_view
        response = view(request, self.teacher)
        print(response)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Classroom.objects.count(), 1)
        self.assertEqual(Classroom.objects.get().name, 'statistics')
        self.assertEqual(Event.objects.count(), 1)
        self.assertEqual(Event.objects.get().classroom, Classroom.objects.get(name='statistics'))
        self.assertGreater(Event.objects.get(classroom = Classroom.objects.get(name='statistics').id).calendars.count(), 1)