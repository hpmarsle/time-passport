# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup)
categories = Category.create([
    # {name: "Work", key_color: "blue"}, made in console
    {name: "Leisure", key_color: "yellow"},
    {name: "Health", key_color: "pink"}
])

timers = Timer.create([
    # {name: "Coding", elapsed_time: "00:00:00", date: "4/16/2020", category_id: 1}, made in console
    {name: "Workout", elapsed_time: "00:00:00", date: "4/16/2020", category_id: 3},
    {name: "Youtube", elapsed_time: "00:00:00", date: "4/16/2020", category_id: 2},
    {name: "Blog", elapsed_time: "00:00:00", date: "4/16/2020", category_id: 1},
    {name: "Reading", elapsed_time: "00:00:00", date: "4/16/2020", category_id: 2},
    {name: "Social Media", elapsed_time: "00:00:00", date: "4/16/2020", category_id: 2}
]);