# Importar las bibliotecas necesarias
import tensorflow as tf
from tensorflow.keras import layers
import numpy as np

# Definir la dimensión del vector de entrada
latent_dim = 100

# Crear el generador
generator = tf.keras.Sequential()
generator.add(layers.Dense(7*7*256, use_bias=False, input_shape=(latent_dim,)))
generator.add(layers.BatchNormalization())
generator.add(layers.LeakyReLU())

generator.add(layers.Reshape((7, 7, 256)))
generator.add(layers.Conv2DTranspose(128, (5, 5), strides=(1, 1), padding='same', use_bias=False))
generator.add(layers.BatchNormalization())
generator.add(layers.LeakyReLU())

generator.add(layers.Conv2DTranspose(64, (5, 5), strides=(2, 2), padding='same', use_bias=False))
generator.add(layers.BatchNormalization())
generator.add(layers.LeakyReLU())

generator.add(layers.Conv2DTranspose(1, (5, 5), strides=(2, 2), padding='same', use_bias=False, activation='tanh'))

# Crear el discriminador
discriminator = tf.keras.Sequential()
discriminator.add(layers.Conv2D(64, (5, 5), strides=(2, 2), padding='same', input_shape=[28, 28, 1]))
discriminator.add(layers.LeakyReLU())
discriminator.add(layers.Dropout(0.3))

discriminator.add(layers.Conv2D(128, (5, 5), strides=(2, 2), padding='same'))
discriminator.add(layers.LeakyReLU())
discriminator.add(layers.Dropout(0.3))

discriminator.add(layers.Flatten())
discriminator.add(layers.Dense(1))

# Combinar el generador y el discriminador en un modelo GAN
gan = tf.keras.Sequential([generator, discriminator])

# Compilar el modelo GAN
discriminator.compile(optimizer=tf.keras.optimizers.Adam(1e-4), loss='binary_crossentropy')
discriminator.trainable = False
gan.compile(optimizer=tf.keras.optimizers.Adam(1e-4), loss='binary_crossentropy')

# Cargar los datos de entrenamiento (en este ejemplo, no se usarán datos reales)
x_train = np.random.randn(10000, latent_dim)

# Definir la función para generar imágenes a partir del vector de entrada
def generate_images(model, test_input):
    predictions = model(test_input, training=False)
    predictions = (predictions + 1) / 2.0 # convertir las imágenes a escala de grises entre 0 y 1
    return predictions

# Entrenar la GAN
epochs = 100
batch_size = 32

for epoch in range(epochs):
    for i in range(x_train.shape[0] // batch_size):
        # Generar ruido aleatorio como entrada para el generador
        noise = np.random.randn(batch_size, latent_dim)

        # Generar imágenes falsas utilizando el generador
        generated_images = generator(noise)

        # Concatenar imágenes falsas con imágenes reales y crear etiquetas
        real_images = np.zeros((batch_size, 28, 28, 1)) # en este ejemplo, no se usarán datos reales
        labels = np.concatenate([real_images, generated_images])
       
