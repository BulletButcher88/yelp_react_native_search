import axios from 'axios'

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer Hx0KC726E-VF4l7r_gRVrBHRN5bNVlcQ-s2THgs1PrLhpOiwaBEXfnuTjfZqM_byttXx4yDzRItUL8qO4JkIPbYuwWLL9genfcKwhr3Y0DliOzFKXVjexGfuJ-3BXnYx"
  }
});