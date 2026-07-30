import { toast } from "react-hot-toast";

const httpAction = async (data) => {
  try {
    const response = await fetch(data.url, {
      method: data.method ? data.method : "GET",
      body: data.body ? JSON.stringify(data.body) : null,
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.message);
    }

    return result;
  } catch (error) {
    console.error(error);
    toast.error(error.message);
    return {
      status: false,
      message: error.message,
    };
  }
};

export default httpAction;
