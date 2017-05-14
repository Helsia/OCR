villes = [
    'Paris',
    'New York',
    'Berlin',
    'Montréal'
];

# Défi n°1

puts "DEFI N°1 - Si j'étais en vacances, j'irais à...";

villes.each do |ville|
    puts ville
end;

# Défi n°2

voyages = [
    { ville: "Paris", duree: 10 },
    { ville: "New York", duree: 5 },
    { ville: "Berlin", duree: 2 },
    { ville: "Montréal", duree: 15 },
]

puts "DEFI N°2 - Détail de mes vacances de rêve";

i=0
voyages.each do |voyage|
    puts "Voyage à " + voyages[i][:ville] + " de " + voyages[i][:duree] + " jours"
    i+=1
end

# Défi n°3

puts "DEFI N°3 - Mes vacances de rêve (enfin presque)"

j=0
voyages.each do |voyage|
    if voyages[j][:duree] <= 5
        puts "Voyage à " + voyages[j][:ville] + " de " + voyages[j][:duree] + " jours"
    end
    j+=1
end

