import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'
import { useState } from 'react';

function AccountSettings() {
  const [city, setCity] = useState("Toulouse");
  const [country, setCountry] = useState("France");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Nour" />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Chhit" />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="+33 996 101 250"
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="name@gmail.com"
        />
      </FormControl>
      <FormControl id="Birth">
        <FormLabel>Birth Date</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="date"
        />
      </FormControl>
      <FormControl id="title">
        <FormLabel>Title</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder="title"
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel>City</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select city" value={city} onChange={handleCityChange}>
          <option value="Paris">Paris</option>
          <option value="Strasbourg">Strasbourg</option>
          <option value="Nice">Nice</option>
          <option value="Toulouse">Toulouse</option>
          <option value="Marseille">Marseille</option>
          <option value="New York">New York</option>
          <option value="London">London</option>
        </Select>
      </FormControl>
      <FormControl id="country">
        <FormLabel>Country</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select country" value={country} onChange={handleCountryChange}>
        <option value="France">France</option>
          <option value="america">America</option>
          <option value="england">England</option>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default AccountSettings
