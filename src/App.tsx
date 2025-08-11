import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Calendar, Target, TrendingUp, Dumbbell, Heart } from 'lucide-react';

interface Exercise {
  id: string;
  name: string;
  completed: boolean;
  image: string;
}

interface WorkoutDay {
  day: string;
  dayFull: string;
  focusArea: string;
  exercises: Exercise[];
  isRest: boolean;
  color: string;
}

const workoutSchedule: WorkoutDay[] = [
  {
    day: 'Mon',
    dayFull: 'Monday',
    focusArea: 'Rest',
    exercises: [
      { id: 'mon-1', name: 'Recovery stretching', completed: false, image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { id: 'mon-2', name: 'Light walk (20-30 mins)', completed: false, image: 'https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { id: 'mon-3', name: 'Meditation or relaxation', completed: false, image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    isRest: true,
    color: 'from-gray-500 to-gray-600'
  },
  {
    day: 'Tue',
    dayFull: 'Tuesday',
    focusArea: 'Chest + Triceps',
    exercises: [
      { id: 'tue-1', name: '3 set Bench Press', completed: false, image: 'https://www.imghippo.com/i/TjX1687Yks.png?auto=compress&cs=tinysrgb&w=400' },
      { id: 'tue-2', name: '2 set Incline DB Press', completed: false, image: 'https://www.imghippo.com/i/hsA4675o.png?auto=compress&cs=tinysrgb&w=400' },
      { id: 'tue-3', name: '3 set Tricep Pushdowns', completed: false, image: 'https://www.imghippo.com/i/k6670Vw.png?auto=compress&cs=tinysrgb&w=400' },
      { id: 'tue-4', name: '2 set Overhead Tricep Extensions', completed: false, image: 'https://www.imghippo.com/i/tkw3244kn.png?auto=compress&cs=tinysrgb&w=400' }
    ],
    isRest: false,
    color: 'from-red-500 to-red-600'
  },
  {
    day: 'Wed',
    dayFull: 'Wednesday',
    focusArea: 'Back + Biceps',
    exercises: [
      { id: 'wed-1', name: '3 set Pull-ups/Lat Pulldowns', completed: false, image: 'https://images.pexels.com/photos/1552238/pexels-photo-1552238.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { id: 'wed-2', name: '3 set Barbell Rows', completed: false, image: 'https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { id: 'wed-3', name: '3 set Barbell Curls', completed: false, image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { id: 'wed-4', name: '3 set Hammer Curls', completed: false, image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    isRest: false,
    color: 'from-blue-500 to-blue-600'
  },
  {
    day: 'Thu',
    dayFull: 'Thursday',
    focusArea: 'Legs + Arms',
    exercises: [
      { id: 'thu-1', name: '2 set Deadlifts', completed: false, image: 'https://images.pexels.com/photos/1552238/pexels-photo-1552238.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { id: 'thu-2', name: '3 set Bulgarian Split Squats', completed: false, image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { id: 'thu-3', name: '3 set Bicep Curls', completed: false, image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    isRest: false,
    color: 'from-green-500 to-green-600'
  },
  {
    day: 'Fri',
    dayFull: 'Friday',
    focusArea: 'Shoulders + Abs',
    exercises: [
      { id: 'fri-1', name: '3 set Overhead Press', completed: false, image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { id: 'fri-2', name: '2 set Lateral Raises', completed: false, image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { id: 'fri-3', name: '3 set Rear Delt Fly', completed: false, image: 'https://images.pexels.com/photos/1552100/pexels-photo-1552100.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { id: 'fri-4', name: '3 set 1 min Planks', completed: false, image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    isRest: false,
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    day: 'Sat',
    dayFull: 'Saturday',
    focusArea: 'Chest + Back (Push-Pull Combo)',
    exercises: [
      { id: 'sat-1', name: '3 set Incline DB Press', completed: false, image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { id: 'sat-2', name: '3 set Cable Row', completed: false, image: 'https://images.pexels.com/photos/1552100/pexels-photo-1552100.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { id: 'sat-3', name: '3 set Pull-ups/Lat Pulldowns', completed: false, image: 'https://images.pexels.com/photos/1552238/pexels-photo-1552238.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    isRest: false,
    color: 'from-purple-500 to-purple-600'
  },
  {
    day: 'Sun',
    dayFull: 'Sunday',
    focusArea: 'Legs (Quads + Hamstrings + Calves)',
    exercises: [
      { id: 'sun-1', name: '3 set Squats', completed: false, image: 'https://lh3.googleusercontent.com/gg-dl/AJfQ9KQudZg8udb1tDMCExwMdIsVzz8iWBPnZHMcbWCC_jto7wDi01NYh95kcPQlle62AQn-Faeo078vnJigFjFJWjoMBD1EjxAnFb3AcPUkJ-6wDho7Num1WHdJhhiuJg3U8ZvKk0eRqTL9QXUd_pBqC3jP4zExpOkv1hJzdyzreDpb_HEb?auto=compress&cs=tinysrgb&w=400' },
      { id: 'sun-2', name: '3 set Leg Press', completed: false, image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { id: 'sun-3', name: '3 set Romanian Deadlifts', completed: false, image: 'https://images.pexels.com/photos/1552238/pexels-photo-1552238.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    isRest: false,
    color: 'from-indigo-500 to-indigo-600'
  }
];

function App() {
  const [workoutData, setWorkoutData] = useState<WorkoutDay[]>(workoutSchedule);
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const today = new Date();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const todayName = dayNames[today.getDay()];
    setSelectedDay(todayName);
  }, []);

  const toggleExercise = (dayName: string, exerciseId: string) => {
    setWorkoutData(prev => 
      prev.map(day => 
        day.day === dayName 
          ? {
              ...day,
              exercises: day.exercises.map(exercise =>
                exercise.id === exerciseId 
                  ? { ...exercise, completed: !exercise.completed }
                  : exercise
              )
            }
          : day
      )
    );
  };

  const getCompletionPercentage = (day: WorkoutDay) => {
    if (day.exercises.length === 0) return 0;
    const completed = day.exercises.filter(ex => ex.completed).length;
    return Math.round((completed / day.exercises.length) * 100);
  };

  const getTotalWeeklyProgress = () => {
    const totalExercises = workoutData.reduce((sum, day) => sum + day.exercises.length, 0);
    const completedExercises = workoutData.reduce((sum, day) => 
      sum + day.exercises.filter(ex => ex.completed).length, 0
    );
    return totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;
  };

  const selectedDayData = workoutData.find(day => day.day === selectedDay);
  const weeklyProgress = getTotalWeeklyProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Workout Tracker</h1>
                <p className="text-gray-600">Track your daily fitness journey</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{weeklyProgress}%</div>
                <div className="text-sm text-gray-600 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Weekly Progress
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Today
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Weekly Overview */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Weekly Schedule
              </h2>
              <div className="space-y-3">
                {workoutData.map(day => (
                  <div
                    key={day.day}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                      selectedDay === day.day 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedDay(day.day)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${day.color} rounded-lg flex items-center justify-center`}>
                          {day.isRest ? (
                            <Heart className="w-6 h-6 text-white" />
                          ) : (
                            <Dumbbell className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{day.dayFull}</div>
                          <div className="text-sm text-gray-600">{day.focusArea}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">
                          {getCompletionPercentage(day)}%
                        </div>
                        <div className="text-xs text-gray-500">Complete</div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 bg-gradient-to-r ${day.color} rounded-full transition-all duration-300`}
                          style={{ width: `${getCompletionPercentage(day)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Daily Workout Detail */}
          <div className="lg:col-span-2">
            {selectedDayData && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${selectedDayData.color} rounded-xl flex items-center justify-center`}>
                      {selectedDayData.isRest ? (
                        <Heart className="w-8 h-8 text-white" />
                      ) : (
                        <Dumbbell className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedDayData.dayFull}
                      </h2>
                      <p className="text-gray-600">{selectedDayData.focusArea}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">
                      {getCompletionPercentage(selectedDayData)}%
                    </div>
                    <div className="text-sm text-gray-600 flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      Progress
                    </div>
                  </div>
                </div>

                {selectedDayData.isRest ? (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Rest Day</h3>
                    <p className="text-gray-600 mb-6">Focus on recovery and light activities</p>
                    <div className="max-w-md mx-auto">
                      <div className="space-y-3">
                        {selectedDayData.exercises.map(exercise => (
                          <div
                            key={exercise.id}
                           className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                              exercise.completed 
                                ? 'border-green-500 bg-green-50' 
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => toggleExercise(selectedDayData.day, exercise.id)}
                          >
                            <div className="flex items-center space-x-3">
                             <img 
                               src={exercise.image} 
                               alt={exercise.name}
                               className="w-12 h-12 object-cover rounded-lg"
                             />
                              {exercise.completed ? (
                                <CheckCircle2 className="w-6 h-6 text-green-600" />
                              ) : (
                                <Circle className="w-6 h-6 text-gray-400" />
                              )}
                              <span className={`font-medium ${
                                exercise.completed ? 'text-green-800 line-through' : 'text-gray-900'
                              }`}>
                                {exercise.name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Today's Exercises ({selectedDayData.exercises.filter(ex => ex.completed).length}/{selectedDayData.exercises.length})
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedDayData.exercises.map((exercise, index) => (
                        <div
                          key={exercise.id}
                         className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                            exercise.completed 
                              ? 'border-green-500 bg-green-50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => toggleExercise(selectedDayData.day, exercise.id)}
                        >
                          <div className="flex items-center space-x-3">
                           <img 
                             src={exercise.image} 
                             alt={exercise.name}
                             className="w-16 h-16 object-cover rounded-lg shadow-sm"
                           />
                            {exercise.completed ? (
                              <CheckCircle2 className="w-6 h-6 text-green-600" />
                            ) : (
                              <Circle className="w-6 h-6 text-gray-400" />
                            )}
                            <div className="flex-1">
                              <span className={`font-medium ${
                                exercise.completed ? 'text-green-800 line-through' : 'text-gray-900'
                              }`}>
                                {exercise.name}
                              </span>
                              <div className="text-xs text-gray-500 mt-1">
                                Exercise #{index + 1}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Daily Progress</span>
                    <span>{getCompletionPercentage(selectedDayData)}% Complete</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 bg-gradient-to-r ${selectedDayData.color} rounded-full transition-all duration-500`}
                      style={{ width: `${getCompletionPercentage(selectedDayData)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
