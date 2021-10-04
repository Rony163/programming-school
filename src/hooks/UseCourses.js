// Common Data loaded Here
import { useEffect } from "react";
import { useState } from "react";

const UseCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./programming.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return [courses, setCourses]
}
export default UseCourses;