//
//  LoginViewController.swift
//  Munchys
//
//  Created by Gayuru Gunawardana on 9/4/20.
//  Copyright © 2020 cloud. All rights reserved.
//


import UIKit

class LoginViewController: UIViewController {


    @IBOutlet weak var usernameField: UITextField!
    @IBOutlet weak var passwordField: UITextField!
    @IBOutlet weak var loginButton: UIButton!
    @IBOutlet weak var registerButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        let bottomLine = CALayer()
        bottomLine.frame = CGRect(x: 0, y: usernameField.frame.height-2, width: usernameField.frame.width, height: 0.5)
        
        bottomLine.backgroundColor=UIColor.init(red:0.55, green:0.58, blue:0.66, alpha:1.00).cgColor
        
        let bottomLineP = CALayer()
        bottomLineP.frame = CGRect(x: 0, y: passwordField.frame.height-2, width: passwordField.frame.width, height: 0.5)
  
        bottomLineP.backgroundColor=UIColor.init(red:0.55, green:0.58, blue:0.66, alpha:1.00).cgColor
        
        usernameField.borderStyle = .none
        passwordField.borderStyle = .none
        
        usernameField.layer.addSublayer(bottomLine)
        
        passwordField.isSecureTextEntry = true
        registerButton.backgroundColor = .clear
        registerButton.layer.cornerRadius = 8
        registerButton.layer.borderWidth = 1
        registerButton.layer.borderColor = UIColor.init(red:0.97, green:0.69, blue:0.62, alpha:1.00).cgColor
        
        
      

      
      
        registerButton.layoutIfNeeded()
        
        passwordField.layer.addSublayer(bottomLineP)
        
    }


}

