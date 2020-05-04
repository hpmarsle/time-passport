# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup)
categories = Category.create([
    {name: "Work", key_color: "LightSteelBlue"},
    {name: "Leisure", key_color: "Peru"},
    {name: "Health", key_color: "#FFB6C1"}
])

timers = Timer.create([
    {name: "Coding", elapsed_time: "00:00:00", date: "4/16/2020", category_id: 1},
    {name: "Workout", elapsed_time: "00:00:00", date: "4/16/2020", category_id: 3},
    {name: "Youtube", elapsed_time: "00:00:00", date: "4/16/2020", category_id: 2},
    {name: "Blog", elapsed_time: "00:00:00", date: "4/16/2020", category_id: 1},
    {name: "Reading", elapsed_time: "00:00:00", date: "4/16/2020", category_id: 2},
    {name: "Social Media", elapsed_time: "00:00:00", date: "4/16/2020", category_id: 2}
]);