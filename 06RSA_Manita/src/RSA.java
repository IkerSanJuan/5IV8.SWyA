/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author ikers
 */
import java.math.BigInteger;
import java.util.*;

public class RSA {
    int tamPrimo;
    private BigInteger n,p,q;
    private BigInteger fi;
    private BigInteger e,d;
    
    public RSA(int tamPrimo){
        this.tamPrimo = tamPrimo;
        generarPrimos();            //Genera p y q
        generarClaves();
    }

    public RSA(BigInteger p, BigInteger q,int tamPrimo) {
        this.tamPrimo = tamPrimo;
        this.p = p;
        this.q = q;
        generarClaves();
    }


    public void generarPrimos(){
        p = new BigInteger(tamPrimo, 100, new Random());
        do q = new BigInteger(tamPrimo, 100, new Random());
        while(q.compareTo(p)==0);
    }
    
    public void generarClaves(){
        n = p.multiply(q);
        
        fi = p.subtract(BigInteger.valueOf(1));
        fi = fi.multiply(q.subtract(BigInteger.valueOf(1)));
        
        do e = new BigInteger(2*tamPrimo, new Random());
        while((e.compareTo(fi) != -1) || (e.gcd(fi).compareTo(BigInteger.valueOf(1)) != 0));
        
        d = e.modInverse(fi);
    }
    
    
    public BigInteger[] cifrar(String mensaje){
        int i;
        byte[] temp = new byte[1];
        byte[] digitos = mensaje.getBytes();
        BigInteger[] bigdigitos = new BigInteger[digitos.length];

        for(i=0; i<bigdigitos.length;i++){
            temp[0] = digitos[i];
            bigdigitos[i] = new BigInteger(temp);
        }

        BigInteger[] cifrado = new BigInteger[bigdigitos.length];

        for(i=0; i<bigdigitos.length; i++)
            cifrado[i] = bigdigitos[i].modPow(e,n);

        return(cifrado);
    }
    
    public String descifrar(BigInteger[] cifrado){
        
        BigInteger[] descifrado = new BigInteger[cifrado.length];
        
        for(int i=0;i<descifrado.length;i++){
            descifrado[i] = cifrado[i].modPow(d, n);
        }
        
        char[] charArray = new char[descifrado.length];
        
        
        for(int i=0;i<charArray.length;i++){
            charArray[i] = (char)(descifrado[i].intValue());
        }
        
        return (new String(charArray));
    }

    public BigInteger getN() {
        return n;
    }

    public BigInteger getP() {
        return p;
    }

    public BigInteger getQ() {
        return q;
    }

    public BigInteger getFi() {
        return fi;
    }

    public BigInteger getE() {
        return e;
    }

    public BigInteger getD() {
        return d;
    }
    
    
    
}
