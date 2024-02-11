import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:8080";

export const login = async(data)=>{
  try {
    const response = await axios.post(`${apiUrl}/auth/login`,data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const signup = async(data)=>{
  try {
    const response = await axios.post(`${apiUrl}/auth/signup`,data)
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const users = async()=>{
  try {
    const response = await axios.get(`${apiUrl}/auth/users`)
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

//employee crud

export const allEmployees = async()=>{
  try {
    const response = await axios.get(`${apiUrl}/employee`)
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export const employee = async(id)=>{
  try {
    const response = await axios.get(`${apiUrl}/employee/${id}`)
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export const createEmployee = async(data)=>{
  console.log('data', data)
  try {
    const response = await axios.post(`${apiUrl}/employee`,data)
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const updateEmployee = async(id,data,userRole)=>{
  try {
    const response = await axios.patch(`${apiUrl}/employee/${id}`,data, {
      headers: {
        'role': userRole // Include the user's role in the headers
      }
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export const deleteEmployee = async(id,userRole)=>{
  try {
    const response = await axios.delete(`${apiUrl}/employee/${id}`, {
      headers: {
        'role': userRole // Include the user's role in the headers
      }
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// serch byFilter with types asc and dec

export const fetchEmployeesByLocation = async (order) => {
  try {
    const response = await axios.get(`${apiUrl}/employee/sortedBy/Location?order=${order}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees by location:', error);
    return [];
  }
};


export const fetchEmployeesByName = async (order) => {
  try {
    const response = await axios.get(`${apiUrl}/employee/sortedBy/Name?order=${order}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees by name:', error);
    return [];
  }
};

//department crud

export const createDepartment = async(data,userRole)=>{
  console.log('data', data)
  try {
    const response = await axios.post(`${apiUrl}/department`,data, {
      headers: {
        'role': userRole // Include the user's role in the headers
      }
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const updateDepartment = async(id,data,userRole)=>{
  try {
    const response = await axios.patch(`${apiUrl}/department/${id}`,data, {
      headers: {
        'role': userRole // Include the user's role in the headers
      }
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export const deleteDepartment = async(id,userRole)=>{
  try {
    const response = await axios.delete(`${apiUrl}/department/${id}`, {
      headers: {
        'role': userRole // Include the user's role in the headers
      }
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}


