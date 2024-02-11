import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/forms';

export const getAllForms = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};
export const getForm = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching form:', error);
    throw error;
  }
};

export const addForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/add`, formData);
    return response.data;
  } catch (error) {
    console.error('Error adding form:', error);
    throw error;
  }
};

export const updateForm = async (id, formData) => {
  try {
    await axios.patch(`${API_BASE_URL}/${id}`,formData);
  } catch (error) {
    console.error('Error deleting form:', error);
    throw error;
  }
};

export const deleteForm = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting form:', error);
    throw error;
  }
};
