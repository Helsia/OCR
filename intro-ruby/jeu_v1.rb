# nombre random entre 10 et 30 => rand(10..30)

# TODO: remettre à 0 les dégats de bonus
# TODO: hp uniquement compris entre 0 et 100
# TODO: limiter le nombre de tour
# TODO: choisir le nom de son héro

class Personne
  attr_accessor :nom, :points_de_vie, :en_vie

  def initialize(nom)
    @nom = nom
    @points_de_vie = 100
    @en_vie = true
  end

  def info
    # A faire:
    # - Renvoie le nom et les points de vie si la personne est en vie
    # - Renvoie le nom et "vaincu" si la personne a été vaincue
    # Return et non puts => Pourquoi?
    if @points_de_vie > 0
      return "#{nom} (#{@points_de_vie}/100)"
    else
      return "#{nom} (vaincu)"
    end
  end

  def attaque(personne)
  # affiche ce qu'il s'est passé: "qui attaque qui ?"
  # faire subir des dégâts à la personne passée en paramètre :
  # il faut utiliser la méthode subit_attaque(...)
    # A faire:
    # - Fait subir des dégats à la personne passée en paramètre
    # - Affiche ce qu'il s'est passé
    degats_recus = degats
    personne.subit_attaque(degats_recus)
  end

  def subit_attaque(degats_recus)
  # affiche ce qu'il s'est passé: "qui subit des dégâts et combien ?"
  # réduits les points de vie en fonction des dégats_recus
  # détermine si la personne est toujours en vie
    # A faire:
    # - Réduit les points de vie en fonction des dégats reçus
    # - Affiche ce qu'il s'est passé
    # - Détermine si la personne est toujours en_vie ou non
    @points_de_vie -= degats_recus
    puts "#{nom} a donc perdu #{degats_recus} de hp et a maintenant #{points_de_vie} hp"
    if @points_de_vie <= 0
      return @en_vie = false
    end
  end
end

class Joueur < Personne
  attr_accessor :degats_bonus

  def initialize(nom)
    # Par défaut le joueur n'a pas de dégats bonus
    @degats_bonus = 0

    # Appelle le "initialize" de la classe mère (Personne)
    super(nom)
  end

  def degats
  # affiche ce qu'il s'est passé: il faut annoncer les dégats bonus du joueur
  # calculer les dégâts
    # A faire:
    # - Calculer les dégats
    # - Affiche ce qu'il s'est passé
    @degats_joueur = rand(40..60)
    @degats_joueur += @degats_bonus
    puts "Les dégats que #{@nom} infligent à l'ennemi sont de #{@degats_joueur} hp (dont #{@degats_bonus} de dégats bonus)"
    return @degats_joueur
  end

  def soin
    # A faire:
    # - Gagner de la vie
    # - Affiche ce qu'il s'est passé
    soin = rand(30..50)
    @points_de_vie += soin
    if @points_de_vie >= 100
      return @points_de_vie = 100
    end
    puts "Le soin est de #{soin}"
    puts "Les points de vie de #{nom} sont maintenant : #{points_de_vie}/100"
  end

  def ameliorer_degats
    # A faire:
    # - Augmenter les dégats bonus
    # - Affiche ce qu'il s'est passé
    @degats_bonus = 0
    @degats_bonus += rand(20..40)
    puts "Les dégats bonus de #{@nom} sont de #{degats_bonus} hp"
  end
end

class Ennemi < Personne
  def degats
    # A faire:
    # - Calculer les dégats
    @degats_ennemi = rand(5..10)
    puts "#{@nom} : Les dégats qu'ils infligent sont de #{@degats_ennemi} hp"
    return @degats_ennemi
  end
end

class Jeu
  def self.actions_possibles(monde)
    puts "ACTIONS POSSIBLES :"

    puts "0 - Se soigner"
    puts "1 - Améliorer son attaque"

    # On commence à 2 car 0 et 1 sont réservés pour les actions
    # de soin et d'amélioration d'attaque
    i = 2
    monde.ennemis.each do |ennemi|
      puts "#{i} - Attaquer #{ennemi.info}"
      i = i + 1
    end
    puts "99 - Quitter"
  end

  def self.est_fini(joueur, monde)
    # A faire:
    # - Déterminer la condition de fin du jeu
    nbre_ennemis_en_vie = 0
    monde.ennemis.each do |ennemi|
      if ennemi.en_vie == true
        nbre_ennemis_en_vie += 1
      end
    end

    if joueur.en_vie == false || nbre_ennemis_en_vie == 0
      return true
    end
  end
end

class Monde
  attr_accessor :ennemis

  def ennemis_en_vie
    # A faire:
    # - Ne retourner que les ennemis en vie
    @ennemis.each do |ennemi|
      if @en_vie == true
        return ennemi
      end
    end
  end
end

##############

# Initialisation du monde
monde = Monde.new

# Ajout des ennemis
monde.ennemis = [
  Ennemi.new("Balrog"),
  Ennemi.new("Goblin"),
  Ennemi.new("Squelette")
]

# Initialisation du joueur
joueur = Joueur.new("Jean-Michel Paladin")

# Message d'introduction. \n signifie "retour à la ligne"
puts "\n\nAinsi débutent les aventures de #{joueur.nom}\n\n"

# Boucle de jeu principale
100.times do |tour|
  puts "\n------------------ Tour numéro #{tour} ------------------"

  # Affiche les différentes actions possibles
  Jeu.actions_possibles(monde)

  puts "\nQUELLE ACTION FAIRE ?"
  # On range dans la variable "choix" ce que l'utilisateur renseigne
  choix = gets.chomp.to_i

  # En fonction du choix on appelle différentes méthodes sur le joueur
  if choix == 0
    joueur.soin
  elsif choix == 1
    joueur.ameliorer_degats
  elsif choix == 99
    # On quitte la boucle de jeu si on a choisi
    # 99 qui veut dire "quitter"
    break
  else
    # Choix - 2 car nous avons commencé à compter à partir de 2
    # car les choix 0 et 1 étaient réservés pour le soin et
    # l'amélioration d'attaque
    ennemi_a_attaquer = monde.ennemis[choix - 2]
    joueur.attaque(ennemi_a_attaquer)
  end

  puts "\nLES ENNEMIS RIPOSTENT !"
  # Pour tous les ennemis en vie ...
  monde.ennemis_en_vie.each do |ennemi|
    # ... le héro subit une attaque.
    ennemi.attaque(joueur)
  end

  puts "\nEtat du héro: #{joueur.info}\n"

  # Si le jeu est fini, on interompt la boucle
  break if Jeu.est_fini(joueur, monde)
end

puts "\nGame Over!\n"

# A faire:
# - Afficher le résultat de la partie

puts "La partie est terminée, voici les résultats:"

if joueur.en_vie == true
  puts "Vous avez gagné ! Tous les ennemis snt vaincus !"
  puts "#{joueur.nom} a fini la partie avec #{joueur.points_de_vie} hp"
else
  puts "Vous avez perdu ! Votre héros est vaincu !"
  puts "Voici l'état des ennemis:"
  monde.ennemis_en_vie.each do |ennemi|
    puts "#{ennemi.info}"
  end
end




