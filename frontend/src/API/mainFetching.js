import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})


// API call to sign up the user
const signUpUser = async (data) => {
    return await api.post('users/register', data)
}

// API call to sign in the user
const signInUser = async (data) => {
    return await api.post('users/login', data, {
        withCredentials: true
    })
}

// API call to verify the user's email address
const verifyEmail = async (token) => {
    return await api.get(`users/verify-email/${token}`)
}

//  API call to send a password reset link to the user
const forgotPasswordLink = async (data) => {
    return await api.post('users/forgot-password', data)
}

// API call to reset the user's password
const resetPassword = async (data, token) => {
    return await api.post(`users/reset-password/${token}`, data)
}

//  API call to get logged in user
const getLoggedInUser = async () => {
    return await api.get('users/me', {
        withCredentials: true
    })
}

// API call to logout the user
const logoutUser = async () => {
    return await api.get('users/logout', {
        withCredentials: true
    })
}

// API call to update account settings
const updateAccountSettings = async (data) => {
    return await api.put('users/update-settings', data, {
        withCredentials: true
    })
}


// API call to create a course
const createCourse = async (data) => {
    return await api.post('courses/create', data, {
        withCredentials: true
    })
}

// API call to update a course
const updateCourse = async (id, data) => {
    return await api.put(`courses/update/${id}`, data, {
        withCredentials: true
    })
}

// API call to delete a course
const deleteCourse = async (id) => {
    return await api.delete(`courses/delete/${id}`, {
        withCredentials: true
    })
}

// API call to publish a course
const publishCourse = async (id) => {
    return await api.put(`courses/publish/${id}`, {}, {
        withCredentials: true
    })
}

// API call to get all courses
const getAllCourses = async () => {
    return await api.get('courses', {
        withCredentials: true
    })
}

// API call to get a specific course without lectures
const getCourseById = async (id) => {
    return await api.get(`courses/course-details/${id}`, {
        withCredentials: true
    })
}

const purchaseCourse = async (id, amount) => {
    return await api.post(`courses/purchase/${id}`, {
        amount
    }, {
        withCredentials: true
    })
}

// API call to get purchased courses
const getPurchasedCourses = async () => {
    return await api.get('courses/purchased-courses', {
        withCredentials: true
    })
}

// API call to get a purchase course with lectures
const getPurchaseCourseById = async (id) => {
    return await api.get(`courses/${id}`, {
        withCredentials: true
    })
}

// API call to get admin courses
const getAdminCourses = async () => {
    return await api.get('courses/admin-courses', {
        withCredentials: true
    })
}

// API call to add a video
const addVideo = async (courseId, data, progressCallback) => {
    return await api.post(`videos/create/${courseId}`, data, {
        onUploadProgress: (progressEvent) => {
            // Calculate progress percentage
            const progress = Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
            );
            // Call the progress callback to update the progress state
            if (progressCallback) {
                progressCallback(progress);
            }
        },
        withCredentials: true,
    });
};

// API call to update a video
const updateVideo = async (id, data) => {
    return await api.put(`videos/update/${id}`, data, {
        withCredentials: true
    })
}

// API call to delete a video
const deleteVideo = async (id) => {
    return await api.delete(`videos/delete/${id}`, {
        withCredentials: true
    })
}

// API call to get all videos of a course
const getAllVideosOfACourse = async (courseId) => {
    return await api.get(`videos/${courseId}`, {
        withCredentials: true
    })
}

// API call to create a quiz
const createQuiz = async (id) => {
    return await api.post(`courses/quiz/create/${id}`, {}, {
        withCredentials: true
    })
}

// API call to add a question
const addQuestion = async (id, data) => {
    return await api.post(`courses/quiz/add-question/${id}`, data, {
        withCredentials: true
    })
}

// API call to get a full quiz
const getFullQuizForAdmin = async (id) => {
    return await api.get(`courses/quiz/${id}`, {
        withCredentials: true
    })
}




export {
    signUpUser,
    signInUser,
    verifyEmail,
    forgotPasswordLink,
    resetPassword,
    getLoggedInUser,
    logoutUser,
    updateAccountSettings,
    createCourse,
    updateCourse,
    deleteCourse,
    publishCourse,
    getAllCourses,
    getCourseById,
    getPurchasedCourses,
    getPurchaseCourseById,
    getAdminCourses,
    purchaseCourse,
    addVideo,
    updateVideo,
    deleteVideo,
    getAllVideosOfACourse,
    createQuiz,
    addQuestion,
    getFullQuizForAdmin
}